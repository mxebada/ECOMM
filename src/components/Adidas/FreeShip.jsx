import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { useTranslation } from "react-i18next";

const FreeShipp = () => {
  const { t } = useTranslation();

  const Free = [
    {
      img: <FaShippingFast />,
      title: t("free"),
      desc: t("lorem"),
    },
    {
      img: <RiRefund2Line />,
      title: t("refund"),
      desc: t("lorem"),
    },
    {
      img: <MdSupportAgent />,
      title: t("support"),
      desc: t("lorem"),
    },
  ];

  return (
    <div>
      <div className="col-12 d-block d-lg-flex flex-wrap my-5">
        {Free.map((fe) => (
          <div
            key={fe.title}
            className="col-12 col-lg-6 col-xl-4 m-auto text-center px-5 mt-3"
          >
            <h1 style={{ fontSize: "100px", color: "#FF6875" }}>{fe.img}</h1>
            <h4 style={{ color: "#22262A" }}>{fe.title}</h4>
            <p className="col-10 m-auto px-5">{fe.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeShipp;
