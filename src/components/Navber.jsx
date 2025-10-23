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
        <figure className="flex gap-2">
            <img src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?semt=ais_hybrid&w=740&q=80" alt="" className="w-[50px]"/>
         <h1 className="text-2xl font-bold">Toys Shop</h1>
        </figure>
        <ul id="navUl" className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
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
<h2 className="text-black text-xl font-semibold">{user?.displayName}</h2>
<p className=" font-black">{user?.email}</p>

  <button onClick={handleSignout} className="my-btn">
    Sign Out
  </button>
</div>
</div> :

  <NavLink className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer" to={'/signIn-page'}>
            Sign in
    </NavLink>
}

   
      </div>
    </div>
)};

export default Navbar;