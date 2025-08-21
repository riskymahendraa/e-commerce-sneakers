import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-7">
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between text-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="font-bold text-xl md:text-2xl leading-relaxed tracking-wide">
            Sneakersku
          </div>

          {/* Copyright */}
          <div className="text-sm leading-relaxed tracking-wide md:text-base">
            &copy; 2025 Sneakersku. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end items-center space-x-5">
            <a
              href="#"
              className="text-2xl text-orange-400 hover:text-orange-600 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-2xl text-orange-400 hover:text-orange-600 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="text-2xl text-orange-400 hover:text-orange-600 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-2xl text-orange-400 hover:text-orange-600 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
