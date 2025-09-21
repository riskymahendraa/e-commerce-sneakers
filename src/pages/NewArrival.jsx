import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Toast } from "../components/Toast";
import axios from "../lib/axios";
import NewArrivalCard from "../components/NewArrivalCard";
import Skeleton from "../components/Skeleton";

const NewArrival = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(0);

  const handleAddToCart = () => {
    setCart((prev) => prev + 1);
    setToastMessage("Product added to cart!");
    setShowToast(true);
    const timer = setTimeout(() => setShowToast(false), 3000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    axios
      .get("/new-arrivals")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar cart={cart} />
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="max-w-xs md:max-w-full mx-auto flex justify-between my-5 items-center">
          <h1 className="text-base md:text-2xl font-semibold tracking-wide">
            New Arrivals
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
          <NewArrivalCard
            onAddToCart={handleAddToCart}
            variant="product"
            layout="grid"
            showButton={false}
            showTitle={false}
            products={products}
            loading={loading}
          />
        )}
        {showToast && <Toast message={toastMessage} />}
      </div>
    </div>
  );
};

export default NewArrival;
