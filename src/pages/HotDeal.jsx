import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdidasMen from "../components/Adidas/AdidasMen";
import FilterCats from "../components/Seals/FilterCats";
import PriceRange from "../components/Seals/PriceRange";
import Bar from "../components/Bar/Bar";
import DisplayProduct from "../components/Products/DisplayProduct";
import { PRODUCTS } from "../data/products";

const HotDeal = () => {

    const [visibleProducts, setVisibleProducts] = useState(8);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === activeFilter);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  const filterProducts = (category) => {
    setActiveFilter(category);
  };
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
        <div className="col-9 ps-5">
          <div className="col-12 pt-5 ">
            <AdidasMen />
          </div>
          <div className="col-12 mt-4" style={{backgroundColor:"#F1F3F4"}}>
            <Bar/>
          </div>
          <div className="col-12 d-flex justify-content-between flex-wrap mt-4">
          <DisplayProduct
        filteredProducts={filteredProducts}
        visibleProducts={visibleProducts}
        loadMoreProducts={loadMoreProducts}
      />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeal;
