import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaStar,
  FaRegStar,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Product from "../components/Products/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/products";
import Loading from "../components/Toast/Loading";
import { addToCart, removeFromCart } from "../redux/reducers/cart";

const SingleProduct = () => {
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.products.all);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items)
  const { id } = useParams();
  const getProduct = products[id - 1];

  useEffect(() => {
    dispatch(fetchProducts());
    setTimeout(() => {
      setLoading(false);
    }, [500]);
  }, []);

  const handleAddToCart = () => {
    const product = {
      id: getProduct.id,
      title: getProduct.title,
      price: getProduct.price,
      offer: getProduct.offer,
      oldPrice: getProduct.oldPrice,
      image: getProduct.image,
    };
    dispatch(addToCart(product));
  };

  const product = useSelector(state =>
    state.cart.items.find(item => item.id === getProduct.id)
  );

  const quantity = product ? product.quantity : 0;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="col-10 m-auto mb-5 d-xl-flex">
            <div className="col-12 col-xl-9 py-5 d-block d-xl-flex justify-content-between">
              <div
                className="col-12 col-xl-5 mb-3 d-block d-xl-flex flex-column justify-content-between"
              >
                {" "}
                <div className="col-12 col-sm-8 col-md-6 col-xl-12 m-auto m-xl-0">
                  <img
                    src={getProduct.image}
                    style={{ backgroundColor: "#E5E8EA", height: "50vh" }}
                    className="col-12 p-5 rounded"
                    alt={getProduct.title}
                  />
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-7 col-xl-7 px-lg-4 m-auto">
                <h1
                  className="col-12 text-center text-xl-start"
                  style={{ color: "#22262A", fontWeight: "500" }}
                >
                  {getProduct.title}
                </h1>
                <div className="d-block d-xl-flex justify-content-between">
                  {" "}
                  <div className="text-warning text-center text-xl-start py-2 py-xl-0">
                    {" "}
                    <FaStar className="" />
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
                  className="my-4"
                  style={{
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#F6F7F8",
                  }}
                ></div>
                <div className="col-12 col-md-10 col-xl-6 d-flex m-auto m-xl-0 justify-content-between mt-4">
                  <h5 className="text-info">${getProduct.price}.00</h5>
                  <h5 className="h61 fs-6 text-decoration-line-through">
                    ${getProduct.oldPrice}
                  </h5>
                  <h5 className="h62 fs-6">{getProduct.offer}</h5>
                </div>
                <div className="col-12 col-md-10 m-auto m-xl-0">
                  <div className="col-12 d-flex justify-content-between mt-2">
                    <p className="fs-6">Availability:</p>{" "}
                    <p className="fs-6">In Stock</p>
                  </div>
                  <div className="col-12 d-flex justify-content-between">
                    <p className="fs-6">Category:</p>{" "}
                    <p className="fs-6">
                      {getProduct.category}
                    </p>
                  </div>
                  <p className="fs-6">Free shipping</p>
                </div>
                {cartItems.length > 0 && <div
                  className="my-4"
                  style={{
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#F6F7F8",
                  }}
                ></div>}

                {cartItems.length > 0 && <div className="col-12 d-block d-xl-flex justify-content-between">
                  <div className="col-xl-4">
                    <div
                      className="col-12 col-md-10 col-xl-12 m-auto d-flex justify-content-between mt-2 rounded align-items-center px-5 px-xl-3 py-2 py-xl-0"
                      style={{ backgroundColor: "#F6F7F8", height: "50px" }}
                    >
                      <button
                        className="fs-3 border-0 bg-transparent"
                        style={{ color: "#33A0FF", cursor: "pointer" }}
                        onClick={() => dispatch(removeFromCart(getProduct.id))}

                      >
                        -
                      </button>
                      <h5 className="mt-2" style={{ color: "#262626" }}>
                        {quantity}
                      </h5>
                      <button
                        className="fs-3 border-0 bg-transparent"
                        style={{ color: "#33A0FF" }}
                        onClick={handleAddToCart}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className=" col-xl-7 d-flex justify-content-between">
                    <button
                      className="col-12 col-md-10 col-xl-12 m-auto col-xl-9 border-0 rounded my-2 bg-add"
                      style={{ color: "#33A0FF", height: "50px" }}
                      onClick={handleAddToCart}
                    >
                      <IoCartOutline className="fw-bold fs-4" />
                      Add to cart
                    </button>
                  </div>
                </div>}

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
                      className="col-12 col-md-10 col-xl-12 d-block m-auto border-0 rounded px-3 py-3"
                      style={{ color: "#fff", backgroundColor: "#385C8E" }}
                    >
                      <FaFacebookF className="fw-bold fs-4 me-1" />
                      Share on Facebook
                    </button>
                  </div>
                  <div className="col-12 col-xxl-5 my-3 my-xxl-0">
                    <button
                      className="col-12 col-md-10 col-xl-12 d-block m-auto border-0 rounded px-3 py-3"
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
                style={{
                  color: "#C1C8CE",
                  marginLeft: "12px",
                  marginTop: "46px",
                }}
              >
                BEST SELLER
              </h6>
              <Product
                id="21"
                title="Nike Air Max"
                image="https://www.pngarts.com/files/3/Nike-Running-Shoes-PNG-Image-with-Transparent-Background.png"
                price="350"
                offer="25% off"
                oldPrice="500.00"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
