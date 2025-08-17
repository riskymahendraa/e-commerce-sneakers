import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Hero />
        <div className="my-5 max-w-xs md:max-w-full text-center leading-relaxed font-bold mx-auto text-xl md:text-3xl">
          Toko Sepatu Sneakers Bali Original
        </div>
        <ProductCard />
      </div>
    </>
  );
}

export default App;
