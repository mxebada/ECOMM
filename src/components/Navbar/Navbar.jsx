import React from "react";
import Logo from "../Logo/Logo";
import { GrCart } from "react-icons/gr";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import LanguageSelector from "./language-selector";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const online = useSelector((state)=> state.user.online);
  const users = useSelector((state)=> state.user.users)

  return (
    <div id="j" className="col-11 d-flex justify-content-between col-lg-10 m-auto">
      <div className="col-1 col-lg-5 d-flex align-items-center">
        <LanguageSelector />

        <div className="position-relative col-12 col-lg-6 d-none d-lg-block ms-3">
          <input
            type="text"
            placeholder={t("search")}
            className="col-12 px-2 py-1"
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
        className="col-5 col-lg-2 mt-3 mx-3 text-decoration-none d-flex flex-column align-items-center"
        style={{ color: "#22262A", fontWeight: "700", fontSize: "20px" }}
      >
        <Logo />
        {t("bigTitle")}
      </Link>

      <div className="col-2 col-lg-5 d-flex align-items-center justify-content-end">
        {online ? (
            <h5 className="col-7 text-decoration-none text-black d-flex align-items-center justify-content-between fw-bold">
            <h4
              className="fs-5 d-none d-lg-inline mx-3"
              style={{ fontWeight: "400" }}
            >
              {t("myProfile")}
            </h4>
          </h5>
        ) : (
          <div>
          <Link to="/login" className=" text-black">
            <FaRegUser className="fs-5 d-block d-lg-none" />
          </Link>

          <ul
            className="d-none d-lg-flex justify-content-end align-items-center mt-3 me-3 col-12"
            style={{ listStyle: "none", fontWeight: "500" }}
          >
            <Link
              to="/login"
              className="text-black mx-1 text-decoration-none text-center col-6"
            >
              <li>
                <h6 className="text-decoration-none border py-2 px-4 rounded-3 ">
                  {t("signIn")}
                </h6>
              </li>
            </Link>
            <Link
              to="/register"
              className="text-black mx-3 text-decoration-none text-center col-6"
            >
              <li>
                <h6 className="text-decoration-none border py-2 px-4 rounded-3">
                  {t("signUp")}
                </h6>
              </li>
            </Link>
          </ul>
        </div>
        )}

        <div className="mt-2 position-relative" style={{ height: "40px" }}>
          <span
            className="d-block position-absolute rounded-circle text-center text-white"
            style={{
              width: "19px",
              height: "19px",
              backgroundColor: "#FB7181",
              top: "-8px",
              left: "38px",
              fontSize: "12px",
              lineHeight: "21px",
              cursor: "pointer",
            }}
          >
            5
          </span>
          <GrCart className="fs-4 mx-4" style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
