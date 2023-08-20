import React from "react";
import './Buttons.css';

const Button = ({ size, variant, children, ...rest }) => {
  return (
    <button className={`btn btn-${variant}  btn-${size}`} id="button" {...rest}>{children}</button>
  );
}

export { Button };