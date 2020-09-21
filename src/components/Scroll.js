import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "3px solid rgba(0,0,0,.4)",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
