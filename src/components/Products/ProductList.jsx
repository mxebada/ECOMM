import React from "react";
import Product from "./Product";
import UsePagination from "../Bar/Pagination";
import ProductRow from "./ProductRow";

const ProductList = ({ HideShowProducts, filteredProducts }) => {
  return (
    <div className="mb-5 pb-3">
      {HideShowProducts ? (
        <div className="col-12 d-flex justify-content-between flex-wrap mb-5">
          {filteredProducts.map((item) => (
            <div className="col-10 m-auto col-md-5 col-xl-4 my-3" key={item.id}>
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
          {filteredProducts.map((item) => (
            <div className="col-12" key={item.id}>
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
                  width: "98%",
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
