import { useLang } from '../LangContext';
import { ui, useLocalizedData } from '../translations';
import { scrollToSection } from './Nav';

function handleCaseClick(anchor: string) {
  scrollToSection(anchor.replace('#', ''));
}

function CompetencyName({ name }: { name: string }) {
  const { lang } = useLang();
  const [ru, en] = name.split('|').map((t) => t.trim());

  if (lang === 'en') {
    return <div className="font-semibold text-slate-700">{en || ru}</div>;
  }

  return (
    <div>
      <div className="font-semibold text-slate-700">{ru}</div>
      {en && <div className="text-xs text-slate-400 mt-0.5">{en}</div>}
    </div>
  );
}

export default function CompetencyMatrix() {
  const { lang } = useLang();
  const t = ui[lang];
  const { competencies } = useLocalizedData();

  return (
    <section
      id="competencies"
      aria-labelledby="competencies-heading"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12">
        <p className="text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-3">
          {t.competenciesLabel}
        </p>
        <h2
          id="competencies-heading"
          className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4"
        >
          {t.competenciesHeading}
        </h2>
        <p className="text-slate-500 mb-14 leading-relaxed">
          {t.competenciesDescription}
        </p>

        {/* ── Desktop table (lg+) ──────────────────────────────────────── */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full" aria-label={t.competenciesTableAriaLabel}>
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/80">
                  <th
                    scope="col"
                    className="text-left px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider w-[18%]"
                  >
                    {t.colCompetency}
                  </th>
                  <th
                    scope="col"
                    className="text-left px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider w-[27%]"
                  >
                    {t.colDemonstrates}
                  </th>
                  <th
                    scope="col"
                    className="text-left px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider w-[32%]"
                  >
                    {t.colEvidence}
                  </th>
                  <th
                    scope="col"
                    className="text-left px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider w-[23%]"
                  >
                    {t.colCase}
                  </th>
                </tr>
              </thead>
              <tbody>
                {competencies.map((comp, i) => (
                  <tr
                    key={comp.id}
                    className={`border-b border-slate-50 last:border-0 transition-colors hover:bg-indigo-50/20 ${
                      i % 2 !== 0 ? 'bg-slate-50/40' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-5 align-top">
                      <CompetencyName name={comp.name} />
                    </td>
                    <td className="px-6 py-5 align-top">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {comp.demonstrates}
                      </p>
                    </td>
                    <td className="px-6 py-5 align-top">
                      <ul className="space-y-1">
                        {comp.evidence.map((item, j) => (
                          <li key={j} className="flex items-start gap-1.5 text-sm text-slate-600 leading-relaxed">
                            <span aria-hidden="true" className="mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-slate-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-5 align-top">
                      <div className="flex flex-col gap-1.5">
                        {comp.caseLinks.map((link, j) => (
                          <button
                            key={j}
                            onClick={() => handleCaseClick(link.anchor)}
                            className="flex items-start gap-2 text-left rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 hover:border-indigo-200 hover:bg-indigo-50 transition-colors group"
                          >
                            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-indigo-100 text-indigo-500 text-[10px] font-bold flex items-center justify-center">
                              {j + 1}
                            </span>
                            <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800 leading-snug transition-colors">
                              {link.text}
                            </span>
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Mobile / Tablet cards (< lg) ─────────────────────────────── */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4">
          {competencies.map((comp) => (
            <div
              key={comp.id}
              className="bg-white rounded-xl p-5 shadow-sm border border-slate-200"
            >
              <div className="mb-4">
                <CompetencyName name={comp.name} />
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {t.colDemonstrates}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {comp.demonstrates}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {t.colEvidence}
                  </p>
                  <ul className="space-y-1">
                    {comp.evidence.map((item, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-sm text-slate-600 leading-relaxed">
                        <span aria-hidden="true" className="mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-slate-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                {comp.caseLinks.map((link, j) => (
                  <button
                    key={j}
                    onClick={() => handleCaseClick(link.anchor)}
                    className="flex items-start gap-2 text-left rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 hover:border-indigo-200 hover:bg-indigo-50 transition-colors group"
                  >
                    <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-indigo-100 text-indigo-500 text-[10px] font-bold flex items-center justify-center">
                      {j + 1}
                    </span>
                    <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800 leading-snug transition-colors">
                      {link.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
