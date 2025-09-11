import axios from "../lib/axios";
import Button from "./Button";
import Skeleton from "./Skeleton";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../utils/imageUrl";
import { formatIDR } from "../utils/formatCurrency";
import { useState, useEffect } from "react";

const ProductCard = ({
  onAddToCart,
  showButton = true,
  showTitle = true,
  layout = "scroll",
  variant = "home", // "home" = limit 6, "product" = semua data lewat props
  products = [], // data diterima dari parent kalau di view all page
}) => {
  const [homeProducts, setHomeProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch hanya untuk homepage (limit 6)
  useEffect(() => {
    if (variant === "home") {
      axios
        .get("/product")
        .then((res) => {
          setHomeProducts(res.data.slice(0, 6));
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [variant]);

  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const cardClass =
    variant === "home" ? "w-48 sm:w-48 md:w-64 flex-shrink-0" : "w-full";

  const cardLayout =
    layout === "scroll"
      ? "flex space-x-2 md:space-x-4 w-max"
      : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5";

  // Pilih data sesuai variant
  const data = variant === "home" ? homeProducts : products;

  return (
    <div className="container max-w-xs mx-auto md:max-w-full">
      <div className="flex justify-between px-2 items-center">
        {showTitle && (
          <div className="text-base md:text-2xl leading-relaxed font-medium">
            Product For You
          </div>
        )}

        {showButton && <Button title="View All" as="link" to="/product" />}
      </div>

      <div className="overflow-x-auto p-3 mt-2 scrollbar-hide">
        <div className={`${cardLayout}`}>
          {variant === "home" && loading
            ? // tampilkan 6 skeleton
              Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)
            : data.length > 0 &&
              data.map((p) => (
                <div
                  key={p.id}
                  className={`card-sm rounded-xl shadow-md ${cardClass}`}
                >
                  <figure className="h-32 sm:h-40 md:h-48 w-full flex items-center justify-center">
                    <img
                      className="h-full w-full rounded-xl object-cover"
                      src={getImageUrl(p.image)}
                      alt={p.name}
                    />
                  </figure>
                  <div className="card-body p-3 sm:p-4">
                    <h2 className="card-title text-sm sm:text-base">
                      {p.name}
                    </h2>
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
                      <Button
                        onClick={() => onAddToCart(p)}
                        title="Add to Cart"
                      />
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
