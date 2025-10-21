import React from 'react';

const HomeHeroSection = () => {
    return (
        <div className="max-w-7xl mx-auto">
        <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-12 px-4">
          {/* Left Side Content */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full">
              <p className="text-emerald-600 font-medium flex items-center gap-2">
                <span className="text-yellow-500">⭐</span>
                Best Toy Store Online
              </p>
            </div>
            <h1 className="text-5xl font-bold text-gray-800">
              Find The Best Toys
              <span className="block text-emerald-500 mt-2">For Your Kids</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Discover our amazing collection of educational and fun toys that
              help in your child's development. Safe, durable, and engaging toys
              for all ages.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600 text-sm">
                  (2.5k+ Reviews)
                </span>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition duration-300">
                Explore Now
              </button>
              <button className="bg-white text-emerald-500 px-8 py-3 rounded-lg border-2 border-emerald-500 hover:bg-emerald-50 transition duration-300">
                View Collection
              </button>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="md:w-1/2 relative mt-10 md:mt-0">
            <div className="h-[400px] grid grid-cols-3 gap-4">
              <img
                src="https://sardarjitoy.com/cdn/shop/files/sardarjitoy.com_1.png?v=1725167917"
                alt="Educational Toy"
                className="rounded-xl shadow-lg w-full h-full object-cover hover:shadow-xl transition duration-300"
              />
              <img
                src="https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/image_17391781381184.jpeg"
                alt="Fun Toy"
                className="rounded-xl shadow-lg w-full h-full object-cover hover:shadow-xl transition duration-300"
              />
              <img
                src="https://i.pinimg.com/736x/72/0c/74/720c7457a6af70a649613d4b7b549994.jpg"
                alt="Creative Toy"
                className="rounded-xl shadow-lg w-full h-full object-cover hover:shadow-xl transition duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg">
              <p className="text-emerald-500 font-semibold">Featured Items</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeHeroSection;