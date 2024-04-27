import React from "react";
import Logo from "../Logo/Logo";
import { GrCart } from "react-icons/gr";
import { FaSearch, FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="col-12 d-lg-flex justify-content-between col-lg-10 m-auto">
      <div className="col-5 d-flex align-items-center">
        <ul
          className="d-flex align-items-center ps-0 mt-3"
          style={{ listStyle: "none", fontWeight: "400" }}
        >
          <li className="dropdown">
            <button
              className="btn"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              EN
            </button>
            {/* <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                {i18n.language === "ar" && (
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={changeLanguageEn}
                    >
                      EN
                    </button>
                  </li>
                )}
                {i18n.language === "en" && (
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={changeLanguageAr}
                    >
                      AR
                    </button>
                  </li>
                )}
              </ul> */}
          </li>
        </ul>

        <div className="position-relative col-12 col-lg-6 ms-3">
          <input
            type="email"
            placeholder="search"
            className="col-12 ps-2 py-1"
            style={{
              color: "#9098b1",
              borderRadius: "5px",
              border: "1px solid #9098b1",
            }}
          />
          <FaSearch
            style={{ position: "absolute", top: "9px", right: "9px" }}
          />
        </div>
      </div>

      <div className="col-2 d-flex mt-2 flex-column align-items-center">
        <Logo />
        <h3
          className="mt-1 mx-3"
          style={{ color: "#22262A", fontWeight: "700", fontSize: "16px" }}
        >
          E-Comm
        </h3>
      </div>

      <div className="col-5 d-flex align-items-center justify-content-end">
        {/* <ul
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
        </ul> */}

        <h5 className="text-decoration-none text-black fw-bold">
          <FaRegUser className="fs-5" />
          <span className="fs-6 mx-2" style={{ fontWeight: "400" }}>
            My profile
          </span>
        </h5>
        <div className="col-1 position-relative" style={{ height: "40px" }}>
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
            }}
          >
            5
          </span>
          <GrCart className="fs-4 ms-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
