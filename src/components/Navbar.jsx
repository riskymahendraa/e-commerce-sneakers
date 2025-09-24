import Button from "./Button";
import axios from "../lib/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  const [open, setOpen] = useState(null);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/brand")
      .then((res) => {
        setBrands(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("/category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" navbar bg-base-100 shadow-sm p-4">
      <div className="z-50 container mx-auto flex items-center justify-between">
        <Link to="/" className="btn btn-ghost text-xl md:text-3xl">
          Sneakersku
        </Link>
        <ul className="menu text-xs md:text-base menu-horizontal space-x-0 md:space-x-2">
          <li>
            <Link to="/product">Browse All</Link>
          </li>
          <li>
            <details open={open === "brand"}>
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(open === "brand" ? null : "brand");
                }}
                className="cursor-pointer"
              >
                Brand
              </summary>
              <ul className="bg-base-100 rounded-t-none p-2 w-36">
                {brands.length > 0 ? (
                  brands.map((b) => (
                    <li key={b.id}>
                      <Link to={`/brand/${b.id}`}>{b.name}</Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400">Loading...</li>
                )}
              </ul>
            </details>
          </li>
          <li>
            <details open={open === "category"}>
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(open === "category" ? null : "category");
                }}
                className="cursor-pointer"
              >
                Categories
              </summary>
              <ul className="bg-base-100 rounded-t-none p-2 w-48">
                {categories.length > 0 ? (
                  categories.map((c) => (
                    <li key={c.id}>
                      <Link to={`/category/${c.id}`}>{c.name}</Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400">Loading...</li>
                )}
              </ul>
            </details>
          </li>
          <div className="flex items-center gap-5">
            <div className="border-l h-6 border-gray-300"></div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />{" "}
                    </svg>
                    {cart > 0 && (
                      <span className="badge bg-blue-400 badge-sm indicator-item">
                        {cart}
                      </span>
                    )}
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">{cart} Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <li>
              <Button title="Sign in" as="link" to="/login" />
            </li>
          </div>
        </ul>
      </div>
      <div className="bg-red-500 flex-none"></div>
    </div>
  );
};

export default Navbar;
