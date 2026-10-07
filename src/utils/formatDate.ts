/**
 * Lightweight date helpers.
 * All portfolio dates are stored as { start, end, present? } in data files.
 * We render French labels here so the data layer stays plain.
 */

export interface DateRange {
  start: string;
  end: string | null;
  present?: boolean;
}

const MONTHS_FR = [
  "janv.",
  "févr.",
  "mars",
  "avr.",
  "mai",
  "juin",
  "juil.",
  "août",
  "sept.",
  "oct.",
  "nov.",
  "déc.",
] as const;

/**
 * "Oct. 2024" | "Présent"
 */
export function formatPeriod(range: DateRange): string {
  const start = formatMonth(range.start);
  const end = range.present || !range.end ? "Présent" : formatMonth(range.end);
  return `${start} – ${end}`;
}

/**
 * "2021 – 2023"
 */
export function formatYears(start: string, end: string | null): string {
  if (!end) return `${start} – Présent`;
  if (start === end) return start;
  return `${start} – ${end}`;
}

function formatMonth(value: string): string {
  // value formats accepted: "2024-10" or "2024-10-15"
  const parts = value.split("-");
  const year = parts[0];
  const monthNum = parts[1] ? parseInt(parts[1], 10) : null;

  if (!monthNum || Number.isNaN(monthNum)) return year;

  const label = MONTHS_FR[monthNum - 1] ?? "";
  return `${label} ${year}`;
}