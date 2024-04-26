import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import React, { useEffect } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationAr from "./locale/ar/translation.json"
import translationEn from "./locale/en/translation.json"
// import HttpApi from 'i18next-http-backend';
import Cookies from "js-cookie";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  // .use(HttpApi)
  .init({
    resources: {
      en: {
        translation: translationEn
      },
      ar: {
        translation: translationAr
      },
    },
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
    // backend: {
    //   loadPath: "./locale/{{lng}}/translation.json",
    // },
  });

const App = () => {
  const { t } = useTranslation();

  const lng = "en" || Cookies.get("i18next");

  useEffect(() => {
    window.document.dir = i18n.dir();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [lng]);


  return (
    <div>
      <h2>{t("Welcome to React")}</h2>
      <button onClick={()=> {
        i18n.changeLanguage("ar")
      }}>Ar</button>
      <button onClick={()=> {
        i18n.changeLanguage("en")
      }}>En</button>
    </div>
  );
};

export default App;
