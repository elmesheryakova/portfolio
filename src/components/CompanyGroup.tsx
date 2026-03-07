import { useEffect, useState } from 'react';
import { Company, CaseStudyData } from '../data';
import { useLang } from '../LangContext';
import { ui } from '../translations';
import CaseStudy from './CaseStudy';

interface Props {
  company: Company;
  cases: CaseStudyData[];
}

function groupByBadge(cases: CaseStudyData[]): { badge: string; cases: CaseStudyData[] }[] {
  const order: string[] = [];
  const map = new Map<string, CaseStudyData[]>();
  for (const cs of cases) {
    if (!map.has(cs.competencyBadge)) {
      order.push(cs.competencyBadge);
      map.set(cs.competencyBadge, []);
    }
    map.get(cs.competencyBadge)!.push(cs);
  }
  return order.map((badge) => ({ badge, cases: map.get(badge)! }));
}

interface GroupProps {
  badge: string;
  cases: CaseStudyData[];
  isLastGroup: boolean;
}

function CollapsibleGroup({ badge, cases, isLastGroup }: GroupProps) {
  const { lang } = useLang();
  const t = ui[lang];
  const caseIds = cases.map((cs) => cs.id);

  // Open on mount if the current hash matches a case in this group
  const [isOpen, setIsOpen] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return caseIds.includes(hash);
  });

  useEffect(() => {
    function onExpandCase(e: Event) {
      const { id } = (e as CustomEvent<{ id: string }>).detail;
      if (caseIds.includes(id)) setIsOpen(true);
    }
    window.addEventListener('expand-case', onExpandCase);
    return () => window.removeEventListener('expand-case', onExpandCase);
  }, [caseIds]);

  return (
    <div className="border-t border-slate-100">
      {/* ── Toggle header ───────────────────────────────────────────── */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        className="w-full text-left"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 py-6 flex items-center justify-between gap-4 hover:bg-indigo-50/40 transition-colors">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-1 h-6 rounded-full bg-indigo-400" />
            <span className="text-base font-semibold text-slate-900">{badge}</span>
            <span className="text-xs text-indigo-500 bg-indigo-50 border border-indigo-100 rounded-full px-2.5 py-0.5 font-semibold">
              {cases.length}&nbsp;{t.caseWord(cases.length)}
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>

      {/* ── Cases ───────────────────────────────────────────────────── */}
      {isOpen && (
        <div>
          {cases.map((cs, i) => (
            <CaseStudy
              key={cs.id}
              data={cs}
              hideBadge
              isLast={isLastGroup && i === cases.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CompanyGroup({ company, cases }: Props) {
  const { lang } = useLang();
  const t = ui[lang];
  const groups = groupByBadge(cases);

  return (
    <div>
      {/* ── Company header ─────────────────────────────────────────── */}
      <div className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 py-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">

            {/* Left accent + content */}
            <div className="flex gap-5 flex-1">
              <div className="flex-shrink-0 w-1 rounded-full bg-indigo-500 self-stretch min-h-[2.5rem]" />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {company.industry && (
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-md px-2 py-0.5">
                      {company.industry}
                    </span>
                  )}
                  <span className="text-xs text-slate-400 font-medium">
                    {company.period}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {company.name}
                </h3>
                <p className="text-sm font-medium text-slate-500 mb-3">{company.role}</p>
                {company.description && (
                  <p className="text-sm text-slate-500 leading-relaxed max-w-2xl whitespace-pre-line">
                    {company.description}
                  </p>
                )}
              </div>
            </div>

            {/* Case count badge */}
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-white border border-slate-200 rounded-lg px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                {cases.length}&nbsp;{t.caseWord(cases.length)}
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* ── Collapsible competency groups ──────────────────────────── */}
      {groups.map((group, gi) => (
        <CollapsibleGroup
          key={group.badge}
          badge={group.badge}
          cases={group.cases}
          isLastGroup={gi === groups.length - 1}
        />
      ))}
    </div>
  );
}
