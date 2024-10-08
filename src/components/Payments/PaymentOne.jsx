import React, { useEffect, useState } from "react";
import { FaPaypal, FaCheck } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { AiOutlineBank } from "react-icons/ai";
import CreditCardForm from "./CreditCard";
import { FaArrowLeftLong, FaXmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const PaymentOne = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setStep(1);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const handleRev = () => {
    if (step === 1) {
      setModalOpen(false);
    } else if (step <= 3 && step > 1) {
      setStep(step - 1);
    }
  };

  const handleComplete = () => {
    setModalOpen(false);
  };

  const handleReset = () => {
    setStep(1);
    setModalOpen(false);
  };

  const [selectedMethod, setSelectedMethod] = useState("Credit Card Or Debit");
  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
  };

  const { t } = useTranslation();

  const [over, SetOver] = useState(
    window.innerWidth < 1200 ? "auto" : "hidden"
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        SetOver("auto");
      } else {
        SetOver("hidden");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <button className="col-12 rounded py-3 check-out" onClick={toggleModal}>
        {t("checkOut")}
      </button>
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="custom-div">
              <div>
                <div className="col-10 m-auto d-flex justify-content-between">
                  <button
                    onClick={handleRev}
                    className="border-0 bg-transparent d-flex fs-2"
                    style={{ color: "#40BFFF", opacity: "50%" }}
                  >
                    <FaArrowLeftLong />
                  </button>
                  <button
                    onClick={handleReset}
                    className="border-0 bg-transparent d-flex fs-2"
                    style={{ color: "#40BFFF", opacity: "50%" }}
                  >
                    <FaXmark />
                  </button>
                </div>
                <div className="text-center my-2">
                  <h1 style={{ fontSize: "32px", color: "#40BFFF" }}>
                    {t("make")}
                  </h1>
                </div>
              </div>

              {step === 1 && (
                <div className="col-10 m-auto">
                  <div className="d-flex justify-content-center align-items-center">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "#40BFFF",
                        color: "#FFFFFF",
                        fontSize: "20px",
                      }}
                    >
                      1
                    </div>
                    <span
                      style={{
                        width: "30px",
                        height: "2px",
                        backgroundColor: "#DFDEDE",
                      }}
                    ></span>
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "#DFDEDE",
                        color: "#FFFFFF",
                        fontSize: "20px",
                      }}
                    >
                      2
                    </div>
                    <span
                      style={{
                        width: "30px",
                        height: "2px",
                        backgroundColor: "#DFDEDE",
                      }}
                    ></span>
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "#DFDEDE",
                        color: "#FFFFFF",
                        fontSize: "20px",
                      }}
                    >
                      3
                    </div>
                  </div>

                  <div className="col-12 d-block d-lg-flex justify-content-between py-5">
                    <div className="col-12 col-lg-6 px-0 px-lg-4">
                      <input
                        type="text"
                        placeholder={t("first")}
                        style={{ color: "#999999" }}
                        className="col-12 border-0 bg-inp px-3 py-2 rounded "
                      />
                      <input
                        type="text"
                        placeholder={t("emailadd")}
                        style={{ color: "#999999" }}
                        className="col-12 border-0 px-3 bg-inp py-2 rounded my-4"
                      />

                      <div className="col-12">
                        <h2 className="fs-5 mb-3" style={{ color: "#40BFFF" }}>
                          Select Method Of Payment
                        </h2>
                        <div className="d-flex justify-content-between my-2">
                          <div className="d-flex">
                            <MdPayment
                              style={{ color: "#40BFFF", fontSize: "20px" }}
                            />

                            <h3
                              className="fs-6 ms-2"
                              style={{ color: "#223263" }}
                            >
                              {t("credit")}
                            </h3>
                          </div>

                          <label>
                            <input
                              type="checkbox"
                              value="Credit Card Or Debit"
                              style={{ width: "17px", height: "17px" }}
                              checked={
                                selectedMethod === "Credit Card Or Debit"
                              }
                              onChange={() =>
                                handleSelectMethod("Credit Card Or Debit")
                              }
                            />
                          </label>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                          <div className="d-flex">
                            <FaPaypal
                              style={{ color: "#40BFFF", fontSize: "20px" }}
                            />

                            <h3
                              className="fs-6 ms-2"
                              style={{ color: "#223263" }}
                            >
                              {t("paypal")}
                            </h3>
                          </div>

                          <label>
                            <input
                              type="checkbox"
                              value="Paypal"
                              style={{ width: "17px", height: "17px" }}
                              checked={selectedMethod === "Paypal"}
                              onChange={() => handleSelectMethod("Paypal")}
                            />
                          </label>
                        </div>

                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <AiOutlineBank
                              style={{ color: "#40BFFF", fontSize: "20px" }}
                            />

                            <h3
                              className="fs-6 ms-2"
                              style={{ color: "#223263" }}
                            >
                              {t("bank")}
                            </h3>
                          </div>

                          <label>
                            <input
                              type="checkbox"
                              value="Bank Transfer"
                              style={{ width: "17px", height: "17px" }}
                              checked={selectedMethod === "Bank Transfer"}
                              onChange={() =>
                                handleSelectMethod("Bank Transfer")
                              }
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 ps-0 ps-lg-4 mt-3 mt-lg-0">
                      <input
                        type="text"
                        placeholder={t("last")}
                        style={{ color: "#999999" }}
                        className="col-12 border-0 px-3 bg-inp py-2 rounded "
                      />

                      <textarea
                        className="col-12 border-0 px-3 py-2 rounded my-4 bg-inp"
                        style={{ color: "#999999" }}
                        rows={5}
                        placeholder={t("address")}
                      />
                      <input
                        type="text"
                        placeholder={t("mobile")}
                        style={{ color: "#999999" }}
                        className="col-12 border-0 bg-inp px-3 py-2 rounded "
                      />
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <button
                      className="col-12 col-lg-4 rounded py-2 check-out"
                      onClick={handleNext}
                    >
                      {t("go")}
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="col-10 m-auto">
                  <div className="d-flex justify-content-center align-items-center">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "#40BFFF",
                        color: "#FFFFFF",
                        fontSize: "20px",
                      }}
                    >
                      1
                    </div>
                    <span
                      style={{
                        width: "30px",
                        height: "2px",
                        backgroundColor: "#40BFFF",
                      }}
                    ></span>
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "#40BFFF",
                        color: "#FFFFFF",
                        fontSize: "20px",
                      }}
                    >
                      2
                    </div>
                    <span
                      style={{
                        width: "30px",
                        height: "2px",
                        backgroundColor: "#DFDEDE",
                      }}
                    ></span>
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "#DFDEDE",
                        color: "#FFFFFF",
                        fontSize: "20px",
                      }}
                    >
                      3
                    </div>
                  </div>
                  <CreditCardForm />
                  <div className="col-12 mt-1 d-flex justify-content-center">
                    <button
                      className="col-12 col-sm-9 col-lg-4 m-auto rounded py-2 check-out"
                      onClick={handleNext}
                    >
                      {t("confirm")}
                    </button>
                  </div>
                </div>
              )}
              {step === 3 && (
                <>
                  <div className="d-flex justify-content-center align-items-center">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "#40BFFF",
                        color: "#FFFFFF",
                        fontSize: "20px",
                      }}
                    >
                      1
                    </div>
                    <span
                      style={{
                        width: "30px",
                        height: "2px",
                        backgroundColor: "#40BFFF",
                      }}
                    ></span>
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "#40BFFF",
                        color: "#FFFFFF",
                        fontSize: "20px",
                      }}
                    >
                      2
                    </div>
                    <span
                      style={{
                        width: "30px",
                        height: "2px",
                        backgroundColor: "#40BFFF",
                      }}
                    ></span>
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "#40BFFF",
                        color: "#FFFFFF",
                        fontSize: "20px",
                      }}
                    >
                      3
                    </div>
                  </div>

                  <div className="d-flex justify-content-center align-items-center my-5">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "130px",
                        height: "130px",
                        backgroundColor: "#40BFFF",
                        borderRadius: "56px",
                      }}
                    >
                      <FaCheck style={{ fontSize: "45px", color: "#FFFFFF" }} />
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center my-5">
                    <h3 style={{ color: "#223263", fontWeight: "700" }}>
                      {t("success")}
                    </h3>
                  </div>
                  <div className="col-12 d-flex mt-3 justify-content-center">
                    <button
                      className="col-8 col-lg-4 m-auto rounded py-2 check-out"
                      onClick={handleComplete}
                    >
                      {t("complete")}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentOne;
