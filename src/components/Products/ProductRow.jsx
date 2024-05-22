import React from "react";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductRow = (props) => {
  return (
    <div className="col-12 d-flex">
      <div
        className="col-3 p-3 rounded"
        style={{ backgroundColor: "#F6F7F8", height: "222px" }}
      >
        <img
          src={props.image}
          className="rounded-4"
          width="100%"
          height="190"
          alt=""
        />
      </div>
      <div className="col-9">
        <div className="col-12 ps-3">
          <Link to={`/product/${props.id}`} className="text-decoration-none">
            <h4 style={{ color: "#22262A", fontWeight: "500" }}>
              {props.title}
            </h4>
          </Link>
          <div className="col-8 d-flex justify-content-between">
            {" "}
            <div className="text-warning">
              {" "}
              <FaStar />
              <FaStar className="ms-3" />
              <FaStar className="ms-3" />
              <FaStar className="ms-3" />
              <FaRegStar className="ms-3" />
            </div>
            <span className="h61">0 reviews</span>
            <span className="text-info fs-6">Submit a review</span>
          </div>
          <div
            className="my-2"
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#F6F7F8",
            }}
          ></div>

          <div className="col-4 d-flex justify-content-between mt-4">
            <h5 className="text-info">${props.price}.00</h5>
            <h5 className="h61 fs-6 text-decoration-line-through">
              ${props.oldPrice}
            </h5>
            <h5 className="h62 fs-6">{props.offer}</h5>
          </div>
          <p className="col-12">{props.desc}</p>

          <div className="col-8">
            <button
              className="col-5 border-0 rounded bg-add"
              style={{ color: "#33A0FF", padding: "10.8px 0" }}
              onClick={() => addToCart(getProduct.id)}
            >
              <IoCartOutline className="fw-bold fs-4 me-4" />
              Add to cart
            </button>
            <button
              className="fw-bold fs-5 px-3 py-2 ms-4 border-0 rounded bg-add"
              style={{ color: "#33A0FF" }}
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
