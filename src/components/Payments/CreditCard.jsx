import React, { useState } from "react";
import { SiVisa } from "react-icons/si";
import sub from "../../assets/Subtract.png";
import { useTranslation } from "react-i18next";

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [holderNumber, setHolderNumber] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  const { t } = useTranslation()

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryChange = (event) => {
    setExpiry(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleHolderNumberChange = (event) => {
    setHolderNumber(event.target.value);
  };

  const handleSaveCardChange = () => {
    setSaveCard(!saveCard);
  };

  return (
    <div className="col-12 d-block d-lg-flex justify-content-between py-5 mt-1">
      <div className="credit col-12 m-auto col-sm-9 col-lg-6">
        <div className="col-11 m-auto mt-2 d-flex justify-content-between">
          <div
            className="plat overflow-hidden mt-3 ms-3"
            style={{ fontFamily: "sans-serif", color: "#A13E3E" }}
          >
            <img src={sub} style={{ width: "100%", height: "100%" }} alt="" />
          </div>
          <SiVisa style={{ fontSize: "60px", color: "white" }} />
        </div>
        <h1 className="fs-5 ms-4 px-2 mt-4 text-white">
          {cardNumber || "1111 2222 3333 4444"}
        </h1>
        <div className="col-12 d-flex justify-content-between m-auto mt-3">
          <div className="ms-4 px-2 fs-5 text-white">
            {expiry || "mohamed ebada"}
          </div>
          <div className="mx-3 fs-5 text-white">{cvv || "11/33"}</div>
        </div>
        {/* <div className="holder">{holderNumber}</div> */}
      </div>
      <form className="col-12 m-auto col-sm-9 col-lg-5 mt-4 pt-2">
        <input
          type="text"
          placeholder={t("card")}
          value={cardNumber}
          onChange={handleCardNumberChange}
          style={{ color: "#999999" }}
          className="col-12 border-0 px-3 bg-inp py-2 rounded "
        />
        <div className="d-flex justify-content-between my-4">
          <label className="col-5">
            <input
              type="text"
              placeholder={t("ex")}
              value={expiry}
              onChange={handleExpiryChange}
              style={{ color: "#999999" }}
              className="col-12 border-0 px-3 bg-inp py-2 rounded "
            />
          </label>
          <label className="col-6">
            <input
              type="text"
              placeholder={t("cvv")}
              value={cvv}
              onChange={handleCvvChange}
              style={{ color: "#999999" }}
              className="col-12 border-0 px-3 bg-inp py-2 rounded "
            />
          </label>
        </div>
        <input
          type="text"
          placeholder={t("holder")}
          value={holderNumber}
          onChange={handleHolderNumberChange}
          style={{ color: "#999999" }}
          className="col-12 border-0 px-3 bg-inp py-2 rounded "
        />
        <label className="d-flex mt-3">
          <input
            type="checkbox"
            checked={saveCard}
            onChange={handleSaveCardChange}
            style={{ width: "17px", height: "17px" }}
          />
          <h3 className="mx-2" style={{ color: "#999999", fontSize: "15px" }}>
            {t("save")}
          </h3>
        </label>
      </form>
    </div>
  );
};

export default CreditCardForm;
