import React from "react";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/reducers/cart";

const Product = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = {
      id: props.id,
      title: props.title,
      price: props.price,
      offer: props.offer,
      oldPrice: props.oldPrice,
      image: props.image,
    };

    dispatch(addToCart(product));

  };

  const online = useSelector((state)=>state.user.online)
  return (
    <div>
      <div className="col-11 m-auto text-center rounded-3 pb-3 mt-4 section3-content-div">
        <div className="rounded py-4" style={{ backgroundColor: "#E5E8EA" }}>
          <img
            src={props.image}
            className="rounded-4 mt-3"
            width="90%"
            height="200"
            alt=""
          />
        </div>
        <div
          className="active-none"
          style={{
            width: "43px",
            height: "27px",
            backgroundColor: "#FF4858",
            position: "absolute",
            top: "0",
            left: "0",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <h6 style={{ fontWeight: "300", lineHeight: "28px" }}>HOT</h6>
        </div>

        <div className="overlay mt-2 rounded-4 col-12 pt-5 pb-4">
          <div className="d-flex justify-content-around m-auto p-5 col-12">
        {online && <button
              className="icon-s fs-4 fw-bold d-flex justify-content-center align-items-center"
              onClick={handleAddToCart}
            >
              <IoCartOutline />
            </button>}
            <Link
              to={`/product/${props.id}`}
              className="icon-s fs-5 d-flex justify-content-center align-items-center"
            >
              <FaSearch />
            </Link>
          </div>
        </div>
        <h2 className="fs-4 mt-2 py-2 h41">{props.title}</h2>
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
