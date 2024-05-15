import React from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { PiListLight } from "react-icons/pi";

const Bar = () => {
  return (
    <div className="col-12 px-3 py-1 d-flex justify-content-between align-items-center">
      <h6 className="col-1 mt-2">
        13 <span>Items</span>
      </h6>

      <div className="col-2 d-flex align-items-center">
        <h6 className="col-6 mt-2">Sort By</h6>
        <select
          className="col-7 rounded bg-transparent"
          style={{ border: "2px solid #F1F3F4", cursor: "pointer" }}
          aria-label="Default select example"
        >
          <option selected>Name</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="col-2 d-flex align-items-center">
        <h6 className="col-6 mt-2">Show</h6>
        <select
          className="col-7 rounded bg-transparent"
          style={{ border: "2px solid #F1F3F4", cursor: "pointer" }}
          aria-label="Default select example"
        >
          <option selected>12</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="col-5 d-flex justify-content-end">
        <h3 style={{ color: "#40BFFF", cursor: "pointer" }}>
          {" "}
          <HiSquares2X2 />
        </h3>
        <h3 className=" ms-2" style={{ cursor: "pointer" }}>
          {" "}
          <PiListLight />
        </h3>
      </div>
    </div>
  );
};

export default Bar;
