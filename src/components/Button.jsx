import React from "react";

const Button = ({ title, icon: Icon, variant, ...props }) => {
  // base style
  let baseStyle =
    "border transition-transform rounded-md duration-300 ease-in-out hover:scale-105";

  // default button kecil
  let sizeStyle = "btn btn-xs sm:btn-sm border-gray-400";

  // kalau variant = size → bikin lebih gede
  if (variant === "size") {
    sizeStyle =
      "px-4 py-2 text-base font-medium border-gray-600 rounded-md hover:bg-gray-200";
  }

  return (
    <button {...props} className={`${baseStyle} ${sizeStyle}`}>
      {Icon && <Icon />}
      {title}
    </button>
  );
};

export default Button;
