import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import { FaEye, FaStar } from "react-icons/fa";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { toast } from "react-toastify";

const ToyDetailsPage = () => {
  const { id } = useParams();
  const kidsData = useLoaderData();
  const toy = kidsData.find((p) => p.toyId == id);
  const [show, setShow] = useState(false);
  
  const SweetMasageField = (e) => {
    e.preventDefault();
    toast.success("Sween alert Test Successful!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
        {/* page's title */}
        <title>{toy.toyName}</title>
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Image */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="w-full h-[400px] object-contain rounded-lg"
          />
        </div>

        {/* Toy Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{toy.toyName}</h1>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-emerald-600">
              ${toy.price}
            </span>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold">{toy.rating}</span>
            </div>
          </div>

          <div className="space-y-4 text-gray-600">
            <p>
              <span className="font-semibold">Category:</span> {toy.subCategory}
            </p>
            <p>
              <span className="font-semibold">Available Quantity:</span>{" "}
              {toy.availableQuantity}
            </p>
            <p>
              <span className="font-semibold">Seller:</span> {toy.sellerName}
            </p>
            <p>
              <span className="font-semibold">Contact:</span> {toy.sellerEmail}
            </p>
          </div>

          <p className="text-lg text-gray-700">{toy.description}</p>

          <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* rect chart */}
<div className=' md:mx-20 mb-[50px]'>
<h1 className='text-3xl font-bold mb-6'>Ratings</h1>
<div style={{ width: '100%', height: 400 }}>
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      layout="vertical"
      data={toy.ratings}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" width={80} />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
</div>
</div>

      {/* Detailed Description */}
      <div className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span className="text-4xl">📝</span>
            Product Details
          </h2>
        <div className="prose prose-lg max-w-none">
          {toy.longDescription.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Features & Benefits */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Why Choose {toy.toyName}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-emerald-50 rounded-xl">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">
              Quality Assured
            </h3>
            <p className="text-gray-600">
              Premium materials and rigorous testing ensure long-lasting
              durability and safety.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Educational Value
            </h3>
            <p className="text-gray-600">
              Designed to promote learning, creativity, and skill development in
              children.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-xl">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">
              Customer Satisfaction
            </h3>
            <p className="text-gray-600">
              Backed by positive reviews and our commitment to customer
              happiness.
            </p>
          </div>
        </div>
      </div>

     
   {/* sweetInput Field */}
  <form onClick={SweetMasageField} className="bg-purple-50 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-sm p-8 space-y-5 mx-auto mt-10">
    <h2 className="text-black text-3xl font-bold text-center mb-4">
      Try Now For A Sweet Masage
    </h2>

    <div>
      <label className="block text-black font-semibold mb-1 text-[17px]">
        Email
      </label>
      <input
        type="email"
        name="email"
        required
        placeholder="example@email.com"
        className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 py-3 rounded-lg"
      />
    </div>

    <div className="relative">
      <label className="block text-black font-semibold mb-1 text-[17px]">
        Password
      </label>
      <input
        type={show ? "text" : "password"}
        name="password"
        required
        placeholder="••••••••"
        className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 py-3 rounded-lg"
      />
      <span
        onClick={() => setShow(!show)}
        className="absolute right-3 top-10 cursor-pointer text-white text-lg"
      >
        {show ? <FaEye /> : <IoEyeOff />}
      </span>
    </div>

    <button
      type="button"
      className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-lg transition duration-300"
    >
      Try Now
    </button>
  </form>
</div>

  );
};

export default ToyDetailsPage;
