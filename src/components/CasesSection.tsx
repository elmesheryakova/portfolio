import { useState } from 'react';
import { useLang } from '../LangContext';
import { ui, useLocalizedData } from '../translations';
import CompanyGroup from './CompanyGroup';

export default function CasesSection() {
  const { lang } = useLang();
  const t = ui[lang];
  const { companies, caseStudies } = useLocalizedData();

  const [activeId, setActiveId] = useState<string>('all');

  const visibleCompanies =
    activeId === 'all'
      ? companies
      : companies.filter((c) => c.id === activeId);

  return (
    <section id="cases" aria-labelledby="cases-heading" className="bg-white">
      {/* ── Section header ───────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 pt-24 pb-4">
        <p className="text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-3">
          {t.casesLabel}
        </p>
        <h2
          id="cases-heading"
          className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4"
        >
          {t.casesHeading}
        </h2>
        <p className="text-slate-500 leading-relaxed mb-10">
          {t.casesDescription}
        </p>

        {/* ── Company filter tabs ──────────────────────────────────── */}
        {companies.length > 1 && (
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label={t.casesFilterAriaLabel}
          >
            <button
              role="tab"
              aria-selected={activeId === 'all'}
              onClick={() => setActiveId('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeId === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {t.casesAllCompanies}
            </button>
            {companies.map((company) => (
              <button
                key={company.id}
                role="tab"
                aria-selected={activeId === company.id}
                onClick={() => setActiveId(company.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeId === company.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {company.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Grouped by company ───────────────────────────────────────── */}
      {visibleCompanies.map((company, i) => {
        const companyCases = caseStudies.filter(
          (cs) => cs.companyId === company.id,
        );
        if (companyCases.length === 0) return null;
        return (
          <div
            key={company.id}
            className={i > 0 ? 'border-t-2 border-slate-100' : ''}
          >
            <CompanyGroup company={company} cases={companyCases} />
          </div>
        );
      })}
    </section>
  );
}
