import React from "react";

const AboutSection = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://www.radiustheme.com/demo/wordpress/themes/toyup/preview/images/footer/bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      
      </div>

      {/* Content */}
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 text-white">
            <span className="bg-white/20 text-white px-4 py-1 rounded-full inline-block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Making Play Time
              <span className="block mt-2">More Enjoyable</span>
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              We believe in creating magical moments through our carefully
              selected toys. Each product is chosen with your child's
              development and joy in mind.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-semibold mb-1">Quality First</h3>
                  <p className="text-white/80 text-sm">
                    Premium toys that last
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <h3 className="font-semibold mb-1">Safe Choice</h3>
                  <p className="text-white/80 text-sm">
                    Kid-friendly materials
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h3 className="font-semibold mb-1">Creative Play</h3>
                  <p className="text-white/80 text-sm">Inspiring imagination</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💝</span>
                <div>
                  <h3 className="font-semibold mb-1">Happy Kids</h3>
                  <p className="text-white/80 text-sm">Guaranteed smiles</p>
                </div>
              </div>
            </div>

            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition duration-300">
              Learn More About Us
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 aspect-square bg-white/10 rounded-3xl backdrop-blur-sm">
            <img src="https://images-cdn.ubuy.co.in/634d3c295adb172cda3fdc07-fisher-price-laugh-learn-sports.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
