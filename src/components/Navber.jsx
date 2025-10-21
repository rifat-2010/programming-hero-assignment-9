import { Link, NavLink } from "react-router";



const Navbar = () => {


  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 container mx-auto">
      <div className="flex items-center justify-between">
        <figure className="flex gap-2">
            <img src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?semt=ais_hybrid&w=740&q=80" alt="" className="w-[50px]"/>
         <h1 className="text-2xl font-bold">Toys Shop</h1>
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"}>About US</NavLink>
          </li>
          
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
            
          
        </ul>

  
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            Sign in
          </button>
   
      </div>
    </div>
)};

export default Navbar;