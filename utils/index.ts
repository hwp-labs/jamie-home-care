export const isDev = () => process.env.NODE_ENV === "development";

export const isLocalhost = () => {
  if (!window) return;
  return ["localhost", "127.0.0.1"].includes(window.location.hostname);
};

export const sleep = (secs: number = 3) =>
  new Promise((resolve) => setTimeout(resolve, secs * 1000));

export const iSearch = (str: string, substr?: string) => new RegExp(substr || "", "i").test(str);

export const getStartOfDate = (d?: string) => {
  const now = d ? new Date(d) : new Date();
  const utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return new Date(utc).toISOString();
};

export const isValidEmail = (email: string) =>
  /^[^\s@]{1,}@[^\s@]{1,}\.[^\s@]{1,}$/.test(email) && email.length >= 6;

export const isValidTel = (tel: string) => /^\+?[\d\s\-().]{7,15}$/.test(tel);

export const isValidOption = (data: { value: string }[], value: string) =>
  data.find((item) => item.value === value);

export const isValidIp = (ip: string) => {
  const ipv4 = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;

  const ipv6 =
    /^([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$|^((?:[a-fA-F0-9]{1,4}:){1,7}:|:(?::[a-fA-F0-9]{1,4}){1,7})$/;

  return ipv4.test(ip) || ipv6.test(ip);
};

export const getSixDigitCode = () => {
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const DIGITS = "0123456789";

  const pick = (pool: string, length: number) =>
    Array.from({ length }, () => pool[Math.floor(Math.random() * pool.length)]).join("");

  return pick(LETTERS, 3) + pick(DIGITS, 3);
};
