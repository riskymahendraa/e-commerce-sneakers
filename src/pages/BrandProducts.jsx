import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "../lib/axios";
import Skeleton from "../components/Skeleton";
import ProductCard from "../components/ProductCard";

const BrandProducts = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/brand/${id}`)
      .then((res) => {
        setBrand(res.data); // simpan brand beserta products
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="max-w-xs md:max-w-full mx-auto flex justify-between my-5 items-center">
          <h1 className="text-base md:text-2xl font-semibold tracking-wide">
            All Products of {loading ? "Loading..." : brand?.name}
          </h1>
          <input
            type="text"
            placeholder="Search..."
            className="input input-sm w-1/2 md:max-w-xs focus:outline-none"
          />
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} />
            ))}
          </div>
        ) : brand?.products?.length > 0 ? (
          <ProductCard
            variant="product"
            layout="grid"
            showButton={false}
            showTitle={false}
            products={brand?.products || []}
            loading={loading}
          />
        ) : (
          <div className="text-center h-32 flex items-center justify-center">
            <div>No products found for this brand.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
