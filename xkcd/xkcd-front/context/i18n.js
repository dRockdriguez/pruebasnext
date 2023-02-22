import { useRouter } from "next/router";
import { createContext, useCallback, useContext } from "react";

import es from "../translations/es.json";
import en from "../translations/en.json";

const I18nContext = createContext();

const languages = {
  es,
  en,
};

export function I18nProvider({ children }) {
  const { locale } = useRouter();

  const t = useCallback(
    (key, ...args) => {
      let translation = languages[locale][key];

      if (args.length === 0) return translation;
      args.forEach(
        (arg, i) => (translation = translation.replace(`\${${i + 1}}`, arg))
      );

      return translation;
    },
    [locale]
  );

  return <I18nContext.Provider value={{ t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (context === undefined) {
    throw new Error("useI18n must be used within a I18nProvider");
  }

  return context;
}
