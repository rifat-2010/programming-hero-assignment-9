import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  // console.log(loading, user);

  // current user access
  const auth = getAuth();


   // for Update Profile
  const handleUpdateProfile = (e) => {
// const displayName = auth.currentUser.displayName;
  // const currentUserEmail = auth.currentUser.email;
  // const photoURL = auth.currentUser.photoURL;
    const displayName = e.target.name.value;
  const photoURL = e.target.photo.value; 
  // console.log(displayName, photoURL)

      e.preventDefault();
    updateProfile(auth.currentUser, {
    displayName,
    photoURL,
  })
    .then(() => {
      setUser({
      ...user,
      displayName,
      photoURL,
    });
        toast.success("Profile Update Successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };


  // for signOut
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Sign Out successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row lg:flex-row items-center justify-evenly p-4">
      {/* page title */}
      <title>Profile-Page</title>
      {/* user details */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header Section with Gradient */}
        <div className="bg-linear-to-r from-purple-500 to-purple-600 p-6 pb-16">
          <img
            src={
              user?.photoURL ||
              "https://img.icons8.com/?size=100&id=2952&format=png"
            }
            className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg mx-auto"
            alt="User Avatar"
          />
        </div>

        {/* User Info Section */}
        <div className="px-6 -mt-8 pb-6">
          <div className="bg-white rounded-xl shadow-md p-5 mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
              {user?.displayName || "Guest User"}
            </h2>

            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <img
                  className="w-15 h-15 rounded-full"
                  src="https://img.icons8.com/?size=160&id=108813&format=png"
                  alt=""
                />

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 font-medium">Email</p>
                  <p className="text-sm text-gray-800 font-semibold truncate">
                    {user?.email || "No email"}
                  </p>
                </div>
              </div>

              {/* User ID or any other info */}
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <img
                  className="w-15 h-15 rounded-full"
                  src="https://img.icons8.com/?size=160&id=108652&format=png"
                  alt=""
                />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-medium">
                    Account Status
                  </p>
                  <p className="text-sm text-green-600 font-semibold">Active</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
              {/* <User size={18} /> */}
              Update Profile <FaArrowRightLong />
            </button>

            <button
              onClick={handleSignOut}
              className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://img.icons8.com/?size=160&id=43BdpNpa7e9N&format=png"
                alt=""
              />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* user's name and photo URL update field */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <img
                  className="h-10 w-10 border-4 border-black object-cover shadow-lg mx-auto"
                  src="https://img.icons8.com/?size=160&id=114094&format=png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
                <p className="text-purple-100 text-sm">
                  Update your personal information
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleUpdateProfile} className="p-8">
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <FaRegUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-200 text-gray-700 font-medium"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  This name will be displayed on your profile
                </p>
              </div>

              {/* Photo URL Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Profile Photo URL
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <AiOutlinePicture />
                  </div>
                  <input
                    type="text"
                    name="photo"
                    required
                    placeholder="https://example.com/photo.jpg"
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-200 text-gray-700 font-medium"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Enter a valid image URL for your profile picture
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {/* <Save size={20} /> */}
                  Save Changes
                </button>
              </div>
            </div>

            {/* Info Message */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">💡 Tip:</span> Make sure to use
                a high-quality image URL for best results.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
