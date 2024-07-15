import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// const languages = [
//   { code: "en", lang: "English" },
//   { code: "fr", lang: "French" },
//   { code: "hi", lang: "Hindi" },
//   { code: "ar", lang: "Arabic" },
// ];

const languageSelector = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(i18n.dir());
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="btn-container">
      {/* {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })} */}
      {i18n.language === "en" ? <button
        className={"ar" === i18n.language ? "selected" : ""}
        onClick={() => changeLanguage("ar")}
      >
        AR
      </button>
:
      <button
        className={"en" === i18n.language ? "selected" : ""}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>}
    </div>
  );
};

export default languageSelector;
