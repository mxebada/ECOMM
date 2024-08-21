import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { GrCart } from "react-icons/gr";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import LanguageSelector from "./language-selector";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/user";
import { clearCart, selectTotalItems } from "../../redux/reducers/cart";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const online = useSelector((state) => state.user.online);
  const user = useSelector((state) => state.user.user);
  const users = useSelector((state) => state.user.users)

  console.log(users);
  let totalItems = useSelector(selectTotalItems)

  const handleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleSignIn = () => {

    dispatch(logout()) //logout
    dispatch(clearCart()); // Clear the cart for the new user
  };

  return (
    <div className="mx-2">
      <div id="j" className="col-12 d-flex justify-content-between m-auto">
        <div className="col-3 col-lg-5 d-flex align-items-center">
          <LanguageSelector />

          <div className="position-relative col-12 col-lg-6 d-none d-lg-block ms-3">
            <input
              type="text"
              placeholder={t("search")}
              className="col-12 form-control px-2 py-1"
              style={{
                color: "#9098b1",
                borderRadius: "5px",
                border: "1px solid #9098b1",
              }}
            />
            <FaSearch className={i18n.language === "en" ? "en-1" : "ar-1"} />
          </div>
        </div>
        <Link
          to="/"
          className="col-4 col-lg-2 mt-3 text-decoration-none d-flex flex-column align-items-center"
          style={{ color: "#22262A", fontWeight: "700", fontSize: "20px" }}
        >
          <Logo />
          {t("bigTitle")}
        </Link>
        <div className="col-3 col-lg-5 d-flex align-items-center justify-content-end">
          <Link to="/cart" className="mx-4 position-relative">
            {totalItems > 0 && users.length > 0 && <span
              className="d-block position-absolute rounded-circle text-center text-white"
              style={{
                width: "19px",
                height: "19px",
                backgroundColor: "#FB7181",
                top: "-8px",
                left: "13px",
                fontSize: "12px",
                lineHeight: "21px",
                cursor: "pointer",
              }}
            >
              {totalItems}
            </span>}
            <GrCart className="fs-4 text-black" style={{ cursor: "pointer" }} />
          </Link>

          {online ? (
            <div className="col-2 mx-3 mx-xl-0 text-decoration-none text-black d-flex align-items-center justify-content-between fw-bold">
              <div
                className="text-black mx-lg-5 px-0 px-xl-2"
                style={{ cursor: "pointer" }}
                onClick={handleProfile}
              >
                <FaRegUser className="d-block" style={{ fontSize: "25px" }} />
              </div>
              {isProfileOpen && (
                <div
                  className={
                    i18n.language === "en"
                      ? "log-reg log-reg1 px-2 rounded shadow"
                      : "log-reg log-reg2 px-2 rounded shadow"
                  }
                >
                  <Link
                    to="/profile"
                    className="py-2 px-4 rounded-3 inp3 fw-bold col-12 my-3 d-block text-center text-decoration-none"
                  >
                    {" "}
                    {t("myProfile")}
                  </Link>
                  <Link
                    to="/"
                    className="py-2 px-4 rounded-3 inp3 fw-bold col-12 mb-3 d-block text-center text-decoration-none"
                    onClick={handleSignIn}
                  >
                    {t("logout")}
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="col-2 mx-3 mx-xl-0 text-decoration-none text-black d-flex align-items-center justify-content-between fw-bold">
              <div
                className="text-black mx-lg-5 px-0 px-xl-2"
                style={{ cursor: "pointer" }}
                onClick={handleProfile}
              >
                <FaRegUser className="d-block" style={{ fontSize: "25px" }} />
              </div>
              {isProfileOpen && (
                <div
                  className={
                    i18n.language === "en"
                      ? "log-reg log-reg1 px-2 rounded shadow"
                      : "log-reg log-reg2 px-2 rounded shadow"
                  }
                >
                  <Link
                    to="/login"
                    className="py-2 px-4 rounded-3 inp3 fw-bold col-12 my-3 d-block  text-center text-decoration-none"
                  >
                    {t("signIn")}
                  </Link>
                  <Link
                    to="/register"
                    className="py-2 px-4 rounded-3 inp3 fw-bold col-12 mb-3 d-block text-center text-decoration-none"
                  >
                    {t("signUp")}
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
