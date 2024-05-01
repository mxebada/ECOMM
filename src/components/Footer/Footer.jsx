import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import m from "../../assets/m1.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import LogoFooter from "../Logo/LogoFooter";
import { SiWesternunion } from "react-icons/si";
import { RiVisaLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="col-12 pt-5 pb-4" style={{ backgroundColor: "#BCDDFE" }}>
      <div className="container pt-5">
        <div className="d-flex justify-content-between flex-wrap">
          <div className="col-lg-4 col-12 mt-3">
            <div className="col-12">
              <Link to="/" className="d-flex text-decoration-none mt-1">
                <LogoFooter />
                <h3
                  className="mt-2 mx-3"
                  style={{ color: "#22262A", fontWeight: "700" }}
                >
                  E-Comm
                </h3>
              </Link>
            </div>
            <p
              className="col-10 nav-link-color mt-2"
              style={{ fontWeight: "400" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="col-lg-3 col-12 mt-3">
            <h4>Follow Us</h4>
            <p className="nav-link-color mt-3" style={{ fontWeight: "400" }}>
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="col-8 d-flex justify-content-between mt-3">
              <h4>
                {" "}
                <a
                  href="https://www.facebook.com/mohamed.aboabada.7"
                  target="blank"
                >
                  {" "}
                  <FaFacebookF style={{ color: "#385C8E" }} />
                </a>
              </h4>
              <h4>
                {" "}
                <a href="https://twitter.com/mohamedebada742" target="blank">
                  {" "}
                  <FaTwitter style={{ color: "#03A9F4" }} />
                </a>
              </h4>
              <h4>
                {" "}
                <a
                  href="https://www.linkedin.com/in/mohamed-ebada-5a193222a/"
                  target="blank"
                >
                  {" "}
                  <FaLinkedinIn style={{ color: "#385C8E" }} />
                </a>
              </h4>
            </div>
          </div>
          <div className="col-lg-3 col-12 mt-3">
            <h4>Contact Us</h4>
            <p className="nav-link-color" style={{ fontWeight: "400" }}>
              {" "}
              E-Comm , 4578{" "}
            </p>
            <p className="nav-link-color" style={{ fontWeight: "400" }}>
              {" "}
              Marmora Road,
            </p>
            <p className="nav-link-color" style={{ fontWeight: "400" }}>
              {" "}
              Glasgow D04 89GR{" "}
            </p>
          </div>
        </div>
        <span
          className="d-block mt-3"
          style={{ height: "2px", backgroundColor: "#F6F7F8" }}
        ></span>
        <div className="d-flex justify-content-between">
          <p className="nav-link-color mt-2" style={{ fontWeight: "400" }}>
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>

          <div className="col-3 d-flex justify-content-around mt-2">
            <div
              className="bg-black rounded d-flex justify-content-center"
              style={{ width: "48px", height: "34px" }}
            >
              <p
                className="fw-bold fs-4 text-warning"
                style={{ lineHeight: "32px", color: "#494CA3" }}
              >
                <SiWesternunion />
              </p>
            </div>
            {/* <img src={m} width={48} height={34} alt="" /> */}
            <div
              className="rounded"
              style={{
                fontSize: "11px",
                width: "48px",
                height: "34px",
                backgroundColor: "#5870BE",
                padding: "9.5px 3px",
                color: "#FFFFFF",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  backgroundColor: "#E63737",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "6.5px",
                  left: "4px",
                  zIndex: "5",
                }}
              >
                <span
                  className="master d-block"
                  style={{
                    fontWeight: "300",
                    fontSize: "6px",
                    marginTop: "6px",
                    marginLeft: "1px",
                  }}
                >
                  MasterCard
                </span>
              </div>
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  backgroundColor: "#FFAF38",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "6.5px",
                  left: "21px",
                }}
              ></div>
            </div>
            <div
              className="rounded fw-bold"
              style={{
                fontSize: "11px",
                width: "48px",
                height: "34px",
                backgroundColor: "#FFFFFFBA",
                padding: "9.5px 3px",
                color: "#3284AE",
              }}
            >
              <i>
                Pay<i style={{ color: "#3CA9C7" }}>Pal</i>
              </i>
            </div>

            <div className="rounded">
              <div
                style={{
                  borderRadius: "5px 5px 0px 0px ",
                  width: "48px",
                  height: "11px",
                  backgroundColor: "#494CA3",
                }}
              ></div>
              <div
                className="bg-white fw-bold d-flex justify-content-center"
                style={{ width: "48px", height: "12px", fontSize: "24px" }}
              >
                <RiVisaLine style={{ marginTop: "-5px", color: "#494CA3" }} />
              </div>
              <div
                style={{
                  borderRadius: "0px 0px 5px 5px ",
                  width: "48px",
                  height: "11px",
                  backgroundColor: "#FFC000",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
