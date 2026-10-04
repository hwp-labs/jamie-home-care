export type ContactInput = {
  name: string;
  email: string;
  phone: string | null;
  message: string;
};

export type SaveResult = { ok: true } | { ok: false; error: string };

// Mock store: lives in server memory and resets on restart or redeploy.
const store: Array<ContactInput & { id: string; createdAt: string }> = [];

export async function saveContact(input: ContactInput): Promise<SaveResult> {
  // Simulate network latency so the "Sending..." state is visible.
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Uncomment to test the error UI:
  // return { ok: false, error: "Mock failure" };

  store.push({ ...input, id: crypto.randomUUID(), createdAt: new Date().toISOString() });
  console.info("[mock] Contact saved:", input);
  return { ok: true };
}