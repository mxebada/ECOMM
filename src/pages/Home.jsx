import React from "react";
import Navbar from "../components/Navbar/Navbar"
import HotSeal from "../components/Seals/HotSeal";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="col-12 img" style={{ height: "100vh" }}>
      <div class="content">
      <p>Super Flash Sale</p>
      <p>50% Off</p>
    </div>
      </div>
    <HotSeal className="hot-seal"/>
    </div>
  );
};

export default Home;
