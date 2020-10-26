export default function weekday (date = new Date(), startOfWeek = 1) {
  return (date.getDay() + (7 - startOfWeek)) % 7;
}
