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
                  <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                    {company.description}
                  </p>
                )}
              </div>
            </div>

            {/* Case count badge */}
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-white border border-slate-200 rounded-lg px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                {cases.length}&nbsp;{caseWord(cases.length)}
              </span>
            </div>

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
