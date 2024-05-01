import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="col-10 m-auto col-md-5 col-xl-4 col-xxl-3 my-3">
      <div className="col-11 m-auto text-center pb-3 mt-4 section3-content-div">
        <img
          src={props.image}
          className="rounded-4 mt-3"
          width="90%"
          height="190"
          alt=""
        />
        <div
          className="active-none"
          style={{
            width: "43px",
            height: "27px",
            backgroundColor: "#FF4858",
            position: "absolute",
            top: "0",
            left: "0",
            borderRadius: "8px",
            color: "white",
          }}
        >
          <h6 style={{ fontWeight: "300", lineHeight: "28px" }}>HOT</h6>
        </div>
        <div className="overlay mt-2 rounded-4 col-12 pt-5 pb-4">
          <div className="d-flex justify-content-around m-auto p-5 col-12">
            <button
              className="border-0 bg-white"
              onClick={() => addToCart(props.id)}
            >
              <div className="icon-s fw-bold fs-2">
                <IoCartOutline />
              </div>
            </button>
            <button className="icon-s fw-bold fs-4">
              <FaRegHeart />
            </button>
          </div>
        </div>
        <Link to="/" className="text-decoration-none">
          <h2 className="fs-4 mt-2 py-2 h41">{props.title}</h2>
        </Link>
        <div className="d-flex text-warning col-7 m-auto pt-2">
          <FaStar className="ms-2" />
          <FaStar className="ms-3" />
          <FaStar className="ms-3" />
          <FaStar className="ms-3" />
          <FaStarHalfAlt className="ms-3" />
        </div>
        <div className="col-10 m-auto d-flex justify-content-between align-propss-center mt-4">
          <h5 className="text-info">${props.price}.00</h5>
          <h5 className="h61 fs-6 text-decoration-line-through">
            ${props.oldPrice}
          </h5>
          <h5 className="h62 fs-6">{props.offer}</h5>
        </div>
      </div>
    </div>
  );
};

export default Product;
