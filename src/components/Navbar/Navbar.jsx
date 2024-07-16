import React from "react";
import Logo from "../Logo/Logo";
import { GrCart } from "react-icons/gr";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import LanguageSelector from "./language-selector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  // console.log(i18n.language);
  const user = false;
  return (
    <div className="col-11 d-flex justify-content-between col-lg-10 m-auto">
      <div className="col-1 col-lg-5 d-flex align-items-center">
        <LanguageSelector />

        <div className="position-relative col-12 col-lg-6 d-none d-lg-block ms-3">
          <input
            type="email"
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
        {user ? (
          <ul
            className="d-flex justify-content-end align-items-center mt-3 me-3 col-10"
            style={{ listStyle: "none", fontWeight: "500" }}
          >
            <li>
              <h6 className="text-decoration-none border py-2 px-4 rounded-3 me-1">
                Sign In
              </h6>
            </li>
            <li>
              <h6 className="text-decoration-none border ms-3 py-2 px-4 rounded-3">
                Sign Up
              </h6>
            </li>
          </ul>
        ) : (
          <h5 className="text-decoration-none text-black fw-bold">
            <FaRegUser className="fs-5" />
            <span
              className="fs-6 d-none d-lg-inline mx-3"
              style={{ fontWeight: "400" }}
            >
              {t("myProfile")}
            </span>
          </h5>
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
