import type { Lang } from '../i18n/ui';

export interface Bilingual {
  en: string;
  es: string;
}

export interface Experience {
  org: Bilingual;
  role: Bilingual;
  period: Bilingual;
  location?: Bilingual;
  bullets: Bilingual[];
}

export interface Education {
  org: Bilingual;
  degree: Bilingual;
  period: Bilingual;
  location?: Bilingual;
}

export interface SkillGroup {
  group: Bilingual;
  items: Bilingual;
}

export interface Profile {
  name: string;
  title: Bilingual;
  summary: Bilingual;
  about: Bilingual;
  experience: Experience[];
  education: Education[];
  certifications: Bilingual[];
  skills: SkillGroup[];
  languages: Bilingual;
  email: string;
  location: Bilingual;
}

export const profile: Profile = {
  name: 'Joaquin Cardenas',
  title: {
    en: 'Financial Data Analyst',
    es: 'Analista de datos financieros',
  },
  summary: {
    en: 'Financial data analyst with an accounting background: I build the pipelines and dashboards that keep finance numbers reliable. Ranked 1st globally in KPMG\'s Audit Foundations 1; at KPMG I cleaned very large Excel files with Power Query, SQL and Python so IFRS audit work could start faster. Previously general administrator of a restaurant, where I moved records from paper to digital and managed the P&L while the operation grew from 2 to 6 locations. Accounting degree expected 2027.',
    es: 'Analista de datos financieros con base contable: construyo los pipelines y dashboards que mantienen confiables los números de finanzas. 1.er puesto global en Audit Foundations 1 de KPMG; en KPMG limpié Excels muy grandes con Power Query, SQL y Python para que la auditoría IFRS empezara más rápido. Antes fui administrador general de un restaurante, donde pasé los registros de papel a digital y llevé el P&L mientras la operación pasaba de 2 a 6 locales. Licenciatura en Contabilidad prevista para 2027.',
  },
  about: {
    en: "I ran a restaurant before I knew the job was called FP&A. Every decision —pricing, staffing, purchasing— had to be backed by a number, and the numbers lived on paper. I moved them into digital records, took over the full P&L and used that data to justify each change, while the operation grew from 2 to 6 locations.\n\nThat is where three pieces clicked, and they are still what I do: accounting tells you where a number comes from, finance explains how it is used, and analytics turns it into something you can see coming. I then ran month-end closes and AP/AR reporting for an automotive workshop, and built Power BI reporting for two food-service operations where nothing had been measured before.\n\nAt KPMG I met the other extreme —Excel files that would not open and IFRS audits where days disappear before the real work starts— and tamed them with Power Query, SQL and Python. I also ranked 1st globally in KPMG's Audit Foundations 1 program. Today I am finishing my accounting degree and building public projects that show the method end to end.",
    es: 'Dirigí un restaurante antes de saber que ese trabajo se llamaba FP&A. Cada decisión —precios, personal, compras— tenía que sostenerse con un número, y los números vivían en papel. Los pasé a registros digitales, llevé el P&L completo y usé esos datos para justificar cada cambio, mientras la operación pasaba de 2 a 6 locales.\n\nAhí encajaron tres piezas, y son las que sigo haciendo: la contabilidad dice de dónde sale un número, finanzas explica cómo se usa y la analítica lo convierte en algo que se ve venir. Después llevé cierres de mes y el reporting de cuentas por pagar y cobrar de un taller automotriz, y armé reporting en Power BI para dos operaciones de alimentos donde antes no se medía nada.\n\nEn KPMG conocí el otro extremo —Excels que no abrían y auditorías IFRS donde los días se van antes de llegar a lo importante— y los domé con Power Query, SQL y Python. Ahí también obtuve el 1.er puesto global en el programa Audit Foundations 1. Hoy termino la carrera de Contabilidad y construyo proyectos públicos que muestran el método de punta a punta.',
  },
  experience: [
    {
      org: { en: 'KPMG in Peru', es: 'KPMG en Perú' },
      role: { en: 'Audit Data Analyst Intern', es: 'Pasante de Auditoría de Datos' },
      period: { en: 'Jan 2026 – Mar 2026', es: 'Ene 2026 – Mar 2026' },
      location: { en: 'Lima, Peru', es: 'Lima, Perú' },
      bullets: [
        {
          en: 'Reconciled accounts and validated data for IFRS audit engagements; cleaned very large Excel files with Power Query, SQL and Python so the audit work could start faster.',
          es: 'Concilié cuentas y validé datos para encargos de auditoría IFRS; limpié Excel enormes con Power Query, SQL y Python para que la auditoría empezara más rápido.',
        },
        {
          en: "Ranked 1st globally in KPMG's Audit Foundations 1 training program (international cohort).",
          es: '1.er puesto global en el programa Audit Foundations 1 de KPMG (cohorte internacional).',
        },
      ],
    },
    {
      org: { en: 'La Katita — Government & Corporate Contracting', es: 'La Katita — Contratación Pública y Corporativa' },
      role: { en: 'Operations Analyst', es: 'Analista de Operaciones' },
      period: { en: 'Aug 2024 – Aug 2025', es: 'Ago 2024 – Ago 2025' },
      location: { en: 'Arequipa, Peru', es: 'Arequipa, Perú' },
      bullets: [
        {
          en: 'Managed logistics, budgeting and administration for large-scale institutional food service.',
          es: 'Gestioné logística, presupuesto y administración para servicios de alimentación institucional a gran escala.',
        },
        {
          en: 'Tracked budget vs. actual spend, built delivery-routing metrics and set up automated Power BI reporting (cash flow, staffing, KPIs) where nothing was measured before.',
          es: 'Seguí presupuesto vs. real, construí métricas de ruteo e implementé reporting automatizado en Power BI (flujo de caja, personal, KPIs) donde antes no existía medición.',
        },
      ],
    },
    {
      org: { en: 'Triburritos — Fast Casual Food Industry', es: 'Triburritos — Alimentación Fast Casual' },
      role: { en: 'Operations & BI Analyst', es: 'Analista de Operaciones y BI' },
      period: { en: 'Jun 2023 – Jul 2024', es: 'Jun 2023 – Jul 2024' },
      location: { en: 'Arequipa, Peru', es: 'Arequipa, Perú' },
      bullets: [
        {
          en: 'Built automated Power BI dashboards for cash flow, labor and KPIs where no reporting existed before.',
          es: 'Construí dashboards automatizados de Power BI para flujo de caja, personal y KPIs donde antes no existía reporting.',
        },
        {
          en: 'Analyzed transactional sales data to identify revenue leaks and cost optimization opportunities.',
          es: 'Analicé datos transaccionales de ventas para detectar fugas de ingresos y oportunidades de optimización de costos.',
        },
      ],
    },
    {
      org: { en: 'Talleres Escarcina Torres — Automotive Service', es: 'Talleres Escarcina Torres — Servicio Automotriz' },
      role: { en: 'Accounting Systems & Data Associate', es: 'Asociado de Sistemas Contables y Datos' },
      period: { en: 'Jan 2023 – Jun 2023', es: 'Ene 2023 – Jun 2023' },
      location: { en: 'Arequipa, Peru', es: 'Arequipa, Perú' },
      bullets: [
        {
          en: 'Deployed an automated Power BI ecosystem on PostgreSQL for AP/AR monitoring.',
          es: 'Desplegué un ecosistema automatizado de Power BI sobre PostgreSQL para el monitoreo de AP/AR.',
        },
        {
          en: 'Managed month-end closing and prepared preliminary financial statements.',
          es: 'Gestioné el cierre de mes y preparé estados financieros preliminares.',
        },
      ],
    },
    {
      org: { en: 'Toro Loco Bar & Grill — Restaurant', es: 'Toro Loco Bar & Grill — Restaurante' },
      role: { en: 'General Administrator', es: 'Administrador General' },
      period: { en: 'May 2020 – Jun 2022', es: 'May 2020 – Jun 2022' },
      location: { en: 'Arequipa, Peru', es: 'Arequipa, Perú' },
      bullets: [
        {
          en: 'Implemented sales, cost and KPI measurement (e-invoicing and Power BI dashboards) and aligned managers on those metrics; the operation grew from 2 to 6 locations.',
          es: 'Implementé medición de ventas, costos y KPIs (facturación electrónica y dashboards en Power BI) y alineé a los encargados con esas métricas; la operación pasó de 2 a 6 locales.',
        },
        {
          en: 'Moved restaurant records from paper to digital systems, then used the data to justify each operational change.',
          es: 'Pasé los registros del restaurante de lo físico a lo digital y usé los datos para justificar cada cambio operativo.',
        },
        {
          en: 'Managed the full P&L, including cash flow, labor costs and revenue KPIs.',
          es: 'Administré el P&L completo, incluidos flujo de caja, costos laborales y KPIs de ingresos.',
        },
      ],
    },
  ],
  education: [
    {
      org: { en: 'Universidad Católica San Pablo (UCSP)', es: 'Universidad Católica San Pablo (UCSP)' },
      degree: { en: "Bachelor's degree in Accounting", es: 'Licenciatura en Contabilidad' },
      period: { en: 'Expected 2027', es: 'Prevista 2027' },
      location: { en: 'Arequipa, Peru', es: 'Arequipa, Perú' },
    },
    {
      org: { en: 'TECSUP', es: 'TECSUP' },
      degree: { en: 'Power BI Professional', es: 'Profesional en Power BI' },
      period: { en: '2022', es: '2022' },
      location: { en: 'Arequipa, Peru', es: 'Arequipa, Perú' },
    },
  ],
  certifications: [
    { en: 'Data Analytics for Finance — Universidad Católica San Pablo (2026)', es: 'Data Analytics for Finance — Universidad Católica San Pablo (2026)' },
    { en: 'Python Essentials 2: Intermediate — Cisco (2026)', es: 'Python Essentials 2: Intermediate — Cisco (2026)' },
    { en: 'SQL Interactivo — Desafío Latam (2024)', es: 'SQL Interactivo — Desafío Latam (2024)' },
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
        en: 'SQL · Power BI (DAX) · Python (Polars, Pandas) · Power Query · Excel · Streamlit · DuckDB · Parquet · Prefect · Docker · CI/CD',
        es: 'SQL · Power BI (DAX) · Python (Polars, Pandas) · Power Query · Excel · Streamlit · DuckDB · Parquet · Prefect · Docker · CI/CD',
      },
    },
  ],
  languages: { en: 'English: B2 (two seasons working in the US)', es: 'Inglés: B2 (dos temporadas trabajando en EE. UU.)' },
  email: 'Joaquin.data.dev@gmail.com',
  location: { en: 'Arequipa, Peru (UTC-5)', es: 'Arequipa, Perú (UTC-5)' },
};

export function p(lang: Lang) {
  return (field: Bilingual) => field[lang];
}
