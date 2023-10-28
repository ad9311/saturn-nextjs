export function displayMonth(monthNumber: number) {
  const date = new Date(0, monthNumber - 1);
  return date.toLocaleString('default', { month: 'long' });
}
