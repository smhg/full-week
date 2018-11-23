export default function fullWeek (idx = 1, year, month = 0) {
  const isoWeekday = ((8 - (new Date(year, month, 1)).getDay()) % 7) + 1;

  return new Date(
    year,
    month,
    isoWeekday + 7 * (idx - 1)
  );
}
