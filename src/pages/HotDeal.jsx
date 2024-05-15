import React from "react";
import { Link } from "react-router-dom";
import AdidasMen from "../components/Adidas/AdidasMen";
import FilterCats from "../components/Seals/FilterCats";
import PriceRange from "../components/Seals/PriceRange";

const HotDeal = () => {
  return (
    <div>
      <div
        className="col-12"
        style={{
          backgroundColor: "#F6F7F8",
        }}
      >
        <ul
          className="d-flex justify-content-center mt-2 fs-6"
          style={{ listStyle: "none", fontWeight: "400" }}
        >
          <li>
            <Link
              to="/"
              className="text-decoration-none"
              style={{ color: "#33A0FF" }}
            >
              HOME
            </Link>
          </li>
          <span className="mx-2" style={{ color: "#C1C8CE" }}>
            /
          </span>
          <li>
            <Link
              to="/hotdeal"
              className="text-decoration-none"
              style={{ color: "#262626" }}
            >
              Hot Deal
            </Link>
          </li>
        </ul>
      </div>

      <div className="col-10 m-auto d-flex">
        <div className="col-3 py-5">
          <FilterCats />
          <br />
          <PriceRange />
          <br/>
          <FilterCats />
        </div>
        <div className="col-9">
          <div className="col-12 py-5 ps-5">
            <AdidasMen />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeal;
