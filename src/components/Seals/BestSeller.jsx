// BestSeller.jsx
import React from "react";

const BestSeller = ({ filterProducts, activeFilter }) => {
  return (
    <div style={{ marginTop: "350px" }}>
      <h2
        className="mt-5 fw-bold pt-5 pt-xxl-0 text-center"
        style={{ color: "#22262A" }}
      >
        BEST SELLER
      </h2>

      <ul
        className="col-11 col-sm-9 col-md-7 col-xl-5 d-flex justify-content-between text-center m-auto mt-4"
        style={{ fontWeight: "600" }}
      >
        <li
          className={activeFilter === "All" ? "active-2" : ""}
          style={{ listStyle: "none", cursor: "pointer" }}
          onClick={() => filterProducts("All")}
        >
          All
        </li>
        <li
          className={activeFilter === "Bags" ? "active-2" : ""}
          style={{ listStyle: "none", cursor: "pointer" }}
          onClick={() => filterProducts("Bags")}
        >
          Bags
        </li>
        <li
          className={activeFilter === "Sneakers" ? "active-2" : ""}
          style={{ listStyle: "none", cursor: "pointer" }}
          onClick={() => filterProducts("Sneakers")}
        >
          Sneakers
        </li>
        <li
          className={activeFilter === "Belts" ? "active-2" : ""}
          style={{ listStyle: "none", cursor: "pointer" }}
          onClick={() => filterProducts("Belts")}
        >
          Belts
        </li>
        <li
          className={activeFilter === "Sunglasses" ? "active-2" : ""}
          style={{ listStyle: "none", cursor: "pointer" }}
          onClick={() => filterProducts("Sunglasses")}
        >
          Sunglasses
        </li>
      </ul>
    </div>
  );
};

export default BestSeller;
