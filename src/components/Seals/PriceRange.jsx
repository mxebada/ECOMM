import React, { useState } from "react";
import PriceRangeSlider from "./PriceRangeSlider";

const PriceRange = () => {
  const [selectedMinPrice, setSelectedMinPrice] = useState(20);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(1000);

  const handlePriceChange = (min, max) => {
    setSelectedMinPrice(min);
    setSelectedMaxPrice(max);
  };
  return (
    <div>
      <div className="col-12 p-3" style={{ backgroundColor: "#F6F7F8" }}>
        <h3 style={{ color: "#22262A" }}>PRICES</h3>
        <div className="d-flex justify-content-between">
          <h5>Ranger: </h5>{" "}
          <h5>
            ${selectedMinPrice} - ${selectedMaxPrice}
          </h5>
        </div>
        <PriceRangeSlider
          minPrice={10}
          maxPrice={1000}
          onPriceChange={handlePriceChange}
        />
      </div>
    </div>
  );
};

export default PriceRange;
