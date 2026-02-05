import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { HashLoader } from "react-spinners";

const Navbar = () => {
  const { user, setUser, loading } = useContext(AuthContext);
  // console.log(loading, user);

  // signOut function
  const handleSignout = () => {
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
    <div className="sticky top-0 z-50 w-full bg-slate-100 py-2.5 border-b border-b-slate-300 shadow-md">
      <div className="flex items-center justify-between mx-10 md:w-11/12 md:mx-auto">
        {/* mobile device row reverse and some gap */}
        <div className="flex flex-row-reverse gap-5 md:gap-10">
          <figure className="flex gap-2">
            <img
              src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
              className="w-[50px] h-10"
            />
            <h1 className="text-2xl font-bold">Toys Shop</h1>
          </figure>

          {/* mobile and md:device dropdown nav code */}
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              id="navUl"
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-xl mt-3 w-56 p-3 shadow-lg border border-gray-200"
            >
              <li className="mb-2">
                <NavLink
                  to={"/"}
                  className="text-base font-semibold text-gray-700 hover:bg-purple-100 hover:text-purple-600 rounded-lg py-3"
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to={"/about-us"}
                  className="text-base font-semibold text-gray-700 hover:bg-purple-100 hover:text-purple-600 rounded-lg py-3"
                >
                  About Us
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to={"/blog-page"}
                  className="text-base font-semibold text-gray-700 hover:bg-purple-100 hover:text-purple-600 rounded-lg py-3"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/profile-page"}
                  className="text-base font-semibold text-gray-700 hover:bg-purple-100 hover:text-purple-600 rounded-lg py-3"
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* lg device nav code */}
        <ul
          id="navUl"
          className="hidden md:hidden lg:flex  items-center gap-2 md:gap-5"
        >
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"}>About US</NavLink>
          </li>

          <li>
            <NavLink to={"/blog-page"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={"/profile-page"}>My Profile</NavLink>
          </li>
        </ul>

        {loading ? (
          <HashLoader color="red" />
        ) : user ? (
          <div>
            <button
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
              className="flex items-center gap-3 cursor-pointer group bg-none border-none p-0"
            >
              <img
                src={
                  user?.photoURL ||
                  "https://img.icons8.com/?size=100&id=2952&format=png"
                }
                className="h-12 w-12 rounded-full border-2 border-purple-500 object-cover hover:border-orange-600 transition-all duration-300 shadow-sm"
                alt="Profile"
              />
              <div className="hidden lg:block text-left">
                <p className="text-sm font-semibold text-gray-700">
                  {user?.displayName || "User"}
                </p>
              </div>
            </button>

            <div
              className="rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-xl border border-gray-100 p-5 min-w-max backdrop-blur-sm"
              popover="auto"
              id="popover-1"
              style={
                {
                  positionAnchor: "--anchor-1",
                  positionArea: "bottom right",
                  margin: "12px 0 0 0",
                } /* as React.CSSProperties */
              }
            >
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-150">
                <img
                  src={
                    user?.photoURL ||
                    "https://img.icons8.com/?size=100&id=2952&format=png"
                  }
                  className="h-14 w-14 rounded-full border-2 border-purple-500 object-cover shadow-md"
                  alt="Profile"
                />
                <div className="flex-1">
                  <h2 className="text-base font-bold text-gray-800">
                    {user?.displayName || "No Name"}
                  </h2>
                  <p className="text-xs text-gray-500 break-all">
                    {user?.email || "No Email"}
                  </p>
                </div>
              </div>

              <button
                onClick={handleSignout}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <NavLink
            to={"/signIn-page"}
            className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer text-center"
          >
            Sign in
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
