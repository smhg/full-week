import getWeekday from './weekday';

export default function fullWeek (index, year, month = 0, startOfWeek = 1) {
  const weekday = getWeekday(new Date(year, month, 1), startOfWeek);

  if (index < 0) {
    return new Date(
      year,
      month,
      7 * index - weekday + 1
    );
  }

  return new Date(
    year,
    month,
    7 * index + (7 - weekday) % 7 - 6
  );
}
