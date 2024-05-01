import React from "react";
// import { ShopContext } from "../../context/shop-context";

const ProductInCart = (props) => {
  //   const { cartItems, addToCart, removeFromCart, removeProduct } =
  //     useContext(ShopContext);

  //   const cartItemAmount = cartItems[props.id];
  const cartItemAmount = 5;

  return (
    <div>
      <div
        className="container d-flex py-5"
        style={{ borderBottom: "2px solid #F6F7F8" }}
      >
        <div className="col-7 d-flex align-items-center">
          <button
            className="fs-2 me-2 border-0 d-flex justify-content-center bg-opacity-10 bg-transparent align-items-center rounded-circle"
            style={{
              color: "#FF4252",
            }}
            onClick={() => removeProduct(props.id)}
          >
            x
          </button>
          <img
            src={props.image}
            height={90}
            width={115}
            className="rounded mx-5"
            alt=""
          />
          <h3 className="ms-5" style={{ color: "#262626" }}>
            {props.title}
          </h3>
        </div>
        <div className="col-5 d-flex justify-content-between align-items-center">
          <h3 style={{ color: "#262626" }}>${props.price * cartItemAmount}</h3>
          <div
            className="col-4 d-flex justify-content-between rounded align-items-center px-3 pt-1"
            style={{ backgroundColor: "#F6F7F8" }}
          >
            <button
              className="fs-3 border-0 bg-transparent"
              style={{ color: "#33A0FF", cursor: "pointer" }}
              onClick={() => removeFromCart(props.id)}
            >
              -
            </button>
            <h3 className="mt-2" style={{ color: "#262626" }}>
              {cartItemAmount}
            </h3>
            <button
              className="fs-3 border-0 bg-transparent"
              style={{ color: "#33A0FF" }}
              onClick={() => addToCart(props.id)}
            >
              +
            </button>
          </div>
          <h3 style={{ color: "#262626" }}>$ {props.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
