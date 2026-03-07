import { whatIBringItems } from '../data';

export default function WhatIBring() {
  return (
    <section
      id="bring"
      aria-labelledby="bring-heading"
      className="bg-slate-900 py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12">
        <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3">
          Моя ценность
        </p>
        <h2
          id="bring-heading"
          className="text-3xl md:text-4xl font-bold text-white leading-tight mb-14"
        >
          Ценность, которую я приношу в команду
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whatIBringItems.map((item, i) => (
            <div
              key={i}
              className="bg-white/[0.05] border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] transition-colors"
            >
              <span
                aria-hidden="true"
                className="inline-block w-6 h-0.5 bg-indigo-500 mb-4 rounded-full"
              />
              <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
