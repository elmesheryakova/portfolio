import Nav from './components/Nav';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import CompetencyMatrix from './components/CompetencyMatrix';
import CaseStudy from './components/CaseStudy';
import WhatIBring from './components/WhatIBring';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { caseStudies } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main>
        <Hero />
        <ExecutiveSummary />
        <CompetencyMatrix />

        {/* ── Case Studies ──────────────────────────────────────────── */}
        {/*
          To add a new case:
          1. Add its data object to caseStudies[] in src/data.ts
          2. Add the matching competency row in competencies[] in src/data.ts
          3. The CaseStudy component renders automatically — no code changes needed here.
        */}
        <section id="cases" aria-labelledby="cases-heading" className="bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 pt-24 pb-4">
            <p className="text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-3">
              Кейсы
            </p>
            <h2
              id="cases-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4"
            >
              Реальные ситуации. Реальные решения.
            </h2>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              Каждый кейс структурирован по схеме Ситуация → Задача →
              Действия → Результаты с измеримыми итогами.
            </p>
          </div>

          {caseStudies.map((cs, i) => (
            <CaseStudy
              key={cs.id}
              data={cs}
              isLast={i === caseStudies.length - 1}
            />
          ))}
        </section>

        <WhatIBring />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
