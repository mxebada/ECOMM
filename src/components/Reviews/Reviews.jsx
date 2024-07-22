import React from "react";
import { FaStar } from "react-icons/fa";
import img from "../../assets/P.PNG";

const Reviews = ({ getProduct, activeTab, changeTap }) => {
  return (
    <div className="col-9 bg-danger m-auto my-3 d-flex">
      <div className="col-12 m-auto" style={{ backgroundColor: "#FAFAFB" }}>
        <div className="col-12">
          <ul
            className="col-12 px-lg-4  p-0 col-sm-9 col-md-8 fs-6 fs-lg-5 d-flex justify-content-between mt-4"
            style={{ fontWeight: "600" }}
          >
            <a
              href="#tab-1"
              className="text-decoration-none"
              style={{ color: "#262626" }}
            >
              <li
                className={activeTab === "productInfomation" ? "active-2" : ""}
                style={{ listStyle: "none", cursor: "pointer" }}
                onClick={() => changeTap("productInfomation")}
              >
                Product Infomation
              </li>
            </a>
            <a
              href="#tab-2"
              className="text-decoration-none"
              style={{ color: "#262626" }}
            >
              <li
                className={activeTab === "reviews" ? "active-2" : ""}
                style={{ listStyle: "none", cursor: "pointer" }}
                onClick={() => changeTap("reviews")}
              >
                Reviews <span>0</span>
              </li>
            </a>
            <a
              href="#tab-3"
              className="text-decoration-none"
              style={{ color: "#262626" }}
            >
              <li
                className={activeTab === "anotherTab" ? "active-2" : ""}
                style={{ listStyle: "none", cursor: "pointer" }}
                onClick={() => changeTap("anotherTab")}
              >
                Another tab
              </li>
            </a>
          </ul>
          <div className="col-12 line-tab"></div>
          <div className="col-12 d-flex overflow-hidden">
            <div className="col-12" id="tab-1">
              <p className="tab-p col-8">{getProduct.desc}</p>
              <p className="tab-p col-8">{getProduct.desc}</p>
              <p className="tab-p col-8">{getProduct.desc}</p>
              <p className="tab-p col-8">{getProduct.desc}</p>
            </div>
            <div className="col-12" id="tab-2">

              <div className="mb-5">
                <div className="d-flex ms-lg-4">
                  <img
                    src={img}
                    className="rounded-circle ms-lg-3"
                    width={80}
                    height={80}
                    alt=""
                  />
                  <div className="col-12 bg-info">
                    {" "}
                    <div className="col-12 bg-danger">

                    <h2 className="">Mohamed Ebada </h2>
                    </div>
                    <div className="d-flex text-warning col-12 ms-lg-3 pt-2">
                      <FaStar className="ms-3" />
                      <FaStar className="ms-3" />
                      <FaStar className="ms-3" />
                      <FaStar className="ms-3" />
                    </div>
                  </div>
                </div>
                <h3 className="rev-1 p-2">
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </h3>
                <span className="date-rev mx-2">December 10, 2016</span>
              </div>
            </div>
            <div className="col-12" id="tab-3">
              jjjjjjjj
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
