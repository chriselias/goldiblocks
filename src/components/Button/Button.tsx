import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="bg-blue-100 text-blue-900 p-4">{props.label}</button>
  );
};

export default Button;
