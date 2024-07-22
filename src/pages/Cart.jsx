import React from "react";
import { Link } from "react-router-dom";
import ProductInCart from "../components/Products/ProductInCart";
import PaymentOne from "../components/Payments/PaymentOne";
import { PRODUCTS } from "../data/products";
import { useTranslation } from "react-i18next";
// import { ShopContext } from "../context/shop-context";
// import PaymentOne from "../components/Payments/PaymentOne";

export const Cart = () => {
  //   const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  //   let totalAmount = getTotalCartAmount();

  const { t } = useTranslation();

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

      <div className="container d-none d-lg-flex mt-5">
        <div className="col-7">
          <h3 className="me-5 pe-4" style={{ color: "#262626" }}>
            {t("product")}
          </h3>
        </div>
        <div
          className="col-5 d-flex justify-content-between"
          style={{ color: "#262626" }}
        >
          <h3 className="mx-3">{t("price")}</h3>
          <h3 className="mx-3">{t("qty")}</h3>
          <h3 className="mx-1">{t("unitPrice")}</h3>
        </div>
      </div>

      {/* <div className="col-12 text-center py-5">
           <h1>{t("empty")}</h1>
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

      <div className="container d-block d-lg-flex">
        <div className="col-12 col-lg-6">
          <div className="col-12 col-md-8 m-auto d-flex my-lg-5 py-5">
            <input
              type="text"
              placeholder={t("voucherCode")}
              className="col-8 inp-search px-3 fw-bold"
            />
            <button
              className="col-4 border-0 text-white"
              style={{ backgroundColor: "#40BFFF", fontWeight: "400" }}
            >
              {t("redeem")}
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="col-12 col-md-8 col-xl-6 m-auto mb-5 mt-lg-5 py-lg-5 mb-lg-0">
            <div
              className="d-flex justify-content-between "
              style={{ color: "#262626" }}
            >
              <h6> {t("subTotal")}</h6>
              <h6>$ 5</h6>
            </div>
            <div
              className="d-flex justify-content-between mt-4"
              style={{ color: "#262626" }}
            >
              <h6>{t("shippingFee")}</h6>
              <h6>$ 20</h6>
            </div>
            <div
              className="d-flex justify-content-between my-4"
              style={{ color: "#262626" }}
            >
              <h6> {t("coupon")}</h6>
              <h6>{t("no")}</h6>
            </div>
            <div
              className="d-flex justify-content-between py-4"
              style={{ color: "#262626", borderTop: "2px solid #F6F7F8" }}
            >
              <h3>{t("total")}</h3>
              <h3>$ 500</h3>
            </div>
            <PaymentOne />
          </div>
        </div>
      </div>
    </div>
  );
};
