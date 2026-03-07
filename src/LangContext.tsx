import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'ru' | 'en';

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue>({ lang: 'ru', toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru');
  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang(l => l === 'ru' ? 'en' : 'ru') }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
