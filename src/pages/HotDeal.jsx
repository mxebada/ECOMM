import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdidasMen from "../components/Adidas/AdidasMen";
import FilterCats from "../components/Seals/FilterCats";
import PriceRange from "../components/Seals/PriceRange";
import Bar from "../components/Bar/Bar";
import ProductList from "../components/Products/ProductList";
import { PRODUCTS } from "../data/products";
import Brands from "../components/Seals/Brands";
import ColorSelector from "../components/Seals/ColorSelector";

const HotDeal = () => {
  const [HideShowProducts, setHideShowProducts] = useState(true);
  const [activeTable, setactiveTable] = useState("squ");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [filteredProductsByCat, setfilteredProductsByCat] = useState("All");
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });

  const ProductNumber = PRODUCTS.length;
  const ProductNumberBags = PRODUCTS.filter(
    (element) => element.category === "Bags"
  ).length;
  const ProductNumberSneakers = PRODUCTS.filter(
    (element) => element.category === "Sneakers"
  ).length;
  const ProductNumberSun = PRODUCTS.filter(
    (element) => element.category === "Sunglasses"
  ).length;
  const ProductNumberBelts = PRODUCTS.filter(
    (element) => element.category === "Belts"
  ).length;

  const changeToTable = () => {
    setactiveTable("squ");
    setHideShowProducts(true);
  };

  const changeToList = () => {
    setactiveTable("list");
    setHideShowProducts(false);
  };

  // Combine filters for category and price
  useEffect(() => {
    let filtered = PRODUCTS;

    if (filteredProductsByCat !== "All") {
      filtered = filtered.filter(
        (product) => product.category === filteredProductsByCat
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    setFilteredProducts(filtered);
  }, [filteredProductsByCat, priceRange]);

  const changeFilterProducts = (category) => {
    setfilteredProductsByCat(category);
  };

  const filterProductsByPrice = (minPrice, maxPrice) => {
    setPriceRange({ min: minPrice, max: maxPrice });
  };

  return (
    <div>
      <div className="col-12" style={{ backgroundColor: "#F6F7F8" }}>
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
          <FilterCats
            filteredProductsByCat={filteredProductsByCat}
            changeFilterProducts={changeFilterProducts}
            ProductNumber={ProductNumber}
            ProductNumberBags={ProductNumberBags}
            ProductNumberSneakers={ProductNumberSneakers}
            ProductNumberBelts={ProductNumberBelts}
            ProductNumberSun={ProductNumberSun}
          />
          <br />
          <PriceRange filterProductsByPrice={filterProductsByPrice} />
          <br />
          <Brands />
          <br />
          <ColorSelector/>
        </div>
        <div className="col-9 ps-5">
          <div className="col-12 pt-5">
            <AdidasMen />
          </div>
          <div className="col-12 mt-4" style={{ backgroundColor: "#F1F3F4" }}>
            <Bar
              changeToList={changeToList}
              changeToTable={changeToTable}
              ProductNumber={ProductNumber}
              activeTable={activeTable}
            />
          </div>
          <div className="col-12 d-flex justify-content-between flex-wrap mt-4">
            <ProductList
              HideShowProducts={HideShowProducts}
              filteredProducts={filteredProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeal;
