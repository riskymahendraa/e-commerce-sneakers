import React from "react";
import axios from "../lib/axios";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState, useEffect } from "react";
import { getImageUrl } from "../utils/imageUrl";
import { formatIDR } from "../utils/formatCurrency";

const NewArrivalCard = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("/product")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const newArrivals = product.filter((p) => p.is_new_arrival === 1);

  return (
    <div className="container mt-5 max-w-xs mx-auto md:max-w-full">
      <div className="flex justify-between px-2 items-center">
        <div className="text-base md:text-2xl leading-relaxed font-medium">
          New Arrival
        </div>
        <div className="text-sm md:text-base">View All</div>
      </div>
      <div className="overflow-x-auto p-3 mt-2 scrollbar-hide">
        <div className="flex space-x-2 md:space-x-4 w-max">
          {newArrivals.length > 0 &&
            newArrivals.map((p) => (
              <div
                key={p.id}
                className="card-sm w-48 sm:w-48 md:w-64 flex-shrink-0 rounded-xl shadow-md"
              >
                <figure className="h-32 sm:h-40 md:h-48 w-full flex items-center justify-center">
                  <img
                    className="h-full w-full rounded-xl object-cover"
                    src={getImageUrl(p.image)}
                    alt={p.name}
                  />
                </figure>
                <div className="card-body p-3 sm:p-4">
                  <h2 className="card-title text-sm sm:text-base">{p.name}</h2>
                  <p>
                    <span className="text-gray-500 text-sm sm:text-base">
                      {formatIDR(p.price)}
                    </span>
                  </p>
                  <div className="my-2 flex items-center card-actions justify-end">
                    <Button
                      onClick={() => handleProductClick(p.id)}
                      title="Detail"
                    />
                    <Button title="Add to Cart" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivalCard;
