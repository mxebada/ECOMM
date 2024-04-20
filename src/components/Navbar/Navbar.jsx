import React from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className="col-12 d-none d-lg-flex justify-content-between">
          <div className="col-4 col-lg-3">
            <Link to="/" className="d-flex text-decoration-none mt-1">
              <Logo />
              <h3
                className="mt-1 mx-3"
                style={{ color: "#22262A", fontWeight: "700" }}
              >
                {t("bigTitle")}
              </h3>
            </Link>
          </div>
          <div className="col-8 col-lg-7">
            <ul
              className="d-flex justify-content-between mt-2 fs-4"
              style={{ listStyle: "none", fontWeight: "500" }}
            >
              <li>
                <Link
                  to="/"
                  className={`text-decoration-none nav-link-color ${isActive(
                    "/"
                  )}`}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/bags"
                  className={`text-decoration-none nav-link-color ${isActive(
                    "/bags"
                  )}`}
                >
                  {t("bag")}
                </Link>
              </li>
              <li>
                <Link
                  to="/sneakers"
                  className={`text-decoration-none nav-link-color ${isActive(
                    "/sneakers"
                  )}`}
                >
                  {t("sneak")}
                </Link>
              </li>
              <li>
                <Link
                  to="/belt"
                  className={`text-decoration-none nav-link-color ${isActive(
                    "/belt"
                  )}`}
                >
                  {t("belt")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`text-decoration-none nav-link-color ${isActive(
                    "/contact"
                  )}`}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
  );
};

export default Navbar;
