import React, { useState } from "react";
import OfferBanner from "../components/Seals/OfferBanner";
import BestSeller from "../components/Seals/BestSeller"; // Adjusted import path
import DisplayProduct from "../components/Products/DisplayProduct";
import AdidasMen from "../components/Adidas/AdidasMen";
import FreeShipp from "../components/Adidas/FreeShip";
import LatestNews from "../components/Adidas/LatestNews";
import FeaturedProducts from "../components/Adidas/FeaturedProducts";
import Search from "../components/Search/Search";
import { PRODUCTS } from "../data/products";


const Home = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === activeFilter);

      console.log(filteredProducts);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  const filterProducts = (category) => {
    setActiveFilter(category);
  };

  return (
    <div>
      {/* <OfferBanner /> */}
      <BestSeller filterProducts={filterProducts} activeFilter={activeFilter} />
      <DisplayProduct
        filteredProducts={filteredProducts}
        visibleProducts={visibleProducts}
        loadMoreProducts={loadMoreProducts}
      />
      <div className="col-12" style={{ backgroundColor: "#40BFFF" }}>
        <AdidasMen />
      </div>
      {/* <FreeShipp /> */}
      {/* <LatestNews /> */}
      {/* <FeaturedProducts /> */}
      <Search />
    </div>
  );
};

export default Home;
