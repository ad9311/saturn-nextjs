export function displayMonth(monthNumber: number) {
  const date = new Date(0, monthNumber - 1);
  return date.toLocaleString('default', { month: 'long' });
}

export function getCurrentMonthYear() {
  const currentDate = new Date();
  return { month: currentDate.getMonth() + 1, year: currentDate.getFullYear() };
}
