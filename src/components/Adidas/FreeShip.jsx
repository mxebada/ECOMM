import React from "react";
import { Free } from "../../data/FreeShipping";

const FreeShipp = () => {
  return (
    <div>
      <div className="col-12 d-block d-lg-flex flex-wrap my-5">
        {Free.map((fe) => (
          <div className="col-12 col-lg-6 col-xl-4 m-auto text-center px-5 mt-3">
            <h1 style={{ fontSize: "100px", color: "#FF6875" }}>{fe.img} </h1>
            <h4 style={{ color: "#22262A" }}>{fe.title}</h4>
            <p className="col-10 m-auto px-5">{fe.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeShipp;
