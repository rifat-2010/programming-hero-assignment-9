import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { HashLoader } from "react-spinners";



const Navbar = () => {
const {user, setUser, loading} = useContext(AuthContext);
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
    <div className=" bg-slate-100 py-2.5 border-b border-b-slate-300 md:w-11/12 mx-auto w-full ">
      <div className="flex items-center justify-between mx-10">
        {/* mobile device row reverse and some gap */}
        <div className="flex flex-row-reverse gap-5 md:gap-10">
        <figure className="flex gap-2">
            <img src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?semt=ais_hybrid&w=740&q=80" alt="" className="w-[50px] h-10"/>
         <h1 className="text-2xl font-bold">Toys Shop</h1>
        </figure>

      {/* mobile and md:device dropdown nav code */}
    <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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

          <ul id="navUl"
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white left-0 rounded-box mt-3 w-52 p-2 shadow-md"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about-us"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/blog-page"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/profile-page"}>My Profile</NavLink>
            </li>
           
          </ul>
        </div>
 </div>

        {/* lg device nav code */}
        <ul id="navUl" className="hidden md:hidden lg:flex  items-center gap-2 md:gap-5">
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
         
      {loading ? <HashLoader color="red"/> : user ?


      <div className="text-center space-y-3">
  {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
{/* For TSX uncomment the commented types below */}
<div className="flex gap-2 items-center">
<button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  Profile
</button>
  <img
    src={user?.photoURL || "https://img.icons8.com/?size=100&id=2952&format=png"}
    className="h-12 w-12 rounded-full border-2 border-orange-600 object-cover"
    alt=""
/>
</div>

<div className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm flex flex-col gap-3"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  

  {/* <p className="text-white/80">{user?.email}</p> */}
<h2 className="text-black text-xl font-semibold">{user?.displayName || 'No Name'}</h2>
<p className=" font-black">{user?.email || 'No Email'}</p>

  <button onClick={handleSignout} className="my-btn">
    Sign Out
  </button>
</div>
</div> :

  <NavLink to={'/signIn-page'} className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer text-center">
            Sign in
    </NavLink>
}

   
      </div>
    </div>
)};

export default Navbar;