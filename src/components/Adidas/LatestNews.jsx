import React from "react";
import freeShip1 from "../../assets/Nike_logo_emblem_logotype 1.png";
import refund from "../../assets/figma-1-logo 1.png";
import support from "../../assets/kronos-logo-1-1 1.png";
import { useTranslation } from "react-i18next";

const LatestNews = () => {
  const { t } = useTranslation();

  const Last = [
    {
      img: freeShip1,
      title: t("fash"),
      date: "01 Jan,2015",
      desc: t("lorem"),
    },
    {
      img: refund,
      title: t("fig"),
      date: "01 Jan,2015",
      desc: t("lorem"),
    },
    {
      img: support,
      title: t("hr"),
      date: "01 Jan,2015",
      desc: t("lorem"),
    },
  ];

  return (
    <div className="my-5 py-5">
      <h1 className="text-center fw-bold my-4" style={{ color: "#22262A" }}>
        {t("latestnews")}
      </h1>
      <div className="col-12 col-lg-10 m-auto d-block d-lg-flex flex-wrap justify-content-between">
        {Last.map((fe) => (
          <div className="col-12 col-lg-6 col-xl-4 m-auto mt-3 d-flex justify-content-between flex-wrap">
            <div className="col-4 px-3">
              <img src={fe.img} width={120} className="mt-4" alt="" />
            </div>

            <div className="col-8">
              <span style={{ fontSize: "15px", color: "#C1C8CE" }}>
                {fe.date}
              </span>
              <h5 style={{ color: "#22262A" }}>{fe.title}</h5>
              <p>{fe.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
