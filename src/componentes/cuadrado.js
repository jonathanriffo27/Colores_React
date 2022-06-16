import React from "react";

const cuadrado = (props) => {
  return (
    <div
      className={props.className}
      id={props.id}
      style={{ backgroundColor: props.color }}
    ></div>
  );
};

export default cuadrado;
