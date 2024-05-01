import React from "react";
import { Last } from "../../data/LatesNews";

const LatestNews = () => {
  return (
    <div className="my-5 py-5">
      <h1 className="text-center fw-bold my-4" style={{ color: "#22262A" }}>
        LATEST NEWS
      </h1>
      <div className="container d-flex flex-wrap">
        {Last.map((fe) => (
          <div className="col-4 px-5 mt-3 d-flex">
            <div>
              <img
                src={fe.img}
                width={120}
                style={{ marginTop: "27%" }}
                alt=""
              />
            </div>

            <div className="ms-3">
              <span style={{ fontSize: "15px", color: "#C1C8CE" }}>
                {fe.date}
              </span>
              <h5 style={{ color: "#22262A" }}>{fe.title}</h5>
              <p>{fe.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
