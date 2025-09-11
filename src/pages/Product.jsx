import React from "react";
import Skeleton from "../components/Skeleton";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import axios from "../lib/axios";
import { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/product")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
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
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} />
            ))}
          </div>
        ) : (
          <ProductCard
            variant="product"
            layout="grid"
            showButton={false}
            showTitle={false}
            products={products}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
