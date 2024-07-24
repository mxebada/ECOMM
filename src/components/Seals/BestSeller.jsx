import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { categories } from "../../data/BestCategory";

const BestSeller = ({ filterProducts, activeFilter }) => {
  const { t } = useTranslation();
  const [marginTop, setMarginTop] = useState(
    window.innerWidth < 1200 ? "-30px" : "250px"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setMarginTop("-30px");
      } else {
        setMarginTop("250px");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ marginTop }}>
      <h2
        className="mt-5 fw-bold pt-5 pt-xxl-0 text-center"
        style={{ color: "#22262A" }}
      >
        {t("BESTSELLER")}
      </h2>

      <ul
        className="col-11 col-sm-9 col-md-7 col-xl-5 d-flex justify-content-between text-center p-0 m-auto mt-4"
        style={{ fontWeight: "600" }}
      >
        {categories.map((item) => (
          <li
            key={item.title2}
            className={
              activeFilter === `${item.title2}` ? "active-2 fs-4" : "cfs-5"
            }
            style={{ listStyle: "none", cursor: "pointer" }}
            onClick={() => filterProducts(`${item.title2}`)}
          >
            {t(`${item.title}`)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSeller;
