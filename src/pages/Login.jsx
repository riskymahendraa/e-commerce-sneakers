import React from "react";
import Image from "../assets/images/login-image.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 container mx-auto p-6">
      {/* Bagian Kiri */}
      <div className="hidden md:block relative rounded-3xl overflow-hidden">
        <img
          src={Image}
          alt="Login"
          className="w-full h-full object-cover rounded-3xl"
        />

        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-black/50 rounded-3xl" />

        {/* Teks Welcome */}
        <div className="absolute inset-0 flex items-center justify-start px-16">
          <div className="flex flex-col space-y-3 max-w-md">
            <h2 className="text-white font-bold text-3xl leading-relaxed drop-shadow-lg">
              Welcome Back!
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed tracking-widest">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              dignissimos consequuntur cupiditate possimus sapiente, quisquam
              enim expedita dolor nisi quae.
            </p>
          </div>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="h-screen flex items-center justify-center">
        {" "}
        <div className="md:w-1/2 max-w-xs mx-auto md:max-w-md lg:max-w-lg bg-white p-6 rounded-xl shadow">
          {" "}
          <h2 className="text-2xl font-bold leading-relaxed tracking-wide text-center mb-3">
            Sneakersku
          </h2>
          <p className="text-gray-400 text-xs text-center">
            Please enter your login details to access your account.
          </p>
          <form className="space-y-4 my-6">
            <div>
              <input
                type="email"
                className="my-2 w-full bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <FaEyeSlash className="w-4 h-4" />
                ) : (
                  <FaEye className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 underline text-sm"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
