import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdAutorenew } from "react-icons/md";
import Button from "./Button";

const Services = () => {
  return (
    <div className="mt-3">
      <div className="max-w-xs mx-auto md:max-w-full grid md:grid-cols-2 gap-6">
        <div className="card shadow-md">
          <div className="card-body">
            <div className="card-title text-[60px] m-5 justify-center text-blue-700">
              <FaShippingFast />
            </div>
            <h2 className="card-title justify-center">Free Shipping</h2>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ad
              facere a quas assumenda laborum odio aliquid dolorem quidem
              voluptatem?
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="card-title text-[60px] m-5 justify-center text-blue-700">
              <RiCustomerService2Fill />
            </div>
            <h2 className="card-title justify-center">Customers Service</h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              minima maiores sed totam ullam corrupti tenetur quisquam aut
              nesciunt consectetur.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="card-title text-[60px] m-5 justify-center text-blue-700">
              <IoShieldCheckmarkOutline />
            </div>
            <h2 className="card-title justify-center">Warranty Original</h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              minima maiores sed totam ullam corrupti tenetur quisquam aut
              nesciunt consectetur.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="card-title text-[60px] m-5 justify-center text-blue-700">
              <MdAutorenew />
            </div>
            <h2 className="card-title justify-center">
              Easy Returns & Exchange
            </h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              minima maiores sed totam ullam corrupti tenetur quisquam aut
              nesciunt consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
