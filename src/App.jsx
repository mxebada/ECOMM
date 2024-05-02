import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../src/index.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Cart } from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  const user = false;
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {user ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
