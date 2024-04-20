import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MyModal from "../components/MyModal";
import MyPay from "../components/MyPay";
const Home = () => {
  return (
    <div style={{backgroundColor:"red",height:"2000px"}}>
      <Navbar/>
      {/* <MyModal /> */}
      <MyPay/>
    </div>
  );
};

export default Home;
