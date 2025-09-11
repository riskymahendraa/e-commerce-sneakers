import "./index.css";
import { Toast } from "./components/Toast";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import NewArrivalCard from "./components/NewArrivalCard";
import About from "./components/About";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
function App() {
  const [cart, setCart] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const handleAddToCart = () => {
    setCart((prev) => prev + 1);
    setToastMessage("Product added to cart!");
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  return (
    <>
      <Navbar cart={cart} />
      <div className="container mx-auto">
        <Hero />
        <div className="my-5 max-w-xs md:max-w-full text-black text-center leading-relaxed font-bold mx-auto text-xl md:text-3xl">
          Toko Sepatu Sneakers Bali Original
        </div>
        <ProductCard onAddToCart={handleAddToCart} />
        <NewArrivalCard />
        <About />
        <Accordion />
      </div>
      <Footer />
      {showToast && <Toast message={toastMessage} />}
    </>
  );
}

export default App;
