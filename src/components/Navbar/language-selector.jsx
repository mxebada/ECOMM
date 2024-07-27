import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="btn-container">
      {i18n.language === "en" ? (
        <button
          className={
            "ar" === i18n.language
              ? "selected"
              : "border border-secondary bg-white rounded-2 p-1 mx-3"
          }
          onClick={() => changeLanguage("ar")}
        >
          AR
        </button>
      ) : (
        <button
          className={
            "en" === i18n.language
              ? "selected"
              : "border border-secondary bg-white rounded-2 p-1 mx-3"
          }
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
      )}
    </div>
  );
};

export default languageSelector;
