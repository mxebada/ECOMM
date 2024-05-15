import React from "react";
import Product from "./Product";

const DisplayProduct = (props) => {
  return (
    <div className="mb-5 pb-3">
      <div className="container d-flex justify-content-between flex-wrap mb-5">
        {props.filteredProducts.slice(0, props.visibleProducts).map((item) => (
          <div className="col-10 m-auto col-md-5 col-xl-4 col-xxl-4 my-3">
            <Product
              id={item.id}
              title={item.title}
              price={item.price}
              offer={item.offer}
              oldPrice={item.oldPrice}
              image={item.image}
            />
          </div>
        ))}
      </div>
      {/* Load more button */}
      {props.visibleProducts < props.filteredProducts.length && (
        <div className="text-center my-3 ">
          <button className="btn btn-primary" onClick={props.loadMoreProducts}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayProduct;
