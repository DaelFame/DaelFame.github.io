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
    en: 'Financial data analyst · Pipelines & BI',
    es: 'Analista de datos financieros · Pipelines y BI',
  },
  summary: {
    en: 'Financial data analyst with an accounting background and an engineering streak: I build the pipelines and dashboards that keep finance numbers reliable. I understand where a ledger entry comes from and how finance uses it, so decisions can keep being made on it. As General Manager of a restaurant, I moved operations from paper to digital records and used the data to justify every change; revenue grew 55%. At KPMG, I used Power Query, SQL and Python to clean very large Excel files so the audit work could start faster and stay focused. Accounting degree expected 2027. Based in Arequipa (UTC-5); worked in English at US resorts on two J-1 seasons.',
    es: 'Analista de datos financieros con base contable y mano de ingeniería: construyo los pipelines y dashboards que mantienen confiables los números de finanzas. Entiendo de dónde sale un asiento y cómo lo usa finanzas, para que se puedan seguir tomando decisiones sobre él. Como gerente general de un restaurante, pasé la operación de lo físico a lo digital y usé los datos para justificar cada cambio; los ingresos crecieron 55%. En KPMG usé Power Query, SQL y Python para limpiar Excels muy grandes y poder empezar la auditoría más rápido y enfocada. Licenciatura en Contabilidad prevista para 2027. Desde Arequipa (UTC-5); trabajé en inglés en resorts de EE. UU. en dos temporadas J-1.',
  },
  about: {
    en: "I started running a restaurant, where every decision had to be justified with numbers. First I moved the records from paper to digital; then the data let me explain each change and grow the business. That's when I fell for the combination: accounting tells you where the number comes from, finance how it's understood and used, and analytics how to see it and plan it so decisions can keep being made, like a dashboard that stays current. At KPMG I faced Excel files too big to open comfortably, and learned to tame them with Power Query, SQL and Python so the audit could focus on what mattered.",
    es: 'Empecé administrando un restaurante, donde cada decisión había que justificarla con números. Primero pasé los registros de lo físico a lo digital; luego los datos me permitieron explicar cada cambio y hacer crecer el negocio. Ahí me enamoré de la combinación: la contabilidad te dice de dónde sale el número, finanzas cómo se entiende y se usa, y la analítica cómo verlo y planificarlo para seguir decidiendo, como un cuadro de mando que se mantiene al día. En KPMG me enfrenté a Excels enormes y aprendí a domarlos con Power Query, SQL y Python para enfocar la auditoría en lo importante.',
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
          en: 'Tracked budget vs. actual spend and built routing metrics that cut delivery times by 15%.',
          es: 'Seguí presupuesto vs. real y construí métricas de ruteo que redujeron los tiempos de entrega un 15%.',
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
          en: 'Built automated Power BI dashboards for cash flow, labor and KPIs, raising reporting efficiency 30%.',
          es: 'Construí dashboards automatizados de Power BI para flujo de caja, personal y KPIs, elevando la eficiencia del reporting un 30%.',
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
      role: { en: 'General Manager & Revenue Analyst', es: 'Gerente General y Analista de Ingresos' },
      period: { en: 'May 2020 – Jun 2022', es: 'May 2020 – Jun 2022' },
      location: { en: 'Arequipa, Peru', es: 'Arequipa, Perú' },
      bullets: [
        {
          en: 'Moved restaurant records from paper to digital systems, then used the data to justify each operational change.',
          es: 'Pasé los registros del restaurante de lo físico a lo digital y usé los datos para justificar cada cambio operativo.',
        },
        {
          en: 'Analyzed sales trends and implemented electronic invoicing, driving a 55% revenue increase.',
          es: 'Analicé tendencias de venta e implementé facturación electrónica, logrando un aumento de ingresos del 55%.',
        },
        {
          en: 'Managed full P&L and built Power BI dashboards for cash flow, labor costs and revenue KPIs.',
          es: 'Administré el P&L completo y construí dashboards de Power BI para flujo de caja, costos laborales y KPIs de ingresos.',
        },
      ],
    },
    {
      org: { en: 'J-1 Program — Hospitality Operations (USA)', es: 'Programa J-1 — Operaciones de Hospitalidad (EE. UU.)' },
      role: { en: 'Operations Associate', es: 'Asociado de Operaciones' },
      period: { en: 'Dec 2016 – Mar 2017 & Dec 2019 – Mar 2020', es: 'Dic 2016 – Mar 2017 y Dic 2019 – Mar 2020' },
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
  languages: { en: 'English: B2', es: 'Inglés: B2' },
  email: 'Joaquin.data.dev@gmail.com',
  location: { en: 'Arequipa, Peru (UTC-5)', es: 'Arequipa, Perú (UTC-5)' },
};

export function p(lang: Lang) {
  return (field: Bilingual) => field[lang];
}
