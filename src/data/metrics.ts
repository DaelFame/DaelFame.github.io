export interface Metric {
  value: string;
  label: { en: string; es: string };
}

/**
 * The four numbers shown directly under the hero.
 * Source of truth: they must match the case-study repositories.
 *  29.5M    — peru-budget-lakehouse, gold fact table
 *  S/ 0.00  — reconciliation gate, silver vs gold
 *  0.3%     — fpa-forecasting-case-study, out-of-sample revenue error, regime A
 *  131      — peru-budget-lakehouse, automated tests
 */
export const metrics: Metric[] = [
  {
    value: '29.5M',
    label: { en: 'rows in a reconciled star schema', es: 'filas en un star schema reconciliado' },
  },
  {
    value: 'S/ 0.00',
    label: { en: 'difference between Silver and Gold', es: 'diferencia entre Silver y Gold' },
  },
  {
    value: '0.3%',
    label: { en: 'one-year-ahead forecast error', es: 'error de forecast a un año' },
  },
  {
    value: '131',
    label: { en: 'automated tests in a single pipeline', es: 'tests automatizados en un solo pipeline' },
  },
];
