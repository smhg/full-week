export default function fullWeek (idx = 1, year, month = 0) {
  return new Date(
    year,
    month,
    ((8 - (new Date(year, month, 1)).getDay()) % 7) + 1 + 7 * (idx - 1)
  );
}
