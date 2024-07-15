import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser } from "../redux/reducers/user";
import { t } from "i18next";
import LogoLogin from "../components/Logo/LogoLogin";
import { FaRegEnvelope } from "react-icons/fa6";
import { RiLock2Line } from "react-icons/ri";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Register = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // let users = useSelector((state) => state.user.users);
  // console.log(users);

  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const ShowHidePassword = () => {
    setPassword(!password);
  };
  const ShowHideConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };

  // const handleSubmit = (values) => {
  //   if (values.password !== values.confirmPassword)
  //     return alert("Password doesnt match");

  //   let dublicated = users.some((user) => user.email === values.email);
  //   if (dublicated) return alert("Email is already Taken");

  //   alert("account created");

  //   dispatch(addUser(values));

  //   setTimeout(() => {
  //     navigate("/login");
  //   }, 500);
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     fullName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  //   onSubmit: handleSubmit,
  // });
  return (
    <div class="container">
      <div class="m-auto text-center overflow-hidden pt-5">
        <div class="col-8 m-auto">
          <Link to="/" class="col-1 m-auto rounded-5 d-md-block">
            <div class="logo1 mt-5 m-auto d-flex justify-content-center align-items-center">
              <LogoLogin />
            </div>
          </Link>
        </div>
        <h4 class="mt-3 h41 fs-3" style={{ fontWeight: "700" }}>
          {/* {t("let")} */}
          Let's Get Started
        </h4>
        <form
          class="m-auto col-12 col-lg-9 text-center overflow-hidden"
          // onSubmit={formik.handleSubmit}
        >
          <h5 class="mt-1 h51 fs-6" style={{ fontWeight: "400" }}>
            {/* {t("create")} */}
            Create an new account
          </h5>
          <div class="position-relative col-12 col-lg-9 mt-5 m-auto">
            <FaUser className="fs-3 position-absolute inp-name" />
            <input
              type="text"
              placeholder="Full Name"
              class="col-12 inp1 px-5 fw-bold"
              id="username"
              name="fullName"
              // value={formik.values.fullName}
              // onChange={formik.handleChange}
            />
          </div>
          <div class="position-relative col-12 col-lg-9 mt-3 m-auto">
            <FaRegEnvelope className="fs-3 position-absolute inp-name" />

            <input
              type="email"
              placeholder="Your Email"
              class="col-12 inp1 px-5 fw-bold"
              name="email"
              // value={formik.values.email}
              // onChange={formik.handleChange}
            />
          </div>
          <div class="position-relative col-12 col-lg-9 mt-3 m-auto">
            <RiLock2Line className="fs-3 position-absolute inp-name" />

            <input
              type={password ? "text" : "password"}
              placeholder="Password"
              class="col-12 inp1 px-5 fw-bold"
              id="password"
              name="password"
              // value={formik.values.password}
              // onChange={formik.handleChange}
            />
            <span
              className="position-absolute border-0"
              onClick={ShowHidePassword}
              style={{
                top: "13px",
                right: "15px",
                color: "#9098b1",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              {password ? (
                <IoEye className="fs-3" />
              ) : (
                <IoEyeOff className="fs-3" />
              )}
            </span>
          </div>
          <div class="position-relative col-12 col-lg-9 mt-3 m-auto">
            <RiLock2Line className="fs-3 position-absolute inp-name" />

            <input
              type={confirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              class="col-12 inp1 px-5 fw-bold"
              id="confirm"
              name="confirmPassword"
              // value={formik.values.confirmPassword}
              // onChange={formik.handleChange}
            />
            <span
              className="position-absolute border-0"
              onClick={ShowHideConfirmPassword}
              style={{
                top: "13px",
                right: "15px",
                color: "#9098b1",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              {confirmPassword ? (
                <IoEye className="fs-3" />
              ) : (
                <IoEyeOff className="fs-3" />
              )}
            </span>
          </div>
          <button
            type="submit"
            class="col-12 col-lg-9 inp2 mt-3 fs-5 fw-bold text-white"
            id="sign_up"
          >
            {/* {t("signUp")} */}
            Sign Up
          </button>
        </form>
        <h6 class="mt-4 fs-6 h61">
          {t("have")}
          Have a account?
          <Link to="/login" class="fw-bold">
            {t("signIn")}
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Register;
