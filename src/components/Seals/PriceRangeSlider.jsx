import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const PriceRangeSlider = ({ minPrice, maxPrice, onPriceChange }) => {
  const [value, setValue] = useState([minPrice, maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onPriceChange(newValue[0], newValue[1]);
  };

  return (
    <Slider
      min={minPrice}
      max={maxPrice}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
    />
  );
};

export default PriceRangeSlider;
