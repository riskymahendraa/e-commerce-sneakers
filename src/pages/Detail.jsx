import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageUrl";
import axios from "../lib/axios";
import Navbar from "../components/Navbar";
import { formatIDR } from "../utils/formatCurrency";
import { useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";

const Detail = () => {
  const [detail, setDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/product/${id}`)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="breadcrumbs my-2 text-xs md:text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>{detail.name}</li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-100 shadow-sm max-w-[1500px] w-full mx-auto flex flex-col lg:flex-row lg:h-[650px]">
            {/* Gambar */}
            {detail ? (
              <figure className="relative w-full">
                {/* kotak 1:1 */}
                <div className="relative w-full" style={{ paddingTop: "100%" }}>
                  <img
                    src={getImageUrl(detail.image)}
                    alt={detail.name}
                    className="absolute inset-0 w-full h-full object-contain rounded-lg"
                  />
                </div>
              </figure>
            ) : (
              <p>Loading image...</p>
            )}

            {/* Detail produk */}
            <div className="card-body w-full lg:w-1/2 h-full flex flex-col justify-between">
              {/* Bagian atas */}
              <div>
                <h2 className="card-title text-2xl lg:text-4xl leading-relaxed">
                  {detail.name}
                </h2>
                <div className="text-xl lg:text-2xl font-semibold">
                  {formatIDR(detail.price)}
                </div>
                <div className="w-full text-sm lg:text-base mt-2 leading-relaxed">
                  {detail.description || "No description available"}
                </div>
                <div>
                  <p className="mt-2 text-base font-bold tracking-wide leading-relaxed">
                    Select Size
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {detail.sizes?.length > 0 ? (
                      detail.sizes.map((s, i) => (
                        <div
                          key={i}
                          className="px-3 py-1 text-base lg:text-xl border rounded-md"
                        >
                          {s.size_value}
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">
                        No sizes available
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bagian bawah */}
              <div className="mt-6">
                <button className="btn btn-primary px-6 py-2 rounded-md w-full">
                  Add to Cart
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  Category: {detail.category?.name || "Uncategorized"}
                </p>
                <div className="flex gap-2 justify-center lg:justify-end items-center mt-4">
                  <a
                    href="#"
                    className="p-2 text-lg lg:text-xl hover:bg-blue-600 hover:scale-105 transition-transform bg-blue-500 rounded-full text-white"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="p-2 text-lg lg:text-xl hover:bg-blue-600 hover:scale-105 transition-transform bg-blue-500 rounded-full text-white"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="#"
                    className="p-2 text-lg lg:text-xl hover:bg-blue-600 hover:scale-105 transition-transform bg-blue-500 rounded-full text-white"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="p-2 text-lg lg:text-xl hover:bg-blue-600 hover:scale-105 transition-transform bg-blue-500 rounded-full text-white"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
