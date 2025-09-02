import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, icon: Icon, variant, as, to, ...props }) => {
  // base style
  let baseStyle =
    "border transition-transform rounded-md duration-300 ease-in-out hover:scale-105";

  // default button kecil
  let sizeStyle = "btn btn-xs sm:btn-sm border-gray-400";

  // kalau variant = size → bikin lebih besar
  if (variant === "size") {
    sizeStyle =
      "px-4 py-2 text-base font-medium border-gray-600 rounded-md hover:bg-gray-200";
  }

  // kalau ada `as="link"` → render Link
  if (as === "link") {
    return (
      <Link to={to} className={`${baseStyle} ${sizeStyle}`} {...props}>
        {Icon && <Icon className="mr-1" />}
        {title}
      </Link>
    );
  }

  // default → button biasa
  return (
    <button {...props} className={`${baseStyle} ${sizeStyle}`}>
      {Icon && <Icon className="mr-1" />}
      {title}
    </button>
  );
};

export default Button;
