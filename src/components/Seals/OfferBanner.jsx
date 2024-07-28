import React from "react";
import HotSeal from "./HotSeal";
import { useTranslation } from "react-i18next";

const OfferBanner = () => {
  const { t } = useTranslation();
  return (
    <div className=" px-2">
      <div className="col-12 rounded-2 m-auto bg-black offer img">
        <div className="content">
          <p>{t("superFlash")}</p>
          <p>{t("superofer")}</p>
        </div>
        <HotSeal />
      </div>
    </div>
  );
};

export default OfferBanner;
