import React from "react";
import image from "../assets/images/bg-image.jpg";

const Hero = () => {
  return (
    <div className="mx-auto container relative w-full h-[50vh]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-start justify-center h-full bg-black/50">
        <div className="mx-20 text-center md:text-left space-y-3 max-w-2xl">
          <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-wide">
            Step Into Your Style
          </h1>
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed tracking-wide">
            Didesain untuk gaya, dibuat untuk kenyamanan sepanjang hari.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
