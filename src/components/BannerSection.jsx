import React from "react";

const BannerSection = () => {
  return (
    <div className="relative py-20 mt-[20px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://ap-lora.myshopify.com/cdn/shop/files/Page_Builder.png?v=1755017349")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
     
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your Kids Adventure
            <span className="block mt-2">With Our Amazing Toys</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Give your children the gift of imagination and learning with our
            carefully curated collection of educational and fun toys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-900 rounded-full font-semibold hover:bg-indigo-50 transition duration-300">
              Shop Collection
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div>
              <h3 className="text-4xl font-bold">2000+</h3>
              <p className="text-gray-200">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-gray-200">Toys Collection</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">4.9</h3>
              <p className="text-gray-200">Customer Rating</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-gray-200">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
