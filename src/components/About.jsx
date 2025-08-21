import React from "react";
import Services from "./Services";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const About = () => {
  return (
    <div className="mt-5 grid md:grid-cols-2 gap-8">
      <Services />
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="w-3/4 md:w-3/5 mx-auto text-center leading-relaxed tracking-wide text-xl md:text-3xl">
          We strive to make your shopping experience better!
        </h1>
        <div className="max-w-xs mx-auto md:max-w-full my-4 text-justify tracking-wide leading-relaxed text-sm md:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque esse
          libero corrupti aspernatur aliquam accusantium consectetur repellendus
          perferendis. Eos iste blanditiis voluptatem. Aliquam impedit, unde et
          autem iste eius provident.
        </div>
        <div className="max-w-xs pt-4 md:max-w-full text-justify border-0 md:border-t-[0.5px] border-gray-300 px-4 py-2 space-y-4">
          {/* Alamat */}
          <div className="flex items-start gap-3">
            <div className="text-blue-700 text-xl md:text-2xl flex-shrink-0">
              <FaHome />
            </div>
            <p className="text-sm md:text-base tracking-wide leading-relaxed">
              Alamat : Jl. Raya No. 123, Jakarta, Indonesia
            </p>
          </div>

          {/* Telepon */}
          <div className="flex items-center text-justify gap-3">
            <div className="text-blue-700 text-xl md:text-2xl flex-shrink-0">
              <FaPhoneAlt />
            </div>
            <p className="text-sm md:text-base tracking-wide leading-relaxed">
              Telephone : +62 123 4567 890
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center text-justify gap-3">
            <div className="text-blue-700 text-xl md:text-2xl flex-shrink-0">
              <IoMdMail />
            </div>
            <p className="text-sm md:text-base tracking-wide leading-relaxed break-all">
              Email : sneakersku@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
