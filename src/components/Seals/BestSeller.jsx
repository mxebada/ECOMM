import React from "react";

const BestSeller = (props) => {
  return (
    <div style={{ marginTop: "350px" }}>
      <h2
        className="mt-5 fw-bold pt-5 pt-xxl-0 text-center"
        style={{ color: "#22262A" }}
      >
        {/* {t("BESTSELLER")} */}
        BEST SELLER
      </h2>

      <ul
        className="col-11 col-sm-9 col-md-7 col-xl-5 d-flex justify-content-between text-center m-auto mt-4"
        style={{ fontWeight: "600" }}
      >
        <li
          className={props.activeFilter === "All" ? "active-2" : ""}
          style={{ listStyle: "none", cursor: "pointer" }}
          onClick={() => props.filterProducts("All")}
        >
          {/* {t("all")} */}
          All
        </li>
        <li
          className={props.activeFilter === "Bags" ? "active-2" : ""}
          style={{ listStyle: "none", cursor: "pointer" }}
          onClick={() => props.filterProducts("Bags")}
        >
          {/* {t("bag")} */}
          Bags
        </li>
        <li
          className={props.activeFilter === "sneakers" ? "active-2" : ""}
          style={{ listStyle: "none", cursor: "pointer" }}
          onClick={() => props.filterProducts("sneakers")}
        >
          {/* {t("sneak")} */}
          Sneakers
        </li>
        <li
          className={props.activeFilter === "Belts" ? "active-2" : ""}
          style={{ listStyle: "none", cursor: "pointer" }}
          onClick={() => props.filterProducts("Belts")}
        >
          {/* {t("belt")} */}
          Belts
        </li>
        <li
          className={props.activeFilter === "sunglasses" ? "active-2" : ""}
          style={{ listStyle: "none", cursor: "pointer" }}
          onClick={() => props.filterProducts("sunglasses")}
        >
          {/* {t("sunglasses")} */}
          Sunglasses
        </li>
      </ul>
    </div>
  );
};

export default BestSeller;
