import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import LogoLogin from "../components/Logo/LogoLogin";
import { FaRegEnvelope } from "react-icons/fa6";
import { RiLock2Line } from "react-icons/ri";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
// import { useFormik } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../redux/reducers/user";
import { useTranslation } from "react-i18next";

const Login = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // let users = useSelector((state) => state.user.users);
  // let online = useSelector((state) => state.user.online);

  const { t } = useTranslation();

  const [password, setPassword] = useState(false);

  const ShowHidePassword = () => {
    setPassword(!password);
  };

  // const handleSubmit = ({ email, password }) => {
  //   console.log(email, password);
  //   const user = users.find((ele) => ele.email === email);

  //   if (!user) {
  //     return alert("email not found");
  //   }

  //   const validPassword = user.password === password;

  //   if (!validPassword) {
  //     return alert("invalid password");
  //   }

  //   alert("welcome");

  //   dispatch(login(user));
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 500);
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   onSubmit: handleSubmit,
  // });
  return (
    <div className="container overflow-hidden">
      <div className="text-center pt-5">
        <div className="col-8 m-auto">
          <Link to="/" className="col-1 m-auto rounded-5 d-md-block">
            <div className="logo1 mt-5 m-auto d-flex justify-content-center align-items-center">
              <LogoLogin />
            </div>
          </Link>
        </div>
        <h4 className="mt-3 h41 fs-2" style={{ fontWeight: "700" }}>
          {t("title")}
        </h4>
      </div>
      <form
        className="m-auto col-12 col-lg-9 text-center overflow-hidden"
        // onSubmit={formik.handleSubmit}
      >
        <h5 className="mt-1 h51 fs-6" style={{ fontWeight: "400" }}>
          {t("signTo")}
        </h5>
        <div className="position-relative col-12 col-lg-9 mt-5 m-auto">
          <FaRegEnvelope className="fs-3 position-absolute inp-name" />
          <input
            type="email"
            placeholder={t("email")}
            className="col-12 inp1 px-5 fw-bold"
            id="email"
            name="email"
            // value={formik.values.email}
            // onChange={formik.handleChange}
          />
        </div>
        <div className="position-relative col-12 col-lg-9 mt-3 m-auto">
          <RiLock2Line className="fs-3 position-absolute inp-name" />
          <input
            type={password ? "text" : "password"}
            placeholder={t("password")}
            className="col-12 inp1 px-5 fw-bold"
            id="password"
            name="password"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            style={{ padding: "0 595px 0 50px" }}
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
        <button
          type="submit"
          className="col-12 col-lg-9 inp2 mt-3 fs-5 fw-bold text-white"
          id="sign_in"
        >
          {t("signIn")}
        </button>
      </form>
      <div className="m-auto col-7 text-center">
        <h6 className="mt-4 fs-6 h61">
          {t("do")}
          <Link to="/register" className="fw-bold ms-1">
            {t("register")}
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Login;
