import React from "react";
import Services from "./Services";

const About = () => {
  return (
    <div className=" mt-5 grid md:grid-cols-2 gap-8">
      <Services />
      <div className="text-center leading-relaxed tracking-wide border text-2xl">
        About Us
      </div>
    </div>
  );
};

export default About;
