import axios from "axios";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  axios.get("http://127.0.0.1:8000/api/brand").then((res) => {
    console.log(res.data);
  });

  return (
    <>
      <Navbar />
      <Hero />
      <div className="text-3xl">hello</div>
    </>
  );
}

export default App;
