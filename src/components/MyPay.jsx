import React, { useState } from "react";

const MyPay = () => {
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

  const handleComplete = () => {
    setModalOpen(false);
  };

  const handleReset = () => {
    setStep(1);
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open</button>
      {modalOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 999 }}>
          <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "80%", maxWidth: "900px", height: "80%", maxHeight: "600px", backgroundColor: "white", padding: "20px", borderRadius: "8px", position: "relative" }}>
              <button onClick={handleReset} style={{ position: "absolute", top: "10px", right: "10px" }}>Close</button>
              {step === 1 && (
                <>
                  <button onClick={handleNext}>Next</button>
                  <h1>Mohamed</h1>
                </>
              )}
              {step === 2 && (
                <>
                  <button onClick={handleNext}>Next</button>
                  <h1>Ahmed</h1>
                </>
              )}
              {step === 3 && (
                <>
                  <h1>Khalid</h1>
                  <button onClick={handleComplete}>Complete</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPay;
