import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
  listStyle: "none",
  padding: "0",
  margin: "0",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "#FAFAFB",
});

export default function UsePagination() {
  const { items } = usePagination({
    count: 7,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                style={{
                  color: selected ? "white" : "black",
                  backgroundColor: selected ? "#40BFFF" : "#FAFAFB",
                  padding: "10px 23px",
                  border: "0",
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            // children = (
            //   <button type="button" {...item}>
            //     {type}
            //   </button>
            // );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
