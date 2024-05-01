import React from "react";
import { Link } from "react-router-dom";
import ProductInCart from "../components/Products/ProductInCart";
import { PRODUCTS } from "../data/Products";
import PaymentOne from "../components/Payments/PaymentOne";
// import { ShopContext } from "../context/shop-context";
// import PaymentOne from "../components/Payments/PaymentOne";

export const Cart = () => {
//   const { cartItems, getTotalCartAmount } = useContext(ShopContext);

//   let totalAmount = getTotalCartAmount();

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
              style={{ color: "#262626" }}
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
              Nike Airmax 270 React
            </Link>
          </li>
        </ul>
      </div>

      
        <div className="container d-flex mt-5">
          <div className="col-7">
            <h3 className="mx-5" style={{ color: "#262626" }}>
            Proudcts
            </h3>
          </div>
          <div
            className="col-5 d-flex justify-content-between"
            style={{ color: "#262626" }}
          >
            <h3 className="mx-3">Price</h3>
            <h3 className="mx-3">QTY</h3>
            <h3 className="mx-1">Unit Price</h3>
          </div>
        </div>
     
         {/* <div className="col-12 text-center py-5">
           <h1> Your Cart Is Empty.</h1>
         </div> */}
     

      {/* {PRODUCTS.map((item) => {
        if (cartItems[item.id] !== 0) {
          return (
            <ProductInCart
              id={item.id}
              title={item.title}
              price={item.price}
              offer={item.offer}
              oldPrice={item.oldPrice}
              image={item.image}
            />
          );
        }
      })} */}
       {PRODUCTS.map((item) => {
          return (
            <ProductInCart
              id={item.id}
              title={item.title}
              price={item.price}
              offer={item.offer}
              oldPrice={item.oldPrice}
              image={item.image}
            />
          );
    })}

      {/* {totalAmount > 0 ? (
        <div className="container d-flex">
          <div className="col-6">
            <div className="col-12 col-md-8 d-flex my-5 py-5">
              <input
                type="text"
                placeholder="Voucher Code"
                className="col-8 inp-search px-3 fw-bold"
              />
              <button
                className="col-4 border-0 text-white"
                style={{ backgroundColor: "#40BFFF", fontWeight: "400" }}
              >
                Redeem
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="col-6 m-auto my-5 py-5">
              <div
                className="d-flex justify-content-between "
                style={{ color: "#262626" }}
              >
                <h6> Subtotal</h6>
                <h6>$ {totalAmount}</h6>
              </div>
              <div
                className="d-flex justify-content-between mt-4"
                style={{ color: "#262626" }}
              >
                <h6> Shipping Fee</h6>
                <h6>$ 20</h6>
              </div>
              <div
                className="d-flex justify-content-between my-4"
                style={{ color: "#262626" }}
              >
                <h6> Coupon</h6>
                <h6>No</h6>
              </div>
              <div
                className="d-flex justify-content-between py-4"
                style={{ color: "#262626", borderTop: "2px solid #F6F7F8" }}
              >
                <h2> Total Price</h2>
                <h2>$ {totalAmount}</h2>
              </div>
              <PaymentOne />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )} */}
     
        <div className="container d-flex">
          <div className="col-6">
            <div className="col-12 col-md-8 d-flex my-5 py-5">
              <input
                type="text"
                placeholder="Voucher Code"
                className="col-8 inp-search px-3 fw-bold"
              />
              <button
                className="col-4 border-0 text-white"
                style={{ backgroundColor: "#40BFFF", fontWeight: "400" }}
              >
                Redeem
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="col-6 m-auto my-5 py-5">
              <div
                className="d-flex justify-content-between "
                style={{ color: "#262626" }}
              >
                <h6> Subtotal</h6>
                <h6>$ 5</h6>
              </div>
              <div
                className="d-flex justify-content-between mt-4"
                style={{ color: "#262626" }}
              >
                <h6> Shipping Fee</h6>
                <h6>$ 20</h6>
              </div>
              <div
                className="d-flex justify-content-between my-4"
                style={{ color: "#262626" }}
              >
                <h6> Coupon</h6>
                <h6>No</h6>
              </div>
              <div
                className="d-flex justify-content-between py-4"
                style={{ color: "#262626", borderTop: "2px solid #F6F7F8" }}
              >
                <h2> Total Price</h2>
                <h2>$ 500</h2>
              </div>
              <PaymentOne/>
            </div>
          </div>
        </div>
  
    </div>
  );
};
