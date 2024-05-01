import React from "react";
import bootImg from "../../assets/image Product (9).png";

const AdidasMen = () => {
  return (
    <div>
      <div
        className="col-12 d-flex py-4"
        style={{ backgroundColor: "#40BFFF", marginTop: "100px" }}
      >
        <div className="col-6 py-5 my-5 px-5 text-white">
          {" "}
          <h1 className="pt-3 fw-bold px-5 mx-5" style={{ lineHeight: "60px" }}>
            {/* {t("adidas")}{" "} */}
            Adidas Men Running Sneakers
          </h1>
          <p className="px-5 mx-5">
            {/* {t("Performance")} */}
            Performance and design. Taken right to the edge.
          </p>
          <button
            className="bg-transparent text-white pb-1"
            style={{
              marginLeft: "14%",
              marginRight: "14%",
              borderLeft: "0",
              borderTop: "0",
              borderRight: "0",
              borderBottom: "2px solid white",
            }}
          >
            {/* {t("shopNow")} */}
            Shop Now
          </button>
        </div>
        <div className="col-6 position-relative">
          <img
            src={bootImg}
            width={694}
            className="position-absolute"
            alt=""
            style={{ top: "-100px", left: "0" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdidasMen;
