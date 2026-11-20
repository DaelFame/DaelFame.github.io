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
    en: 'Financial data analyst with an accounting background and an engineering streak: I build the pipelines and dashboards that keep finance numbers reliable. I understand where a ledger entry comes from and how finance uses it, so decisions can keep being made on it. As General Manager of a restaurant, I moved operations from paper to digital records and used the data to justify every change. At KPMG, I used Power Query, SQL and Python to clean very large Excel files so the audit work could start faster and stay focused. Accounting degree expected 2027. Based in Arequipa (UTC-5).',
    es: 'Analista de datos financieros con base contable y mano de ingeniería: construyo los pipelines y dashboards que mantienen confiables los números de finanzas. Entiendo de dónde sale un asiento y cómo lo usa finanzas, para que se puedan seguir tomando decisiones sobre él. Como administrador general de un restaurante, pasé la operación de lo físico a lo digital y usé los datos para justificar cada cambio. En KPMG usé Power Query, SQL y Python para limpiar Excels muy grandes y poder empezar la auditoría más rápido y enfocada. Licenciatura en Contabilidad prevista para 2027. Desde Arequipa (UTC-5).',
  },
  about: {
    en: "I ran a restaurant before I knew the job was called FP&A. Every decision —pricing, staffing, purchasing— had to be backed by a number, and the numbers lived on paper. I moved them into a digital ledger, took over the full P&L, and used that data to justify each change.\n\nThat is where the three pieces clicked, and they are still what I do: accounting tells you where a number comes from, finance explains how it is used, and analytics turns it into something you can see coming. At KPMG I met the other extreme — Excel files that would not open and IFRS audits where days disappear before the real work starts — and tamed them with Power Query, SQL and Python. Since then I have closed months for a bar and a contractor, reconciled accounts during an internship at KPMG, and built three public projects that show the method end to end.",
    es: 'Dirigí un restaurante antes de saber que ese trabajo se llamaba FP&A. Cada decisión —precios, personal, compras— tenía que sostenerse con un número, y los números vivían en papel. Los pasé a un registro digital, llevé el P&L completo y usé esos datos para justificar cada cambio.\n\nAhí encajaron las tres piezas, y son las que sigo haciendo: la contabilidad dice de dónde sale un número, finanzas explica cómo se usa y la analítica lo convierte en algo que se ve venir. En KPMG conocí el otro extremo —Excels que no abrían y auditorías IFRS donde los días se van antes de llegar a lo importante— y los domé con Power Query, SQL y Python. Desde entonces cerré meses para un bar y una contratista, concilié cuentas en una pasantía en KPMG y construí tres proyectos públicos que muestran el método de punta a punta.',
  },
  experience: [
    {
      org: { en: 'KPMG en Peru', es: 'KPMG en Perú' },
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
          en: 'Tracked budget vs. actual spend and built routing metrics that Implementé reporting automatizado en Power BI (flujo de caja, personal, KPIs) donde antes no existía medición.',
          es: 'Seguí presupuesto vs. real y construí métricas de ruteo que Implementé reporting automatizado en Power BI (flujo de caja, personal, KPIs) donde antes no existía medición.',
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
          en: 'Built automated Power BI dashboards for cash flow, labor and KPIs, Implementé reporting automatizado en Power BI (flujo de caja, personal, KPIs) donde antes no existía medición.',
          es: 'Construí dashboards automatizados de Power BI para flujo de caja, personal y KPIs, Implementé reporting automatizado en Power BI (flujo de caja, personal, KPIs) donde antes no existía medición.',
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
      role: { en: 'General Manager & Revenue Analyst', es: 'Administrador General' },
      period: { en: 'May 2020 – Jun 2022', es: 'May 2020 – Jun 2022' },
      location: { en: 'Arequipa, Peru', es: 'Arequipa, Perú' },
      bullets: [
        {
          en: 'Moved restaurant records from paper to digital systems, then used the data to justify each operational change.',
          es: 'Pasé los registros del restaurante de lo físico a lo digital y usé los datos para justificar cada cambio operativo.',
        },
        {
          en: 'Analyzed sales trends and implemented electronic invoicing, sales/cost/KPI measurement (e-invoicing and Power BI dashboards) and aligned managers on those metrics; the operation went from 2 to 6 locations.',
          es: 'Implementé medición de ventas, costos y KPIs (facturación electrónica y dashboards en Power BI) y alineé a los encargados con esas métricas; la operación pasó de 2 a 6 locales.',
        },
        {
          en: 'Managed full P&L and built Power BI dashboards for cash flow, labor costs and revenue KPIs.',
          es: 'Administré el P&L completo y construí dashboards de Power BI para flujo de caja, costos laborales y KPIs de ingresos.',
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
