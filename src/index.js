const isoWeekday = (date = new Date()) => (date.getDay() + 6) % 7 + 1;

export default function fullWeek (idx = 1, year, month = 0) {
  const weekday = isoWeekday(new Date(year, month, 1));

  if (idx < 0) {
    return new Date(
      year,
      month,
      7 * idx - weekday + 2
    );
  }

  return new Date(
    year,
    month,
    7 * idx + (8 - weekday) % 7 - 6
  );
}
