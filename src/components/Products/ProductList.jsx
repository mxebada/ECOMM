import React, { useState } from "react";
import Product from "./Product";
import UsePagination from "../Bar/Pagination";
import { PRODUCTS } from "../../data/products";
import ProductRow from "./ProductRow";

const ProductList = (props) => {


  return (
    <div className="mb-5 pb-3">
      {props.HideShowProducts ? (
        <div className="col-12 d-flex justify-content-between flex-wrap mb-5">
          {PRODUCTS.map((item) => (
            <div className="col-10 m-auto col-md-5 col-xl-4 col-xxl-4 my-3">
              <Product
                id={item.id}
                title={item.title}
                price={item.price}
                offer={item.offer}
                oldPrice={item.oldPrice}
                image={item.image}
                desc={item.desc}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="col-12 d-flex justify-content-between flex-wrap mb-5">
          {PRODUCTS.map((item) => (
            <div className="col-12">
              <ProductRow
                id={item.id}
                title={item.title}
                price={item.price}
                offer={item.offer}
                oldPrice={item.oldPrice}
                image={item.image}
                desc={item.desc}
              />
              <span
                className="my-4"
                style={{
                  display: "block",
                  width: "90%",
                  height: "2px",
                  backgroundColor: "#F6F7F8",
                  margin: "auto",
                }}
              ></span>
            </div>
          ))}
        </div>
      )}

      <div className="col-12">
        <UsePagination />
      </div>
    </div>
  );
};

export default ProductList;
