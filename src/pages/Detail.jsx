import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageUrl";
import axios from "../lib/axios";
import Navbar from "../components/Navbar";
import { formatIDR } from "../utils/formatCurrency";
import { useState, useEffect } from "react";
import Button from "../components/Button";

const Detail = () => {
  const [detail, setDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/product/${id}`)
      .then((res) => {
        setDetail(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="breadcrumbs my-2 text-sm">
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
          <div className="card lg:card-side bg-base-100 shadow-sm">
            {detail ? (
              <figure className="p-4">
                <img
                  src={getImageUrl(detail.image)}
                  alt={detail.name}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </figure>
            ) : (
              <p>Loading image...</p>
            )}
            <div className="card-body">
              <h2 className="card-title text-4xl leading-relaxed">
                {detail.name}
              </h2>
              <div className="text-2xl font-semibold">
                {formatIDR(detail.price)}
              </div>
              <div className="text-xl mt-2 leading-relaxed">
                {detail.description}
              </div>
              <div>
                <p className="text-base font-bold tracking-wide leading-relaxed">
                  Select Size
                </p>
                <div className="flex gap-2 mt-2">
                  {detail.sizes?.length > 0 ? (
                    detail.sizes.map((s) => (
                      <Button
                        variant={"size"}
                        title={s.size_value}
                        key={s.id}
                      />
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No sizes available</p>
                  )}
                </div>
                <div className="my-4">
                  <button className="btn btn-primary px-6 py-2 rounded-md w-full">
                    Add to Cart
                  </button>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Category: {detail.category?.name || "Uncategorized"}
                  </p>
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
