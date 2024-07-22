import React from "react";
import bootImg from "../../assets/image Product (9).png";
import { useTranslation } from "react-i18next";

const AdidasMen = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <div className="col-12" style={{ backgroundColor: "#40BFFF" }}>
      <div className="col-10 d-block d-lg-flex m-auto">
        <div className="col-12 col-lg-6">
          <div
            className={
              i18n.language === "en"
                ? "col-12 text-white text-center text-lg-start"
                : "col-12 text-white text-center text-lg-end"
            }
          >
            {" "}
            <p className="fs-1 pt-5 fw-bold">{t("adidas")} </p>
            <p className=" fs-4">{t("Performance")}</p>
            <button
              className="bg-transparent text-white mt-3 mb-5 fs-3"
              style={{
                borderLeft: "0",
                borderTop: "0",
                borderRight: "0",
                borderBottom: "2px solid white",
              }}
            >
              {t("shopNow")}
            </button>
          </div>
        </div>

        <div className="col-12 col-lg-6" style={{ marginTop: "-6%" }}>
          <img src={bootImg} className="col-12" alt="sneakers" />
        </div>
      </div>
    </div>
  );
};

export default AdidasMen;
