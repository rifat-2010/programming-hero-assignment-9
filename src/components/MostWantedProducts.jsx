import React from "react";
import { NavLink, useLoaderData } from "react-router";

const MostWantedProducts = () => {
  const kidsData = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block">
          <p className="text-emerald-500 font-medium mb-2 bg-emerald-50 px-4 py-1 rounded-full inline-block">
            ✨ Top Rated Collection
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Most Wanted Products
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our collection of most loved toys that have captured the
          hearts of kids worldwide. Each toy is carefully selected for quality
          and fun.
        </p>
        <div className="flex items-center justify-center gap-8 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <p className="text-gray-700">Best Sellers</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌟</span>
            <p className="text-gray-700">Top Rated</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎁</span>
            <p className="text-gray-700">Special Offers</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {kidsData?.slice(7, 10).map((toy) => (
          <div
            key={toy.toyId}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Sale Badge */}
            <div className="relative">
              <span className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-md text-sm">
                SALE
              </span>
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {toy.toyName}
              </h3>

              {/* Price Section */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-emerald-600">
                  ${toy.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${(toy.price)}
                </span>
                <span className="text-sm text-emerald-500 font-medium">
                  20% Off
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm text-gray-600">
                    {toy.rating}
                  </span>
                </div>

                <NavLink to={`/toy-Details-page/${toy.toyId}`}  className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                  View More
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostWantedProducts;
