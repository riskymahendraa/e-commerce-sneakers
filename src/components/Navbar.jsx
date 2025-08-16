import React from "react";

const Navbar = () => {
  return (
    <div className=" navbar bg-base-100 shadow-sm">
      <div className="z-50 container mx-auto flex items-center justify-between">
        <a className="btn btn-ghost text-xl md:text-3xl">Sneakersku</a>
        <ul className="menu text-xs md:text-base menu-horizontal space-x-0 md:space-x-2">
          <li>
            <a>Browse All</a>
          </li>
          <li>
            <details>
              <summary>Brand</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Categories</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="bg-red-500 flex-none"></div>
    </div>
  );
};

export default Navbar;
