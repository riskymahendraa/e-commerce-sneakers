import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="btn btn-xs sm:btn-sm border border-gray-400 transition-transform duration-300 ease-in-out hover:scale-105">
        {title}
      </button>
    </div>
  );
};

export default Button;
