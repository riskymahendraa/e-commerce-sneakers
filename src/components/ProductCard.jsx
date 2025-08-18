import axios from "../lib/axios";
import { getImageUrl } from "../utils/imageUrl";
import { formatIDR } from "../utils/formatCurrency";
import { useState, useEffect } from "react";

const ProductCard = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("/product")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container max-w-xs h-screen mx-auto md:max-w-full">
      <div className="flex justify-between px-2 items-center">
        <div className="text-base md:text-2xl leading-relaxed font-medium">
          Product For You
        </div>
        <div className="text-sm md:text-base">View All</div>
      </div>
      <div className="overflow-x-auto p-3 mt-2 scrollbar-hide">
        <div className="flex space-x-2 md:space-x-4 w-max">
          {product.length > 0 &&
            product.map((p) => (
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
                    <button className="btn btn-xs sm:btn-sm border border-gray-400 transition-transform duration-300 ease-in-out hover:scale-105">
                      Detail
                    </button>
                    <button className="btn btn-xs sm:btn-sm border border-gray-400 transition-transform duration-300 ease-in-out hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
