import React from "react";

const FilterCats = ({
  filteredProductsByCat,
  changeFilterProducts,
  ProductNumberSneakers,
  ProductNumberBelts,
  ProductNumberSun,
  ProductNumberBags,
  ProductNumber,
}) => {
  return (
    <div>
      <div className="col-12 p-3" style={{ backgroundColor: "#F6F7F8" }}>
        <h3 style={{ color: "#22262A" }}>Hot Deals</h3>
        <div
          className={
            filteredProductsByCat === "All" ? "active-4 filter" : "filter"
          }
        >
          {" "}
          <h6
            onClick={() => changeFilterProducts("All")}
            style={{ cursor: "pointer" }}
          >
            All
          </h6>
          <h6>{ProductNumber}</h6>
        </div>
        <div
          className={
            filteredProductsByCat === "Bags" ? "active-4 filter" : "filter"
          }
        >
          {" "}
          <h6
            onClick={() => changeFilterProducts("Bags")}
            style={{ cursor: "pointer" }}
          >
            Bags
          </h6>
          <h6>{ProductNumberBags}</h6>
        </div>
        <div
          className={
            filteredProductsByCat === "Sneakers" ? "active-4 filter" : "filter"
          }
        >
          {" "}
          <h6
            onClick={() => changeFilterProducts("Sneakers")}
            style={{ cursor: "pointer" }}
          >
            Sneakers
          </h6>
          <h6>{ProductNumberSneakers}</h6>
        </div>
        <div
          className={
            filteredProductsByCat === "Sunglasses"
              ? "active-4 filter"
              : "filter"
          }
        >
          {" "}
          <h6
            onClick={() => changeFilterProducts("Sunglasses")}
            style={{ cursor: "pointer" }}
          >
            Sunglasses
          </h6>
          <h6>{ProductNumberSun}</h6>
        </div>
        <div
          className={
            filteredProductsByCat === "Belts" ? "active-4 filter" : "filter"
          }
        >
          {" "}
          <h6
            onClick={() => changeFilterProducts("Belts")}
            style={{ cursor: "pointer" }}
          >
            Belts
          </h6>
          <h6>{ProductNumberBelts}</h6>
        </div>
      </div>
    </div>
  );
};

export default FilterCats;
