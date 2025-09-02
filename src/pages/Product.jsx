import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex justify-between my-5 items-center">
          <div className="text-2xl tracking-wide">All Product</div>
          <input
            type="text"
            placeholder="Search..."
            className="input input-sm focus:outline-none"
          />
        </div>

        {/* List Produk */}
        <ProductCard layout="grid" showButton={false} showTitle={false} />
      </div>
    </div>
  );
};

export default Product;
