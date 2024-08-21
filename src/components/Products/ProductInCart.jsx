import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removeProduct } from "../../redux/reducers/cart";

const ProductInCart = (props) => {
  const dispatch = useDispatch();

  // Get the product quantity from the Redux store
  const product = useSelector(state =>
    state.cart.items.find(item => item.id === props.id)
  );

  const quantity = product ? product.quantity : 0;

  return (
    <div>
      <div
        className="col-11 col-lg-10 m-auto d-none d-md-flex py-5"
        style={{ borderBottom: "2px solid #F6F7F8" }}
      >
        <div className="col-7 d-flex align-items-center">
          <button
            className="fs-3 me-2 border-0 d-flex justify-content-center bg-opacity-10 bg-transparent align-items-center rounded-circle del-p"
            onClick={() => dispatch(removeProduct(props.id))}
          >
            <FaRegTrashCan />
          </button>
          <img
            src={props.image}
            height={90}
            width={115}
            className="rounded mx-5"
            alt=""
          />
          <h3 className="ms-lg-5" style={{ color: "#262626" }}>
            {props.title}
          </h3>
        </div>
        <div className="col-5 d-flex justify-content-between align-items-center">
          <h3 style={{ color: "#262626" }}>${props.price * quantity}</h3>
          <div
            className="col-4 d-flex justify-content-between rounded align-items-center px-3 pt-1"
            style={{ backgroundColor: "#F6F7F8" }}
          >
            <button
              className="fs-3 border-0 bg-transparent"
              style={{ color: "#33A0FF", cursor: "pointer" }}
              onClick={() => dispatch(removeFromCart(props.id))}
            >
              -
            </button>
            <h3 className="mt-2" style={{ color: "#262626" }}>
              {quantity}
            </h3>
            <button
              className="fs-3 border-0 bg-transparent"
              style={{ color: "#33A0FF" }}
              onClick={() => dispatch(addToCart(props))}
            >
              +
            </button>
          </div>
          <h3 style={{ color: "#262626" }}>$ {props.price}</h3>
        </div>
      </div>
      {/* Mobile view */}
      <div className="col-11 my-4 d-block d-md-none border rounded m-auto">
        <div className="d-flex">
          <img
            src={props.image}
            height={130}
            className="rounded col-4 col-sm-3 ms-1 p-3"
            alt=""
          />
          <div className="col-8">
            <div
              className="col-12 d-flex justify-content-between"
              style={{ height: "50%" }}
            >
              <h3 className="ms-lg-5 mt-3" style={{ color: "#223263" }}>
                {props.title}
              </h3>
              <button
                className="fs-1 mx-3 border-0 d-flex justify-content-center bg-opacity-10 bg-transparent align-items-center rounded-circle"
                style={{
                  color: "#9098B1",
                }}
                onClick={() => dispatch(removeProduct(props.id))}
              >
                <FaRegTrashCan />
              </button>
            </div>
            <div
              className="col-12 d-flex justify-content-between"
              style={{ height: "50%" }}
            >
              <h3
                style={{ color: "#40BFFF" }}
                className="mt-3 col-3"
              >
                $ {props.price}
              </h3>
              <div
                className="col-7 mt-3 mx-3 d-flex justify-content-between border rounded align-items-center px-3"
                style={{ height: "60%" }}
              >
                <button
                  className="fs-3 pt-1 border-0 bg-transparent"
                  style={{ color: "#9098B1", cursor: "pointer" }}
                  onClick={() => dispatch(removeFromCart(props.id))}
                >
                  -
                </button>
                <h3
                  className="mt-2 pt-1 d-flex align-items-center px-4"
                  style={{
                    backgroundColor: "#F6F7F8",
                    height: "100%",
                    color: "#223263",
                  }}
                >
                  {quantity}
                </h3>
                <button
                  className="fs-3 pt-1 border-0 bg-transparent"
                  style={{ color: "#9098B1" }}
                  onClick={() => dispatch(addToCart(props))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
