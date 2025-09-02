import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import axios from "../lib/axios";
import { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="max-w-xs md:max-w-full mx-auto flex justify-between my-5 items-center">
          <h1 className="text-base md:text-2xl font-semibold tracking-wide">
            All Products
          </h1>
          <input
            type="text"
            placeholder="Search..."
            className="input input-sm w-1/2 md:max-w-xs focus:outline-none"
          />
        </div>

        {/* List Produk */}
        <ProductCard
          variant="product"
          layout="grid"
          showButton={false}
          showTitle={false}
          products={products}
        />
      </div>
    </div>
  );
};

export default Product;
