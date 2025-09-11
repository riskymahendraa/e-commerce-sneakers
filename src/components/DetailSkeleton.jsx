import React from "react";

// components/DetailSkeleton.jsx
const DetailSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-sm max-w-[1500px] w-full mx-auto flex flex-col lg:flex-row lg:h-[650px] animate-pulse">
      {/* Gambar */}
      <figure className="relative w-full">
        <div
          className="relative w-full bg-gray-200 rounded-lg"
          style={{ paddingTop: "100%" }}
        ></div>
      </figure>

      {/* Detail produk */}
      <div className="card-body w-full lg:w-1/2 h-full flex flex-col justify-between">
        <div>
          <div className="h-8 w-2/3 bg-gray-200 rounded mb-3"></div>
          <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
          <div className="h-16 w-full bg-gray-200 rounded mb-6"></div>

          <p className="h-5 w-32 bg-gray-200 rounded mb-2"></p>
          <div className="flex flex-wrap gap-2 mt-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="px-6 py-3 bg-gray-200 rounded-md"></div>
            ))}
          </div>
        </div>

        {/* Bagian bawah */}
        <div className="mt-6">
          <div className="h-12 w-full bg-gray-200 rounded mb-3"></div>
          <div className="h-5 w-40 bg-gray-200 rounded mb-4"></div>
          <div className="flex gap-2 justify-center lg:justify-end">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 w-10 bg-gray-200 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
