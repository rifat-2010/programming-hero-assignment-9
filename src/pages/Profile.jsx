import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase.config';

const Profile = () => {
    const {user, setUser, loading} = useContext(AuthContext);
    console.log(loading, user);

//       const user = {
//     displayName: "John Doe",
//     email: "john.doe@example.com",
//     photoURL: "https://i.pravatar.cc/150?img=12"
//   };

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
        
        {/* user details */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header Section with Gradient */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 pb-16">
              <img
                src={user?.photoURL || "https://img.icons8.com/?size=100&id=2952&format=png"}
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
                  <img className='w-15 h-15 rounded-full' src="https://img.icons8.com/?size=160&id=108813&format=png" alt="" />
                
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 font-medium">Email</p>
                  <p className="text-sm text-gray-800 font-semibold truncate">
                    {user?.email || "No email"}
                  </p>
                </div>
              </div>

              {/* User ID or any other info */}
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <img className='w-15 h-15 rounded-full' src="https://img.icons8.com/?size=160&id=108652&format=png" alt="" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-medium">Account Status</p>
                  <p className="text-sm text-green-600 font-semibold">Active</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button 
              className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {/* <User size={18} /> */}
              Update Profile
            </button>

            <button 
              onClick={handleSignOut}
              className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <img className='w-8 h-8 rounded-full' src="https://img.icons8.com/?size=160&id=43BdpNpa7e9N&format=png" alt="" />
              Sign Out
            </button>
          </div>
        </div>
      </div>




        {/* user's name and photo URL update field */}
      <div>
        klfdjsklf
      </div>
    </div>
       
    );
};

export default Profile;