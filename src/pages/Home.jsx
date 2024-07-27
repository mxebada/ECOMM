import React, { useEffect, useState } from "react";
import OfferBanner from "../components/Seals/OfferBanner";
import BestSeller from "../components/Seals/BestSeller";
import DisplayProduct from "../components/Products/DisplayProduct";
import AdidasMen from "../components/Adidas/AdidasMen";
import FreeShipp from "../components/Adidas/FreeShip";
import LatestNews from "../components/Adidas/LatestNews";
import FeaturedProducts from "../components/Adidas/FeaturedProducts";
import Search from "../components/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/products";

const Home = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [activeFilter, setActiveFilter] = useState("All");

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.all);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((item) => item.category === activeFilter);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  const filterProducts = (category) => {
    setActiveFilter(category);
  };

  return (
    <div>
      <OfferBanner />
      <BestSeller filterProducts={filterProducts} activeFilter={activeFilter} />
      <DisplayProduct
        filteredProducts={filteredProducts}
        visibleProducts={visibleProducts}
        loadMoreProducts={loadMoreProducts}
      />
      <div className="col-12" style={{ backgroundColor: "#40BFFF" }}>
        <AdidasMen />
      </div>
      <FreeShipp />
      <LatestNews />
      <FeaturedProducts />
      <Search />
    </div>
  );
};

export default Home;
