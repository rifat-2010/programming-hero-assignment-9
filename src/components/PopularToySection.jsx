import { NavLink, useLoaderData } from "react-router";

const PopularToySection = () => {
  const kidsData = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-pink-500 font-medium bg-pink-50 px-4 py-1 rounded-lg inline-block mb-4">
              🔥 Trending Now
            </span>
            <h2 className="text-4xl font-bold text-gray-800 relative">
              Popular Toys
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="text-center">
              <span className="block text-3xl font-bold text-gray-800">
                500+
              </span>
              <span className="text-sm text-gray-600">Happy Kids</span>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-gray-800">
                4.9
              </span>
              <span className="text-sm text-gray-600">User Rating</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 max-w-2xl text-lg">
          Explore our handpicked selection of toys that have brought smiles to
          countless children. Quality and entertainment guaranteed!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kidsData.slice(0, 8).map((toy) => (
          <div key={toy.toyId} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{toy.toyName}</h3>
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-600">
                Rating: ⭐ {toy.rating}
              </p>
              <p className="text-sm text-gray-600">
                Stock: {toy.availableQuantity}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold text-emerald-600">${toy.price}</p>
              <p className="text-sm text-gray-600">Seller: {toy.sellerName}</p>
            </div>
            <NavLink to={`/toy-Details-page/${toy.toyId}`} className="w-full h-10 flex justify-center items-center font-bold mt-4 bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors">
              View More
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularToySection;
