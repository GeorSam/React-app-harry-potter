import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-locize-backend";
import translationEN from "../src/locales/en/translationEN.json";
import translationFR from "../src/locales/fr/translationFR.json";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: "languageOnly",
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
    },
  });

export default i18n;
