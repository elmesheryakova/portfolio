import { useLang } from '../LangContext';
import { ui } from '../translations';

export default function ExecutiveSummary() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <section id="summary" aria-labelledby="summary-heading" className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12">
        <div>
          <p className="text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-3">
            {t.summaryLabel}
          </p>
          <h2
            id="summary-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8"
          >
            {t.summaryHeading}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.summaryBody}
            <br className="hidden sm:block" />
            {' '}
            {t.summaryBody2}
          </p>
        </div>
      </div>
    </section>
  );
}
