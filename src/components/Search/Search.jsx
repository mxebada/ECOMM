import React from "react";
import { useTranslation } from "react-i18next";

const Search = () => {
  const { t } = useTranslation();
  return (
    <div className="col-11 col-md-6 m-auto d-flex my-5 py-5">
      <input
        type="text"
        placeholder={t("searchq")}
        className="col-10 inp-search px-3 fw-bold"
      />
      <button
        className="col-2 border-0 text-white"
        style={{ backgroundColor: "#40BFFF", fontWeight: "400" }}
      >
        {t("search")}
      </button>
    </div>
  );
};

export default Search;
