import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { ProductsFeat } from "../../data/FeaturedProducts";

const FeaturedProducts = () => {
  return (
    <div className="my-5 pb-5">
      <h1 className="text-center fw-bold my-5" style={{ color: "#22262A" }}>
        FEATURED PRODUCTS
      </h1>
      <div className="container d-flex flex-wrap">
        {ProductsFeat.map((fe) => (
          <div className="col-4 px-5 mt-3 d-flex">
            <div>
              <img
                src={fe.img}
                width={120}
                style={{ backgroundColor: "#F6F7F8" }}
                alt="Product.img"
              />
            </div>

            <div className="ms-3">
              <h5 style={{ color: "#22262A" }}>{fe.title}</h5>
              <div className="d-flex text-warning">
                <FaStar />
                <FaStar className="ms-2" />
                <FaStar className="ms-2" />
                <FaStar className="ms-2" />
                <FaStarHalfAlt className="ms-2" />
              </div>

              <div className="m-auto d-flex mt-4">
                <h6 style={{ color: "#FF4858" }}>${fe.price}.00</h6>
                <h6
                  style={{ color: "#C1C8CE" }}
                  className="text-decoration-line-through ms-3"
                >
                  ${fe.oldPrice}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
