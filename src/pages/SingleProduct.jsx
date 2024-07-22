import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PRODUCTS, RealatedProducts } from "../data/products";

import {
  FaStar,
  FaRegStar,
  FaRegHeart,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Product from "../components/Products/Product";
import Reviews from "../components/Reviews/Reviews";
const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const getProduct = PRODUCTS[id - 1];
  const getProductCat = PRODUCTS.filter(
    (product) => product.category === getProduct.category
  );
  const [activeTab, setActiveTab] = useState("productInfomation");

  const changeTap = (key) => {
    setActiveTab(key);
  };

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
              to="/hotdeal"
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
              to="/"
              className="text-decoration-none"
              style={{ color: "#262626" }}
            >
              {getProduct.title}
            </Link>
          </li>
        </ul>
      </div>

      <div className="col-10 m-auto my-5 d-xl-flex">
        <div className="col-12 col-xl-9 py-5 d-block d-xl-flex justify-content-between">
          <div
            className="col-12 col-xl-5 bg-success d-block d-xl-flex flex-column justify-content-between"
            style={{ height: "515px" }}
          >
            {" "}
            <div className="col-12 bg-danger">
              <img
                src={getProduct.image}
                style={{ backgroundColor: "#E5E8EA", height: " " }}
                className="col-12 p-5 rounded"
                alt={getProduct.title}
              />
            </div>
            <div
              style={{ overflowX: "auto", whiteSpace: "nowrap" }}
              className="col-12 d-flex justify-content-between"
            >
              {getProductCat.map((item) => (
                <Link
                  style={{ height: "90px" }}
                  className="col-3 me-3 mb-1"
                  to={`/product/${item.id}`}
                >
                  <img
                    src={item.image}
                    style={{ backgroundColor: "#E5E8EA", height: "100%" }}
                    className="col-12 p-3 rounded"
                    alt={getProduct.title}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-12 col-xl-7 px-5">
            <h1
              className="col-12 text-center"
              style={{ color: "#22262A", fontWeight: "500" }}
            >
              {getProduct.title}
            </h1>
            <div className="d-block d-xl-flex justify-content-between">
              {" "}
              <div className="text-warning text-center py-2 py-xl-0">
                {" "}
                <FaStar className="ms-2" />
                <FaStar className="ms-3" />
                <FaStar className="ms-3" />
                <FaStar className="ms-3" />
                <FaRegStar className="ms-3" />
              </div>
              <div className="col-12 col-sm-10 col-md-6 m-auto d-flex justify-content-between">
                {" "}
                <span className="h61">0 reviews</span>
                <span className="text-info fs-6">Submit a review</span>
              </div>
            </div>
            <div
              className="mt-4"
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "#F6F7F8",
              }}
            ></div>
            <div className="col-12 col-md-8 col-xl-6 d-flex justify-content-between mt-4">
              <h5 className="text-info">${getProduct.price}.00</h5>
              <h5 className="h61 fs-6 text-decoration-line-through">
                ${getProduct.oldPrice}
              </h5>
              <h5 className="h62 fs-6">{getProduct.offer}</h5>
            </div>
            <div className="col-7 mt-2">
              <div className="col-12 d-flex justify-content-between">
                <p className="fs-6">Availability:</p>{" "}
                <p className="fs-6 col-12 col-md-8 col-xl-3">In Stock</p>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <p className="fs-6">Category:</p>{" "}
                <p className="fs-6 col-12 col-md-8 col-xl-3">
                  {getProduct.category}
                </p>
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
            <div className="col-12 col-xl-7 mt-2">
              {/* <div className="col-12 d-flex justify-content-between">
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
              </div> */}
              <div className="d-flex justify-content-between">
                <p className="fs-5 mt-1">Size:</p>{" "}
                <select
                  className="form-select d-block mt-1"
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
            <div className="col-12 d-block d-xl-flex justify-content-between">
              <div className=" col-xl-4">
                <div
                  className="col-12 d-flex justify-content-between mt-2 rounded align-items-center px-5 px-xl-3 py-2 py-xl-0 "
                  style={{ backgroundColor: "#F6F7F8", height: "50px" }}
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
              <div className=" col-xl-7 d-flex justify-content-between">
                <button
                  className="col-10 col-xl-9 border-0 rounded my-2 bg-add"
                  style={{ color: "#33A0FF", height: "50px" }}
                  onClick={() => addToCart(getProduct.id)}
                >
                  <IoCartOutline className="fw-bold fs-4 me-4" />
                  Add to cart
                </button>
                <button
                  className="fw-bold fs-5 px-2 border-0 rounded mt-2 bg-add"
                  style={{ color: "#33A0FF", width: "45px", height: "50px" }}
                >
                  <FaRegHeart />
                </button>
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
            <div className="col-12 d-block d-xxl-flex justify-content-between">
              <div className="col-12 col-xxl-6">
                <button
                  className="col-12 border-0 rounded px-3 py-3"
                  style={{ color: "#fff", backgroundColor: "#385C8E" }}
                >
                  <FaFacebookF className="fw-bold fs-4 me-1" />
                  Share on Facebook
                </button>
              </div>
              <div className="col-12 col-xxl-5 my-3 my-xxl-0">
                <button
                  className="col-12 border-0 rounded px-3 py-3"
                  style={{ color: "#fff", backgroundColor: "#03A9F4" }}
                >
                  <FaTwitter className="fw-bold fs-4 me-1" />
                  Share on Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-11 col-sm-8 col-md-5 m-auto m-xl-0 col-xl-3">
          <h6
            style={{ color: "#C1C8CE", marginLeft: "12px", marginTop: "46px" }}
          >
            BEST SELLER
          </h6>
          <Product
            title="Nike Air Max"
            image="https://www.pngarts.com/files/3/Nike-Running-Shoes-PNG-Image-with-Transparent-Background.png"
            price="350"
            offer="25% off"
            oldPrice="500.00"
          />
        </div>
      </div>

      <Reviews
        getProduct={getProduct}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        changeTap={changeTap}
      />

      {/* <div
        className="col-10 m-auto text-center my-4"
        style={{ color: "#22262A" }}
      >
        <h1>RELATED PRODUCTS</h1>
      </div> */}
      {/* <div className="col-10 m-auto d-flex mb-5">
        {RealatedProducts.map((r) => (
          <div className="col-3">
            <Product
              id={r.id}
              title={r.title}
              price={r.price}
              offer={r.offer}
              oldPrice={r.oldPrice}
              image={r.image}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SingleProduct;
