import { CaseStudyData } from '../data';
import { scrollToSection } from './Nav';

interface Props {
  data: CaseStudyData;
  isLast?: boolean;
  hideBadge?: boolean;
}

export default function CaseStudy({ data, isLast, hideBadge }: Props) {
  return (
    <article
      id={data.id}
      aria-labelledby={`${data.id}-title`}
      className={`scroll-mt-20 ${!isLast ? 'border-b border-slate-100' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 py-20">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="mb-10">
          {!hideBadge && (
            <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-5">
              {data.competencyBadge}
            </span>
          )}
          <h3
            id={`${data.id}-title`}
            className="text-2xl md:text-3xl font-bold text-slate-900 max-w-2xl leading-snug"
          >
            {data.title}
          </h3>
        </div>

        {/* ── STAR grid ───────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">

          {/* Situation */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3">
              Ситуация
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {data.situation}
            </p>
          </div>

          {/* Task */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3">
              Задача
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {data.task}
            </p>
          </div>

          {/* Actions */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3">
              Действия
            </p>
            <ul className="space-y-2.5">
              {data.actions.map((action, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span
                    aria-hidden="true"
                    className="mt-[5px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400"
                  />
                  {action}
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
            <p className="text-[10px] font-semibold text-indigo-400 uppercase tracking-widest mb-3">
              Результаты
            </p>
            <ul className="space-y-2.5">
              {data.results.map((result, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span
                    aria-hidden="true"
                    className="mt-[5px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500"
                  />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Metric badges ────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-8" aria-label="Ключевые метрики">
          {data.metrics.map((metric, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1.5"
            >
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              {metric}
            </span>
          ))}
        </div>

        {/* ── Back link ────────────────────────────────────────────────── */}
        <button
          onClick={() => scrollToSection('competencies')}
          className="text-sm text-slate-400 hover:text-indigo-600 transition-colors"
          aria-label="К матрице компетенций"
        >
          ← К матрице компетенций
        </button>
      </div>
    </article>
  );
}
