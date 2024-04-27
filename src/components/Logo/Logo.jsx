import React from "react";

const Logo = () => {
  return (
      <div
        className="rounded-3 d-flex justify-content-center align-items-center"
        style={{ width: "36px", height: "36px", backgroundColor: "#40BFFF" }}
      >
        <div
          className="bg-white rounded-1 splash d-flex justify-content-center align-items-center"
          style={{
            width: "18px",
            height: "18px",
            transform:"rotate(45deg)"
          }}
        >
          <div
            style={{
              backgroundColor: "#40BFFF",
              borderRadius: "1px",
              width: "7px",
              height: "7px",
            }}
          ></div>
        </div>
      </div>
  );
};

export default Logo;
