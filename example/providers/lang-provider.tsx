"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { en } from "../locales/en";
import { th } from "../locales/th";

type LocaleType = "en" | "th";
type Translations = typeof en;

interface LangContextType {
  locale: LocaleType;
  setLocale: (locale: LocaleType) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<LocaleType>("en");

  const translations = locale === "en" ? en : th;

  return (
    <LangContext.Provider value={{ locale, setLocale, t: translations }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
