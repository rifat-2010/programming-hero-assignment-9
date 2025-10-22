import { FaChild, FaHeart, FaStar, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Bringing Joy to Every Child
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              At KidsCraft, we believe in nurturing imagination, creativity, and
              learning through play.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
  
        ></div>
      </div>

      {/* Mission Statement */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Happy children playing"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're dedicated to providing high-quality, educational toys that
                inspire creativity and foster development. Every toy in our
                collection is carefully selected to ensure safety, durability,
                and endless fun.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <FaStar className="text-blue-500 text-2xl mb-2" />
                  <h3 className="font-semibold text-gray-800">Quality First</h3>
                  <p className="text-sm text-gray-600">
                    Premium toys that last
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <FaChild className="text-green-500 text-2xl mb-2" />
                  <h3 className="font-semibold text-gray-800">Child Safety</h3>
                  <p className="text-sm text-gray-600">
                    Rigorous safety testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <FaHeart className="text-red-500 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Made with Love
              </h3>
              <p className="text-gray-600">
                Each toy is chosen with care and attention to detail, ensuring
                your child receives only the best.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <FaLightbulb className="text-yellow-500 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Educational Focus
              </h3>
              <p className="text-gray-600">
                We prioritize toys that combine learning with fun, helping
                children develop while they play.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <FaChild className="text-blue-500 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Child-Centric
              </h3>
              <p className="text-gray-600">
                Everything we do is focused on creating magical moments and
                lasting memories for children.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10k+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Brands</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
              <p className="text-blue-600">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <img
                src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Michael Chen</h3>
              <p className="text-blue-600">Product Specialist</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <img
                src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Emily Brown</h3>
              <p className="text-blue-600">Customer Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Shopping?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover our amazing collection of toys and start creating wonderful
            memories for your children.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Explore Our Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
