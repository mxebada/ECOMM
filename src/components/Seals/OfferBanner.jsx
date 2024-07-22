import React from "react";
import HotSeal from "./HotSeal";
import { useTranslation } from "react-i18next";

const OfferBanner = () => {
  const { t } = useTranslation();
  return (
    <div className=" px-2">
      <div className="col-12 rounded-2 m-auto bg-black offer img overflow-hidden">
        <div class="content">
          <p>{t("superFlash")}</p>
          <p>{t("superofer")}</p>
        </div>
      </div>
      <HotSeal />
    </div>
  );
};

export default OfferBanner;
