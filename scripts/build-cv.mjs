/**
 * Builds both Harvard-format CVs from the single source:
 *   src/data/profile.ts + src/data/cases.ts
 *
 * Output:
 *   cv/resume-en.tex, cv/resume-es.tex
 *   public/cv/joaquin-cardenas-cv-en.pdf, -es.pdf
 *
 * Requires pdflatex on PATH.
 */
import { profile } from '../src/data/profile.ts';
import { cases } from '../src/data/cases.ts';
import { writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const esc = (s) => {
  const map = {
    '\\': '\\textbackslash{}', '&': '\\&', '%': '\\%', '$': '\\$', '#': '\\#', _: '\\_',
    '{': '\\{', '}': '\\}', '~': '\\textasciitilde{}', '^': '\\textasciicircum{}',
    'á': "\\'a", 'é': "\\'e", 'í': "\\'i", 'ó': "\\'o", 'ú': "\\'u", 'ü': '\\"u', 'ñ': '\\~n',
    'Á': "\\'A", 'É': "\\'E", 'Í': "\\'I", 'Ó': "\\'O", 'Ú': "\\'U", 'Ü': '\\"U', 'Ñ': '\\~N',
    '¿': '?', '¡': '!', '€': 'EUR ', '−': '-', '–': '--', '—': '---', '·': '$\\cdot$',
  };
  return s.replace(/[\\&%$#_{}~^áéíóúüñÁÉÍÓÚÜÑ¿¡€−–—·]/g, (c) => map[c] ?? c);
};

const PREAMBLE = (babel) => `%-------------------------
% Resume in Latex
% Author : Jake Gutierrez — Based off of: https://github.com/sb2nov/resume (MIT)
% Generated from src/data/profile.ts + src/data/cases.ts — do not edit by hand.
%------------------------

\\documentclass[letterpaper,10pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[${babel}]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}

\\pagestyle{fancy}
\\fancyhf{}
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\pdfgentounicode=1

\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

\\begin{document}
`;

const HEAD = (d) => `\\begin{center}
    \\textbf{\\Huge \\scshape ${esc(profile.name)}} \\\\ \\vspace{1pt}
    \\small ${esc(d.location)} $|$ \\href{mailto:${profile.email}}{\\underline{${profile.email}}} $|$
    \\href{https://linkedin.com/in/joaquincardenas-data}{\\underline{linkedin.com/in/joaquincardenas-data}} $|$
    \\href{https://github.com/DaelFame}{\\underline{github.com/DaelFame}}
    \\\\ \\vspace{4pt}
    \\small ${esc(d.summary)}
\\end{center}

`;

const TITLES = {
  en: { projects: 'Projects', experience: 'Experience', education: 'Education \\& Certifications', skills: 'Skills \\& Languages', summary: 'Summary' },
  es: { projects: 'Proyectos', experience: 'Experiencia', education: 'Formación y Certificaciones', skills: 'Habilidades e Idiomas', summary: 'Resumen' },
};

const LOC = { en: 'Remote · Arequipa, Peru (UTC-5)', es: 'Remoto · Arequipa, Perú (UTC-5)' };

const SECTIONS = (lang) => {
  const d = TITLES[lang];
  const t = (o) => o[lang];
  const compact = new Set(['Talleres Escarcina Torres — Automotive Service', 'J-1 Program — Hospitality Operations (USA)']);

  const projects = cases
    .map((c) => {
      const tech = c.stack.map((s) => s.label).join(', ');
      const period = t(c.period);
      return `\\resumeProjectHeading
          {\\textbf{${esc(c.title)}} $|$ \\emph{${esc(tech)}}}{${esc(period)}}
          \\resumeItemListStart
            ${c.cvBullets.map((b) => `\\resumeItem{${esc(t(b))}}`).join('\n            ')}
          \\resumeItemListEnd`;
    })
    .join('\n');

  const experience = profile.experience
    .map((job) => {
      const isCompact = compact.has(job.org.en);
      const bullets = isCompact
        ? ''
        : `\\resumeItemListStart\n        ${job.bullets.map((b) => `\\resumeItem{${esc(t(b))}}`).join('\n        ')}\n      \\resumeItemListEnd`;
      return `\\resumeSubheading
      {${esc(t(job.role))}}{${esc(t(job.period))}}
      {${esc(t(job.org))}}{${job.location ? esc(t(job.location)) : ''}}
      ${bullets}`;
    })
    .join('\n\n');

  const education = profile.education
    .map((ed) => `\\resumeSubheading
      {${esc(t(ed.degree))}}{${esc(t(ed.period))}}
      {${esc(t(ed.org))}}{${ed.location ? esc(t(ed.location)) : ''}}`)
    .join('\n');

  const certs = profile.certifications.map((c) => `\\resumeItem{${esc(t(c))}}`).join('\n    ');
  const skills = profile.skills.map((s) => `\\textbf{${esc(t(s.group))}}{: ${esc(t(s.items))}}`).join(' \\\\\n     ');

  return `\\section{${d.projects}}
    \\resumeSubHeadingListStart
${projects}
    \\resumeSubHeadingListEnd

\\section{${d.experience}}
  \\resumeSubHeadingListStart
${experience}
  \\resumeSubHeadingListEnd

\\section{${d.education}}
  \\resumeSubHeadingListStart
${education}
    \\resumeItemListStart
    ${certs}
    \\resumeItemListEnd
  \\resumeSubHeadingListEnd

\\section{${d.skills}}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     ${skills} \\\\
     \\textbf{${lang === 'en' ? 'Languages' : 'Idiomas'}}{: ${esc(t(profile.languages))}}
    }}
 \\end{itemize}

\\end{document}
`;
};

const build = (lang) => PREAMBLE(lang === 'es' ? 'spanish,es-noshorthands' : 'english') + HEAD({ location: LOC[lang], summary: profile.summary[lang] }) + SECTIONS(lang);

mkdirSync('cv', { recursive: true });
mkdirSync('public/cv', { recursive: true });

for (const lang of ['en', 'es']) {
  const texPath = `cv/resume-${lang}.tex`;
  writeFileSync(texPath, build(lang), 'utf8');
  execFileSync('pdflatex', ['-interaction=nonstopmode', '-halt-on-error', `-output-directory=cv`, texPath], {
    stdio: 'pipe',
  });
  copyFileSync(`cv/resume-${lang}.pdf`, `public/cv/joaquin-cardenas-cv-${lang}.pdf`);
  console.log(`public/cv/joaquin-cardenas-cv-${lang}.pdf`);
}
