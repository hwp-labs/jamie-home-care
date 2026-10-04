export type AppointmentInput = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  bookingFor: string;
  notes: string | null;
};

export type SaveAppointmentResult =
  | { ok: true; reference: string }
  | { ok: false; error: string };

// Mock store: lives in server memory and resets on restart or redeploy.
const store: Array<AppointmentInput & { reference: string; createdAt: string }> = [];

export async function saveAppointment(input: AppointmentInput): Promise<SaveAppointmentResult> {
  // Simulate network latency so the "Booking..." state is visible.
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Uncomment to test the error UI:
  // return { ok: false, error: "Mock failure" };

  const reference = `JHC-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
  store.push({ ...input, reference, createdAt: new Date().toISOString() });
  console.info("[mock] Appointment saved:", reference, input);
  return { ok: true, reference };
}