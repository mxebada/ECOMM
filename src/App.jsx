import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../src/index.css";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Cart } from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import SingleProduct from "./pages/SingleProduct";
import HotDeal from "./pages/HotDeal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const App = () => {
  const location = useLocation();
  const showNavbar = ["/login", "/register"].includes(location.pathname);
  const online = useSelector((state) => state.user.online);

  return (
    <div>
      {!showNavbar && <Navbar />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        {online && <Route path="/cart" element={<Cart />} />}
        {!online && <Route path="/login" element={<Login />} />}
        {!online && <Route path="/register" element={<Register />} />}
        {online && <Route path="/profile" element={<Profile />} />}
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/hotdeal" element={<HotDeal />} />

        <Route path="*" element={<Home />} />
      </Routes>
      {!showNavbar && <Footer />}
    </div>
  );
};

export default App;
