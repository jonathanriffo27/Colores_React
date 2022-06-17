import React from "react";

const cuadrado = (props) => {
  return (
    <div
      onClick={() => props.onClick(props.id, props.color) }
      className={props.className}
      id={props.id}
      style={{ backgroundColor: props.color }}
    ></div>
  );
};

export default cuadrado;
