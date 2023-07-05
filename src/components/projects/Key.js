import React from "react";

function Key(props) {
  return (
    <div
      style={{
        backgroundColor: "aqua",
        display: "inline",
        margin: "1.5px",
        color: "black",
        padding: "2px",
      }}
    >
      {props.e}
    </div>
  );
}

export default Key;
