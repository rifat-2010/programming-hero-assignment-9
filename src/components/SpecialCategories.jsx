import {
  FaPuzzlePiece,
  FaRobot,
  FaCar,
  FaPaintBrush,
  FaGraduationCap,
  FaGamepad,
} from "react-icons/fa";

const SpecialCategories = () => {
  const categories = [
    {
      icon: <FaPuzzlePiece className="text-4xl text-blue-500" />,
      name: "Brain Games",
      count: "250+",
      description: "Puzzles and educational games that challenge young minds",
    },
    {
      icon: <FaRobot className="text-4xl text-purple-500" />,
      name: "STEM Toys",
      count: "180+",
      description: "Science and technology toys for future innovators",
    },
    {
      icon: <FaCar className="text-4xl text-red-500" />,
      name: "Vehicles",
      count: "300+",
      description: "Cars, trucks, and planes for adventure seekers",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-pink-500" />,
      name: "Arts & Crafts",
      count: "200+",
      description: "Creative supplies for artistic expression",
    },
    {
      icon: <FaGraduationCap className="text-4xl text-green-500" />,
      name: "Educational",
      count: "150+",
      description: "Learning tools for academic excellence",
    },
    {
      icon: <FaGamepad className="text-4xl text-yellow-500" />,
      name: "Interactive",
      count: "220+",
      description: "Engaging toys for active play and learning",
    },
  ];

  return (
    <div data-aos="zoom-in-up" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our Special Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of toys designed to spark
            imagination, encourage learning, and create endless fun for children
            of all ages.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.name}
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    {category.count} Products
                  </p>
                </div>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Fun Facts */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">1500+</div>
              <div className="text-blue-100">Total Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">6+</div>
              <div className="text-blue-100">Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">15k+</div>
              <div className="text-blue-100">Happy Kids</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">4.8</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCategories;
