import type { Lang } from '../i18n/ui';

interface Bilingual {
  en: string;
  es: string;
}

interface Experience {
  org: string;
  role: Bilingual;
  period: string;
  location?: Bilingual;
  bullets: Bilingual[];
}

interface Education {
  org: Bilingual;
  degree: Bilingual;
  period: Bilingual;
  location?: Bilingual;
}

interface SkillGroup {
  group: Bilingual;
  items: Bilingual;
}

export interface Profile {
  name: string;
  role: Bilingual;
  kpmg: Bilingual;
  bio: Bilingual;
  experience: Experience[];
  education: Education[];
  certifications: string[];
  skills: SkillGroup[];
  email: string;
}

export const profile: Profile = {
  name: 'Joaquin Cardenas',
  role: { en: 'Accounting & Data', es: 'Contabilidad y Datos' },
  kpmg: {
    en: "Ranked 1st globally in KPMG's Audit Foundations 1 training program, international cohort.",
    es: '1er puesto global en el programa Audit Foundations 1 de KPMG, cohorte internacional.',
  },
  bio: {
    en: 'Accountant-in-training with a foot already inside the data stack. I have closed months for a bar and a contracting firm, reconciled accounts at KPMG, and built the pipelines and dashboards those same finance teams now rely on. Three public projects — 29.5M rows, 131 tests, a forecast within 0.3% — show the method end to end.',
    es: 'Contador en formación con un pie ya dentro del stack de datos. Cerré meses para un bar y una empresa contratista, concilié cuentas en KPMG y construí los pipelines y dashboards de los que hoy dependen esos mismos equipos financieros. Tres proyectos públicos — 29.5M filas, 131 tests, un forecast con 0.3% de error — muestran el método de punta a punta.',
  },
  experience: [
    {
      org: 'KPMG en Peru',
      role: { en: 'Audit Data Analyst Intern', es: 'Pasante de Auditoría de Datos' },
      period: 'Jan 2026 – Mar 2026',
      location: { en: 'Lima, Peru', es: 'Lima, Perú' },
      bullets: [
        {
          en: "Ranked 1st globally in KPMG's Audit Foundations 1 training program (international cohort).",
          es: '1er puesto global en el programa Audit Foundations 1 de KPMG (cohorte internacional).',
        },
        {
          en: 'Reconciled accounts and validated data for IFRS audit engagements, using SQL and advanced Excel.',
          es: 'Concilié cuentas y validé datos para encargos de auditoría IFRS, usando SQL y Excel avanzado.',
        },
      ],
    },
    {
      org: 'La Katita — Government & Corporate Contracting',
      role: { en: 'Operations Analyst', es: 'Analista de Operaciones' },
      period: 'Aug 2024 – Aug 2025',
      bullets: [
        {
          en: 'Managed logistics, budgeting and administration for large-scale institutional food service.',
          es: 'Gestioné logística, presupuesto y administración para servicios de alimentación institucional a gran escala.',
        },
        {
          en: 'Tracked budget vs. actual spend and built routing metrics that cut delivery times by 15%.',
          es: 'Seguí presupuesto vs. real y construí métricas de ruteo que redujeron los tiempos de entrega un 15%.',
        },
      ],
    },
    {
      org: 'Triburritos — Fast Casual Food Industry',
      role: { en: 'Operations & BI Analyst', es: 'Analista de Operaciones y BI' },
      period: 'Jun 2023 – Jul 2024',
      location: { en: 'Arequipa, Peru', es: 'Arequipa, Perú' },
      bullets: [
        {
          en: 'Built automated Power BI dashboards for cash flow, labor and KPIs, raising reporting efficiency 30%.',
          es: 'Construí dashboards automatizados en Power BI para flujo de caja, personal y KPIs, elevando la eficiencia del reporting un 30%.',
        },
        {
          en: 'Analyzed transactional sales data to identify revenue leaks and cost optimization opportunities.',
          es: 'Analicé datos transaccionales de ventas para detectar fugas de ingresos y oportunidades de optimización de costos.',
        },
      ],
    },
    {
      org: 'Talleres Escarcina Torres — Automotive Service',
      role: { en: 'Accounting Systems & Data Associate', es: 'Asociado de Sistemas Contables y Datos' },
      period: 'Jan 2023 – Jun 2023',
      bullets: [
        {
          en: 'Deployed an automated Power BI ecosystem on PostgreSQL for real-time AP/AR monitoring.',
          es: 'Desplegué un ecosistema automatizado de Power BI sobre PostgreSQL para monitoreo de cuentas por pagar y cobrar en tiempo real.',
        },
        {
          en: 'Managed month-end closing and prepared preliminary financial statements.',
          es: 'Gestioné el cierre de mes y preparé estados financieros preliminares.',
        },
      ],
    },
    {
      org: 'Toro Loco Bar & Grill — Hospitality',
      role: { en: 'General Manager & Revenue Analyst', es: 'Gerente General y Analista de Ingresos' },
      period: 'May 2020 – Jun 2022',
      location: { en: 'Arequipa, Peru', es: 'Arequipa, Perú' },
      bullets: [
        {
          en: 'Analyzed sales trends and implemented electronic invoicing, driving a 55% revenue increase.',
          es: 'Analicé tendencias de venta e implementé facturación electrónica, logrando un aumento de ingresos del 55%.',
        },
        {
          en: 'Built Power BI dashboards for real-time cash flow, labor costs and revenue KPIs.',
          es: 'Construí dashboards de Power BI para flujo de caja, costos laborales y KPIs de ingresos en tiempo real.',
        },
        {
          en: 'Managed full P&L for hospitality operations.',
          es: 'Administré el P&L completo de las operaciones de hospitalidad.',
        },
      ],
    },
    {
      org: 'J-1 Program — Hospitality Operations (USA)',
      role: { en: 'Operations Associate', es: 'Asociado de Operaciones' },
      period: 'Dec 2016 – Mar 2017 & Dec 2019 – Mar 2020',
      location: { en: 'Hawaii & Ohio, USA', es: 'Hawái y Ohio, EE. UU.' },
      bullets: [
        {
          en: 'Two seasonal contracts at high-volume US resorts; worked fully in English in a US corporate environment.',
          es: 'Dos contratos de temporada en resorts de alto volumen en EE. UU.; trabajé íntegramente en inglés en un entorno corporativo estadounidense.',
        },
      ],
    },
  ],
  education: [
    {
      org: { en: 'Universidad Católica San Pablo (UCSP)', es: 'Universidad Católica San Pablo (UCSP)' },
      degree: { en: "Bachelor's degree in Accounting", es: 'Licenciatura en Contabilidad' },
      period: { en: 'Expected 2027', es: 'Previsto 2027' },
      location: { en: 'Arequipa, Peru', es: 'Arequipa, Perú' },
    },
    {
      org: { en: 'TECSUP', es: 'TECSUP' },
      degree: { en: 'Power BI Professional', es: 'Profesional en Power BI' },
      period: { en: '2022', es: '2022' },
    },
  ],
  certifications: [
    'Data Analytics for Finance — Universidad Católica San Pablo (2026)',
    'Python Essentials 2: Intermediate — Cisco (2026)',
    'SQL Interactivo — Desafío Latam (2024)',
  ],
  skills: [
    {
      group: { en: 'Finance & Accounting', es: 'Finanzas y Contabilidad' },
      items: {
        en: 'FP&A · Budgeting · Variance Analysis · Financial Reporting · AP/AR · Month-End Close · IFRS',
        es: 'FP&A · Presupuesto · Análisis de varianza · Reporting financiero · AP/AR · Cierre de mes · IFRS',
      },
    },
    {
      group: { en: 'Data & Engineering', es: 'Datos e Ingeniería' },
      items: {
        en: 'SQL · Power BI (DAX) · Python (Polars, Pandas) · Excel · Streamlit · DuckDB · Kimball · Parquet · Prefect · Docker · CI/CD',
        es: 'SQL · Power BI (DAX) · Python (Polars, Pandas) · Excel · Streamlit · DuckDB · Kimball · Parquet · Prefect · Docker · CI/CD',
      },
    },
  ],
  email: 'Joaquin.data.dev@gmail.com',
};

export function p(lang: Lang) {
  return (field: Bilingual) => field[lang];
}
