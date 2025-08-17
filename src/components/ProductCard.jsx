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
    <div className="container h-screen mx-5 md:mx-auto md:max-w-full">
      <div className="flex justify-between ">
        <div className="text-base md:text-2xl leading-relaxed font-medium">
          Product For You
        </div>
        <div>View all</div>
      </div>
      <div className="flex items-center my-3 gap-5">
        {product.length > 0 &&
          product.map((p) => (
            <div key={p.id} className="card-sm bg-base-100 w-60 shadow-md">
              <figure>
                <img src={getImageUrl(p.image)} alt={p.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-base">{p.name}</h2>
                <p>
                  <span className="text-gray-500">{formatIDR(p.price)}</span>
                </p>
                <div className="my-2 card-actions justify-end">
                  <button className="btn btn-sm bg-green-400 hover:bg-green-600 transition-transform duration-300 ease-in-out hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductCard;
