const metrics = [
  {
    icon: '📉',
    label: 'SLA системы',
    labelEn: 'System Reliability',
    from: '95%',
    to: '99%',
    context: 'Стабильная работа на production',
  },
  {
    icon: '⏱',
    label: 'Downtime',
    labelEn: 'Monthly Downtime',
    from: '~36ч',
    to: '~8ч',
    context: 'Простоев в месяц — в 4.5× меньше',
  },
  {
    icon: '🔧',
    label: 'Support Load',
    labelEn: 'Bug & Support Time',
    from: '40%',
    to: '20%',
    context: 'Времени разработки на багфиксы',
  },
];

export default function DataDriven() {
  return (
    <section
      id="data-driven"
      aria-labelledby="data-driven-heading"
      className="bg-slate-900 py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12">
        <div className="mb-12">
          <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Решения на основе данных · Data-Driven Decisions
          </p>
          <h2
            id="data-driven-heading"
            className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3"
          >
            Снижаю баги и простои — бизнес экономит
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            Управляю качеством через метрики, а не ощущения. Вот результат.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-slate-700 bg-slate-800/60 px-7 py-8 flex flex-col gap-5"
            >
              {/* Icon + label */}
              <div className="flex items-center gap-3">
                <span className="text-2xl leading-none">{m.icon}</span>
                <div>
                  <div className="text-white font-semibold text-sm leading-tight">{m.label}</div>
                  <div className="text-slate-500 text-xs">{m.labelEn}</div>
                </div>
              </div>

              {/* Before → After */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-slate-400 tabular-nums">{m.from}</span>
                <span className="text-slate-600 text-xl font-light">→</span>
                <span className="text-3xl font-bold text-indigo-400 tabular-nums">{m.to}</span>
              </div>

              {/* Context */}
              <p className="text-slate-400 text-sm leading-snug border-t border-slate-700 pt-4">
                {m.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
