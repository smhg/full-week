export default function fullWeek (idx, year, month = 0) {
  return new Date(year, month, ((8 - (new Date(year, month, 1)).getDay()) % 7) + 1);
}
