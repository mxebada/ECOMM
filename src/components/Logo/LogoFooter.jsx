import React from "react";

const LogoFooter = () => {
  return (
    <div>
      <div
        className="rounded-4 d-flex justify-content-center align-items-center"
        style={{ width: "46px", height: "46px", backgroundColor: "#40BFFF" }}
      >
        <div
          className="bg-white rounded-1 splash d-flex justify-content-center align-items-center"
          style={{
            width: "22px",
            height: "22px",
          }}
        >
          <div
            style={{
              backgroundColor: "#40BFFF",
              borderRadius: "3px",
              width: "10px",
              height: "10px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LogoFooter;
