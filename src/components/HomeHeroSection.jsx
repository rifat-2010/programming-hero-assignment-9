import React from 'react';

const HomeHeroSection = () => {
    return (
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="max-w-7xl mx-auto">
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
               <div>⭐⭐⭐⭐⭐</div>
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
  <div className="carousel w-full h-[400px] rounded-xl overflow-hidden">
    {/* Slide 1 */}
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src="https://sardarjitoy.com/cdn/shop/files/sardarjitoy.com_1.png?v=1725167917"
        className="w-full h-full object-cover"
        alt="Educational Toy"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        <a href="#slide6" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>

    {/* Slide 2 */}
    <div id="slide2" className="carousel-item relative w-full">
      <img
        src="https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/image_17391781381184.jpeg"
        className="w-full h-full object-cover"
        alt="Fun Toy"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>

    {/* Slide 3 */}
    <div id="slide3" className="carousel-item relative w-full">
      <img
        src="https://i.pinimg.com/736x/72/0c/74/720c7457a6af70a649613d4b7b549994.jpg"
        className="w-full h-full object-cover"
        alt="Creative Toy"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div>

    {/* Slide 4 */}
    <div id="slide4" className="carousel-item relative w-full">
      <img
        src="https://kingoftoys.com.cy/wp-content/uploads/2023/11/875x500_40off_Playmobil.jpg"
        className="w-full h-full object-cover"
        alt="Creative Toy"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide5" className="btn btn-circle">❯</a>
      </div>
    </div>

    {/* Slide 5 */}
    <div id="slide5" className="carousel-item relative w-full">
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-kids-toys-facebook-cover_23-2149651187.jpg"
        className="w-full h-full object-cover"
        alt="Creative Toy"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide6" className="btn btn-circle">❯</a>
      </div>
    </div>

    {/* Slide 6 */}
    <div id="slide6" className="carousel-item relative w-full">
      <img
        src="https://elements-resized.envatousercontent.com/elements-video-cover-images/files/462876702/Cover%20Pr.jpg?w=1200&h=630&cf_fit=crop&q=85&format=jpeg&s=86c88e6352bf0fa7dede449eae475df795015eeb0f2b444e33c1a68d844dbc33"
        className="w-full h-full object-cover"
        alt="Creative Toy"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        <a href="#slide5" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
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