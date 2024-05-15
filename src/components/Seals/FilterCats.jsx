import React from "react";

const FilterCats = () => {
  const Cats = [
    {
      category: "Nike",
      content: 5,
    },
    {
      category: "Adidas",
      content: 65,
    },
    {
      category: "All Stars",
      content: 4,
    },
    {
      category: "All Stars",
      content: 4,
    },
    {
      category: "All Stars",
      content: 4,
    },
    {
      category: "All Stars",
      content: 4,
    },
  ];
  return (
    <div>
      <div className="col-12 p-3" style={{ backgroundColor: "#F6F7F8" }}>
        <h3 style={{ color: "#22262A" }}>Hot Deals</h3>
        {Cats.map((c) => (
          <div className="col-12 d-flex my-1 justify-content-between">
            {" "}
            <h6>{c.category}</h6>
            <h6 style={{ color: "#22262A" }}>{c.content}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCats;
