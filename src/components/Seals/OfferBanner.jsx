import React from "react";
import HotSeal from "./HotSeal";

const OfferBanner = () => {
  return (
    <div className="col-12 img" style={{ height: "100vh" }}>
      <div class="content">
        <p>Super Flash Sale</p>
        <p>50% Off</p>
      </div>
      <HotSeal />
    </div>
  );
};

export default OfferBanner;
