import React from "react";
import ProductInCart from "../components/Products/ProductInCart";
import PaymentOne from "../components/Payments/PaymentOne";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { t } = useTranslation();
  const cartItems = useSelector(state => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippFee = 20;

  return (
    <div>
      {cartItems.length > 0 && (
        <div className="d-md-none cart-line pt-3 pb-4">
          <h1 className="fw-bold mx-4" style={{ color: "#223263" }}>
            {t("cart")}
          </h1>
        </div>
      )}
      {cartItems.length > 0 ? (
        <div className="col-12 col-md-11 col-lg-10 m-auto d-none d-md-flex mt-5">
          <div className="col-7">
            <h3 className="mx-5 px-5" style={{ color: "#262626" }}>
              {t("product")}
            </h3>
          </div>
          <div
            className="col-5 d-flex justify-content-between"
            style={{ color: "#262626" }}
          >
            <h3 className="">{t("price")}</h3>
            <h3 className="">{t("qty")}</h3>
            <h3 className="">{t("unitPrice")}</h3>
          </div>
        </div>
      ) : (
        <div className="col-12 text-center py-5 my-5">
          <h1>{t("empty")}</h1>
        </div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <ProductInCart
              id={item.id}
              title={item.title}
              price={item.price}
              offer={item.offer}
              oldPrice={item.oldPrice}
              image={item.image}
            />
          </div>
        ))}

        {cartItems.length > 0 && (
          <div className="col-11 m-auto d-block d-md-flex total-section">
            <div className="col-12 col-md-6">
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
            <div className="col-12 col-md-6">
              <div className="col-12 col-md-8 col-xl-6 m-auto mb-5 mt-md-5 py-lg-5 mb-lg-0">
                <div
                  className="d-flex justify-content-between "
                  style={{ color: "#262626" }}
                >
                  <h6>{t("subTotal")}</h6>
                  <h6>$ {totalPrice}</h6>
                </div>
                <div
                  className="d-flex justify-content-between mt-4"
                  style={{ color: "#262626" }}
                >
                  <h6>{t("shippingFee")}</h6>
                  <h6>$ {shippFee}</h6>
                </div>
                <div
                  className="d-flex justify-content-between my-4"
                  style={{ color: "#262626" }}
                >
                  <h6>{t("coupon")}</h6>
                  <h6>{t("no")}</h6>
                </div>
                <div
                  className="d-flex justify-content-between py-4"
                  style={{ color: "#262626", borderTop: "2px dotted #F6F7F8" }}
                >
                  <h3>{t("total")}</h3>
                  <h3>$ {totalPrice + shippFee}</h3>
                </div>
                <PaymentOne />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
