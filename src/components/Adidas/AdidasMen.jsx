import React from "react";
import bootImg from "../../assets/image Product (9).png";

const AdidasMen = () => {
  return (
    <div className="col-12" style={{ backgroundColor: "#40BFFF" }}>
      <div className="col-10 d-flex m-auto">
        <div className="col-6">
          <div className="col-12 text-white">
            {" "}
            <p className="fs-2 pt-5 fw-bold">
              {/* {t("adidas")}{" "} */}
              Adidas Men Running Sneakers
            </p>
            <p>
              {/* {t("Performance")} */}
              Performance and design. Taken right to the edge.
            </p>
            <button
              className="bg-transparent text-white mt-3 mb-5"
              style={{
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
        </div>

        <div className="col-6" style={{ marginTop: "-6%" }}>
          <img src={bootImg} className="col-12" alt="sneakers" />
        </div>
      </div>
    </div>
  );
};

export default AdidasMen;
