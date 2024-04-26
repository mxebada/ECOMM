import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import translationAr from "./locale/ar/translation.json"
// import translationEn from "./locale/en/translation.json"
import HttpApi from 'i18next-http-backend';

i18next.use(HttpApi).init(i18nextOptions);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // resources: {
    //   en: {
    //     translation: translationEn
    //   },
    //   ar: {
    //     translation: translationAr
    //   },
    // },
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: '/locale/{{lng}}/translation.json',
    },
  });

const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("Welcome to React")}</h2>
    </div>
  );
};

export default App;
