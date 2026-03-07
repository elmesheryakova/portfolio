import { useLang } from '../LangContext';
import { ui, useLocalizedData } from '../translations';
import { scrollToSection } from './Nav';

export default function Hero() {
  const { lang } = useLang();
  const t = ui[lang];
  const { heroMetrics } = useLocalizedData();

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-white via-slate-50 to-indigo-50/60 pt-16"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 py-20 md:py-28">
        <div>
          {/* Label */}
          <p className="text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-5">
            {t.heroLabel}
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            {t.heroHeadline}
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-12">
            {t.heroSubheadline}
          </p>

          {/* Impact metrics grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-14"
            aria-label={t.heroMetricsAriaLabel}
          >
            {heroMetrics.map((metric, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-slate-100"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500"
                />
                <span className="text-sm text-slate-700 leading-snug whitespace-pre-line">
                  {metric}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection('competencies')}
              className="px-6 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-sm shadow-indigo-200"
            >
              {t.heroCTACompetencies}
            </button>
            <button
              onClick={() => scrollToSection('cases')}
              className="px-6 py-3 bg-white text-slate-800 text-sm font-semibold rounded-xl hover:bg-slate-50 active:bg-slate-100 border border-slate-200 transition-colors shadow-sm"
            >
              {t.heroCTACases}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
