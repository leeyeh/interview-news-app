/**
 * Returns a human-readable relative time string (e.g., "3 minutes ago", "in 2 days")
 * using the Intl.RelativeTimeFormat browser API.
 * 
 * Example usage:
 * 
 * console.log(relativeTime(Date.now() - 3000)); // "3 seconds ago"
 * 
 * console.log(relativeTime(Date.now() - 864 * 1000)); // "14 minutes ago"
 *
 * @param date - The date to compare to now (Date, string, or number)
 * @param options - Optional config: { now?: Date }
 * @returns A localized relative time string
 */
export function relativeTime(
  date: Date | string | number,
  options?: { now?: Date }
): string {
  const d = typeof date === "string" || typeof date === "number" ? new Date(date) : date;
  const now = options?.now ?? new Date();

  const diff = d.getTime() - now.getTime();

  const divisions: { amount: number; name: Intl.RelativeTimeFormatUnit }[] = [
    { amount: 60, name: "second" },
    { amount: 60, name: "minute" },
    { amount: 24, name: "hour" },
    { amount: 7, name: "day" },
    { amount: 4.34524, name: "week" }, // average weeks per month
    { amount: 12, name: "month" },
    { amount: Infinity, name: "year" }
  ];

  let duration = Math.abs(diff) / 1000; // seconds
  let i = 0;
  for (; i < divisions.length; i++) {
    if (duration < divisions[i].amount) break;
    duration /= divisions[i].amount;
  }

  const unit = divisions[i].name;
  const value = diff < 0 ? -Math.round(duration) : Math.round(duration);

  const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });
  return rtf.format(value, unit);
}
