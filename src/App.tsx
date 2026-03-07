import Nav from './components/Nav';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import DataDriven from './components/DataDriven';
import CompetencyMatrix from './components/CompetencyMatrix';
import CasesSection from './components/CasesSection';
import WhatIBring from './components/WhatIBring';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main>
        <Hero />
        <ExecutiveSummary />
        <DataDriven />
        <CompetencyMatrix />

        {/*
          Чтобы добавить компанию: добавь объект в companies[] в src/data.ts
          Чтобы добавить кейс: добавь объект в caseStudies[] с нужным companyId
        */}
        <CasesSection />

        <WhatIBring />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
