import { Decimal } from '@prisma/client/runtime/library';

export function formatCurrency(amount: Decimal | null) {
  const currencyValue = Number(amount);
  return currencyValue.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
}
