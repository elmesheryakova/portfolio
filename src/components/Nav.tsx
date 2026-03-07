import { useEffect, useState } from 'react';

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'О себе', id: 'summary' },
  { label: 'Компетенции', id: 'competencies' },
  { label: 'Кейсы', id: 'cases' },
  { label: 'Моя ценность', id: 'bring' },
];

export function scrollToSection(id: string) {
  // Signal collapsible groups to expand before scrolling
  window.dispatchEvent(new CustomEvent('expand-case', { detail: { id } }));

  // Wait for React to re-render the expanded content before measuring position
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 72;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

export default function Nav() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-15% 0px -75% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav
        className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 h-16 flex items-center justify-between"
        aria-label="Основная навигация"
      >
        <span className="text-sm font-semibold text-slate-900 tracking-wide whitespace-nowrap">
          Portfolio
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1" role="list">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              role="listitem"
              onClick={() => scrollToSection(id)}
              aria-current={activeSection === id ? 'location' : undefined}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === id
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile nav — scrollable row */}
        <div
          className="md:hidden flex items-center gap-0.5 overflow-x-auto scrollbar-hide"
          role="list"
        >
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              role="listitem"
              onClick={() => scrollToSection(id)}
              aria-current={activeSection === id ? 'location' : undefined}
              className={`flex-shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                activeSection === id
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
