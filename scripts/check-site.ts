import tls from "node:tls";

const APEX = "jamiehomecare.ca";
const WWW = "www.jamiehomecare.ca";
const PATHS: ReadonlyArray<string> = [
  "/",
  "/about",
  "/services",
  "/careers",
  "/faqs",
  "/contact-us",
  "/book-appointment",
  "/privacy-policy",
];

type Check = { name: string; ok: boolean; detail: string };
const checks: Check[] = [];

function add(name: string, ok: boolean, detail: string): void {
  checks.push({ name, ok, detail });
}

async function checkRedirect(url: string, expectedPrefix: string): Promise<void> {
  try {
    const res = await fetch(url, { redirect: "manual" });
    const location = res.headers.get("location");
    const target = location ? new URL(location, url).toString() : "none";
    const ok = [301, 307, 308].includes(res.status) && target.startsWith(expectedPrefix);
    add(`Redirect ${url}`, ok, `${res.status} -> ${target}`);
  } catch (error) {
    add(`Redirect ${url}`, false, String(error));
  }
}

function checkCert(host: string): Promise<void> {
  return new Promise((resolve) => {
    let done = false;
    const finish = (ok: boolean, detail: string): void => {
      if (done) return;
      done = true;
      add(`SSL ${host}`, ok, detail);
      resolve();
    };
    const socket = tls.connect({ host, port: 443, servername: host, timeout: 8000 }, () => {
      const cert = socket.getPeerCertificate();
      const days = Math.floor((new Date(cert.valid_to).getTime() - Date.now()) / 86_400_000);
      finish(
        socket.authorized && days > 14,
        `${socket.authorized ? "trusted" : "NOT trusted"}, expires in ${days} days`,
      );
      socket.end();
    });
    socket.on("timeout", () => {
      finish(false, "timed out");
      socket.destroy();
    });
    socket.on("error", (error) => finish(false, error.message));
  });
}

async function checkPage(path: string): Promise<string> {
  const url = `https://${WWW}${path}`;
  try {
    const res = await fetch(url);
    const html = await res.text();
    add(`Page ${path}`, res.ok, `HTTP ${res.status}`);

    const description = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1] ?? "";
    add(
      `Description ${path}`,
      description.length >= 70 && description.length <= 160,
      description ? `${description.length} characters` : "missing",
    );

    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i)?.[1] ?? "";
    const expected = `https://${WWW}${path === "/" ? "" : path}`;
    add(`Canonical ${path}`, canonical.replace(/\/$/, "") === expected, canonical || "missing");

    if (path === "/") {
      add("HSTS header", res.headers.has("strict-transport-security"), res.headers.get("strict-transport-security") ?? "missing");
    }
    return html;
  } catch (error) {
    add(`Page ${path}`, false, String(error));
    return "";
  }
}

async function checkFavicons(homeHtml: string): Promise<void> {
  const targets: ReadonlyArray<{ label: string; pattern: RegExp }> = [
    { label: "Favicon", pattern: /<link[^>]+rel="icon"[^>]+href="([^"]+)"/i },
    { label: "Apple touch icon", pattern: /<link[^>]+rel="apple-touch-icon"[^>]+href="([^"]+)"/i },
  ];
  for (const { label, pattern } of targets) {
    const href = homeHtml.match(pattern)?.[1];
    if (!href) {
      add(label, false, "no <link> tag found in the home page");
      continue;
    }
    try {
      const res = await fetch(new URL(href, `https://${WWW}`));
      const type = res.headers.get("content-type") ?? "";
      add(label, res.ok && type.startsWith("image"), `${href} (${res.status}, ${type})`);
    } catch (error) {
      add(label, false, String(error));
    }
  }
}

async function main(): Promise<void> {
  await checkRedirect(`https://${APEX}`, `https://${WWW}`);
  await checkRedirect(`http://${WWW}`, `https://${WWW}`);
  await checkRedirect(`http://${APEX}`, "https://");
  await checkCert(WWW);
  await checkCert(APEX);

  let homeHtml = "";
  for (const path of PATHS) {
    const html = await checkPage(path);
    if (path === "/") homeHtml = html;
  }
  await checkFavicons(homeHtml);

  for (const c of checks) {
    console.log(`${c.ok ? "PASS" : "FAIL"}  ${c.name.padEnd(34)} ${c.detail}`);
  }
  const failed = checks.filter((c) => !c.ok).length;
  console.log(`\n${checks.length - failed}/${checks.length} checks passed`);
  process.exit(failed > 0 ? 1 : 0);
}

void main();