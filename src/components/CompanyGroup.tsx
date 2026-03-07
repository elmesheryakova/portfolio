import { Company, CaseStudyData } from '../data';
import CaseStudy from './CaseStudy';

interface Props {
  company: Company;
  cases: CaseStudyData[];
}

function caseWord(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return 'кейс';
  if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return 'кейса';
  return 'кейсов';
}

export default function CompanyGroup({ company, cases }: Props) {
  return (
    <div>
      {/* ── Company header ─────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 pt-12 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 py-6 border-b-2 border-slate-100">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {company.industry && (
                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-md px-2 py-0.5">
                  {company.industry}
                </span>
              )}
              <span className="text-xs text-slate-400 font-medium">
                {company.period}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {company.name}
            </h3>
            <p className="text-sm text-slate-500">{company.role}</p>
            {company.description && (
              <p className="text-sm text-slate-400 mt-2 max-w-2xl">
                {company.description}
              </p>
            )}
          </div>
          <div className="flex-shrink-0 text-sm text-slate-400 sm:pt-1">
            {cases.length}&nbsp;{caseWord(cases.length)}
          </div>
        </div>
      </div>

      {/* ── Cases ──────────────────────────────────────────────────── */}
      {cases.map((cs, i) => (
        <CaseStudy key={cs.id} data={cs} isLast={i === cases.length - 1} />
      ))}
    </div>
  );
}
