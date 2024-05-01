import React from "react";
import { HotSeals } from "../../data/HotSeals";

const HotSeal = () => {
  return (
    <div className="container d-flex hot-seal">
      {HotSeals.map((item) => (
        <div className="col-4" style={{ height: "100%", position: "relative" }}>
          <h4
            className="col-8 fw-bold ms-5 mt-3"
            style={{ position: "absolute", color: "#223263" }}
          >
            {item.title}
          </h4>
          <img
            src={item.image}
            className="d-block m-auto"
            style={{ width: "80%", height: "90%" }}
          />
          <div className="col-10 m-auto d-flex justify-content-between">
            <h6 style={{ color: "#9098B1" }}>
              <span className="text-decoration-line-through">
                ${item.oldPrice}.00
              </span>{" "}
              <span style={{ color: "#FB7181" }}>{item.offer}</span>{" "}
            </h6>
            <h6 className="mt-2" style={{ color: "#40BFFF", fontSize: "21px" }}>
              ${item.price}.00
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotSeal;
