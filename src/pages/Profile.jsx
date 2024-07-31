import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { useFormik } from "formik";
import { RiLock2Line } from "react-icons/ri";
import def from "../assets/u.jpg";
import { errorMsg, successMsg } from "../components/Toast/Toast";
import { updateUser } from "../redux/reducers/user";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const users = useSelector((state) => state.user.users);
  const [image, setImage] = useState(null);
  const imageInput = useRef();

  function imageUpload() {
    imageInput.current.click();
  }

  function imageDisplay(e) {
    let file = e.target.files[0];
    setImage(file);
  }

  const handleSubmit = (values) => {
    if (values.password !== values.confirmPassword) {
      return errorMsg("Password doesn't Match !!!");
    }

    const duplicatedEmail = users.find(
      (ele) => ele.email === values.email && values.id != ele.id
    );
    if (duplicatedEmail) {
      return errorMsg("Email Is Already Taken !!!");
    }
    dispatch(updateUser(values));
    successMsg("Data Updated !!");
  };

  const formik = useFormik({
    initialValues: user,
    onSubmit: handleSubmit,
  });
  return (
    <div
      className="col-12 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <form
        className="col-9 overflow-hidden pb-3 my-5"
        style={{
          borderRadius: "15px",
          minHeight: "700px",
          backgroundColor: "#fff",
        }}
        onSubmit={formik.handleSubmit}
      >
        <div className="row mt-5">
          <div className="col-12 text-center my-3">
            <h1 className="fw-bold ">Your Profile</h1>
          </div>
          <div className="col-12 d-flex justify-content-between flex-wrap mt-3">
            <div className="col-lg-4 col-11 col-sm-offset-1">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={(image && URL.createObjectURL(image)) || def}
                  width="300px"
                  height="300px"
                  alt=""
                  className="border rounded-circle mt-4"
                />
                <p className="fw-bold" style={{ marginTop: "20px" }}>
                  <span
                    htmlFor="personalPhoto"
                    id="fileLink"
                    className="mt-2 inp4"
                    style={{
                      cursor: "pointer",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                    onClick={imageUpload}
                  >
                    Change My Profile Picture
                  </span>
                  <input
                    onChange={imageDisplay}
                    type="file"
                    ref={imageInput}
                    style={{ display: "none" }}
                    id="personalPhoto"
                  />
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-11">
              <div className="form-group">
                <label className="fw-bold my-2">
                  Full Name <span style={{ color: "#FA0000" }}>*</span>
                </label>
                <div className="position-relative">
                  <FaUser className="fs-5 position-absolute inp-name" />
                  <input
                    name="fullName"
                    type="text"
                    className="form-control py-2 ps-5 fw-bold"
                    placeholder="Full Name"
                    style={{ color: "#9098b1", border: "1px solid #9098b1" }}
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="form-group mt-lg-3">
                <label className="fw-bold my-2">
                  Email <span style={{ color: "#FA0000" }}>*</span>
                </label>
                <div className="position-relative">
                  <FaEnvelope className="fs-5 position-absolute inp-name" />
                  <input
                    name="email"
                    type="email"
                    className="form-control py-2 ps-5 fw-bold"
                    placeholder="Email"
                    style={{ color: "#9098b1", border: "1px solid #9098b1" }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group mt-lg-3">
                <label className="fw-bold my-2">
                  Password <span style={{ color: "#FA0000" }}>*</span>
                </label>
                <div className="position-relative">
                  <RiLock2Line className="fs-5 position-absolute inp-name" />
                  <input
                    name="password"
                    type="password"
                    className="form-control py-2 ps-5 fw-bold"
                    placeholder="Password"
                    style={{ color: "#9098b1", border: "1px solid #9098b1" }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="form-group mt-lg-3">
                <label className="fw-bold my-2">
                  Confirm Password <span style={{ color: "#FA0000" }}>*</span>
                </label>
                <div className="position-relative">
                  <RiLock2Line className="fs-5 position-absolute inp-name" />
                  <input
                    name="confirmPassword"
                    type="password"
                    className="form-control py-2 ps-5  fw-bold"
                    placeholder="Confirm Password"
                    style={{ color: "#9098b1", border: "1px solid #9098b1" }}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="col-12 d-flex justify-content-lg-end mt-4">
                <button
                  type="submit"
                  className="col-12 col-lg-3 m-auto m-lg-0 fw-medium rounded py-2 px-4 inp4"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
