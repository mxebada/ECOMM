import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import {
  FaStar,
  FaRegStar,
  FaRegHeart,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const getProduct = PRODUCTS[id - 1];

  return (
    <div>
      <div
        className="col-12"
        style={{
          backgroundColor: "#F6F7F8",
        }}
      >
        <ul
          className="d-flex justify-content-center mt-2 fs-6"
          style={{ listStyle: "none", fontWeight: "400" }}
        >
          <li>
            <Link
              to="/"
              className="text-decoration-none"
              style={{ color: "#33A0FF" }}
            >
              HOME
            </Link>
          </li>
          <span className="mx-2" style={{ color: "#C1C8CE" }}>
            /
          </span>
          <li>
            <Link
              to="/cart"
              className="text-decoration-none"
              style={{ color: "#33A0FF" }}
            >
              Hot Deal
            </Link>
          </li>
          <span className="mx-2" style={{ color: "#C1C8CE" }}>
            /
          </span>
          <li>
            <Link
              to="/cart"
              className="text-decoration-none"
              style={{ color: "#262626" }}
            >
              {getProduct.title}
            </Link>
          </li>
        </ul>
      </div>

      <div className="col-10 m-auto my-5 d-flex">
        <div className="col-9 py-5 d-flex justify-content-between">
          <div className="col-5">
            {" "}
            <img
              src={getProduct.image}
              style={{ backgroundColor: "#E5E8EA", height: "325px" }}
              className="col-12 p-5 rounded"
              alt={getProduct.title}
            />
          </div>
          <div className="col-7 px-5">
            <h1 style={{ color: "#22262A", fontWeight: "500" }}>
              {getProduct.title}
            </h1>
            <div className="col-0 d-flex justify-content-between">
              {" "}
              <div className="text-warning">
                {" "}
                <FaStar className="ms-2" />
                <FaStar className="ms-3" />
                <FaStar className="ms-3" />
                <FaStar className="ms-3" />
                <FaRegStar className="ms-3" />
              </div>
              <span className="h61">0 reviews</span>
              <span className="text-info fs-6">Submit a review</span>
            </div>
            <div
              className="mt-4"
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "#F6F7F8",
              }}
            ></div>
            <div className="col-6 d-flex justify-content-between mt-4">
              <h5 className="text-info">${getProduct.price}.00</h5>
              <h5 className="h61 fs-6 text-decoration-line-through">
                ${getProduct.oldPrice}
              </h5>
              <h5 className="h62 fs-6">{getProduct.offer}</h5>
            </div>
            <div className="col-7 mt-2">
              <div className="col-12 d-flex justify-content-between">
                <p className="fs-6">Availability:</p>{" "}
                <p className="fs-6 col-4">In Stock</p>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <p className="fs-6">Category:</p>{" "}
                <p className="fs-6 col-4">{getProduct.category}</p>
              </div>
              <p className="fs-6">Free shipping</p>
            </div>
            <div
              className="mt-4"
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "#F6F7F8",
              }}
            ></div>
            <div className="col-7 mt-2">
              <div className="col-12 d-flex justify-content-between">
                <p className="fs-6">Select Color:</p>{" "}
                <div className="col-6 d-flex">
                  <div
                    className="rounded-circle ms-3 mt-1"
                    style={{
                      width: "16px",
                      height: "16px",
                      backgroundColor: "blue",
                    }}
                  ></div>
                  <div
                    className="rounded-circle ms-3 mt-1"
                    style={{
                      width: "16px",
                      height: "16px",
                      backgroundColor: "red",
                    }}
                  ></div>
                  <div
                    className="rounded-circle ms-3 mt-1"
                    style={{
                      width: "16px",
                      height: "16px",
                      backgroundColor: "black",
                    }}
                  ></div>
                  <div
                    className="rounded-circle ms-3 mt-1"
                    style={{
                      width: "16px",
                      height: "16px",
                      backgroundColor: "yellow",
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <p className="fs-6 mt-1">Size:</p>{" "}
                <select
                  className="form-select d-block"
                  style={{ width: "110px", height: "35px" }}
                  aria-label="Default select example"
                >
                  <option selected>XS</option>
                  <option value="1">M</option>
                  <option value="2">XXL</option>
                  <option value="3">L</option>
                </select>
              </div>
            </div>
            <div
              className="my-4"
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "#F6F7F8",
              }}
            ></div>
            <div className="col-12 d-flex justify-content-between">
              <div className="col-5">
                <div
                  className="col-8 d-flex justify-content-between rounded align-items-center px-3"
                  style={{ backgroundColor: "#F6F7F8" }}
                >
                  <button
                    className="fs-3 border-0 bg-transparent"
                    style={{ color: "#33A0FF", cursor: "pointer" }}
                    onClick={() => removeFromCart(props.id)}
                  >
                    -
                  </button>
                  <h5 className="mt-2" style={{ color: "#262626" }}>
                    5
                  </h5>
                  <button
                    className="fs-3 border-0 bg-transparent"
                    style={{ color: "#33A0FF" }}
                    onClick={() => addToCart(props.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="col-5 border-0  rounded bg-add"
                style={{ color: "#33A0FF" }}
                onClick={() => addToCart(getProduct.id)}
              >
                <IoCartOutline className="fw-bold fs-4 me-4" />
                Add to cart
              </button>
              <button
                className="fw-bold fs-5 px-2 border-0 rounded bg-add"
                style={{ color: "#33A0FF", width: "45px" }}
              >
                <FaRegHeart />
              </button>
            </div>

            <div
              className="my-4"
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "#F6F7F8",
              }}
            ></div>
            <div className="col-12 d-flex">
              <div className="col-6 pe-2">
                <button
                  className="col-12 border-0 px-3 py-3"
                  style={{ color: "#fff", backgroundColor: "#385C8E" }}
                >
                  <FaFacebookF className="fw-bold fs-4 me-1" />
                  Share on Facebook
                </button>
              </div>
              <div className="col-6 ps-2">
                <button
                  className="col-12 border-0 px-3 py-3"
                  style={{ color: "#fff", backgroundColor: "#03A9F4" }}
                >
                  <FaTwitter className="fw-bold fs-4 me-1" />
                  Share on Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 bg-black"></div>
      </div>
    </div>
  );
};

export default SingleProduct;
