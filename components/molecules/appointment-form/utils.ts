export const APPOINTMENT_SERVICES: ReadonlyArray<string> = [
  "Personal care",
  "Companionship",
  "Meal preparation",
  "Medication reminders",
  "Health monitoring",
  "Overnight care",
  "Disability support",
  "Care planning",
  "Not sure yet",
];

export const BOOKING_FOR_OPTIONS: ReadonlyArray<{ value: string; label: string }> = [
  { value: "myself", label: "Myself" },
  { value: "family", label: "A family member or friend" },
];

export const MAX_DAYS_AHEAD = 90;

// 9:00 to 16:30 in 30-minute steps, matching office hours of 9:00 - 17:00.
export const TIME_SLOTS: ReadonlyArray<string> = Array.from({ length: 16 }, (_, i) => {
  const minutes = 9 * 60 + i * 30;
  const h = String(Math.floor(minutes / 60)).padStart(2, "0");
  const m = String(minutes % 60).padStart(2, "0");
  return `${h}:${m}`;
});

export function formatTime(slot: string): string {
  const [h, m] = slot.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${suffix}`;
}

const TIME_ZONE = "America/Toronto";

function addDays(isoDate: string, days: number): string {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/** Earliest and latest bookable dates (YYYY-MM-DD) in Kitchener's time zone. */
export function getBookingWindow(): { min: string; max: string } {
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(new Date());
  return { min: addDays(today, 1), max: addDays(today, MAX_DAYS_AHEAD) };
}

export function isRealDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === value;
}