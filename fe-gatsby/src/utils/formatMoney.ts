const formatter = Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

export function formatMoney(cents: number) {
  return formatter.format(cents / 100);
}
