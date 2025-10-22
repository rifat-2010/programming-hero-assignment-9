import React, { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const googlePovider = new GoogleAuthProvider();


const SignIn = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  const emailRefHuk = useRef(null)

  // SignIn function
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ email, password });

    
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user)
        toast.success("Signup successful");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };


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


// GoogleSignIn function
const handleGoogleSignIn = () => {
  signInWithPopup(auth, googlePovider)
   .then((res) => {
      // setUser(null); 
      setUser(res.user)
      toast.success("GoogleSignIn successful");
    })
    .catch((err) => {
      toast.error(err.message);
    });
}



// reset password - clicked by forget password text
 const handleForgetPassword = () => {
  const email = emailRefHuk.current.value;

  if (!email) {
    toast.error("Please enter your email first!");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("Check your email to reset your password!");
    })
    .catch((err) => {
      toast.error(err.message);
    });
};


console.log(user)

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* page title */}
      <title>SignIn-Page</title>

      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        { user ? 
        
    (<div className="text-center space-y-3">
  <img
    src={user?.photoURL || "https://via.placeholder.com/88"}
    className="h-20 w-20 rounded-full mx-auto"
    alt=""
  />

  <h2 className="text-xl font-semibold">{user?.displayName}</h2>
  <p className="text-white/80">{user?.email}</p>
  <button onClick={handleSignout} className="my-btn">
    Sign Out
  </button>
</div>) :  



(<form onSubmit={handleSignin} className="space-y-5">
            <h2 className="text-2xl font-semibold mb-2 text-center text-white">
              LogIn Page
            </h2>

            <div>
              <label className="block text-sm mb-1 text-white font-bold text-[17px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                ref={emailRefHuk}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-1  text-white font-bold text-[17px]">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[8px] top-[36px] cursor-pointer z-50"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <button
            onClick={handleForgetPassword}
              className="hover:underline cursor-pointer hover:text-white
                  font-semibold"
              type="button"
            >
              Forget password?
            </button>

            <button
              type="submit"
              className="m-2 my-btn font-semibold hover:underline hover:text-white
  "
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px w-16 bg-white/30"></div>
              <span className="text-sm text-white/70">or</span>
              <div className="h-px w-16 bg-white/30"></div>
            </div>

            {/* Google Signin */}
            <button
            onClick={handleGoogleSignIn}
              type="button"
              className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <p className="text-center text-sm text-white/80 mt-3">
              Don’t have an account?{" "}
              <Link
                to="/signUp-page"
                className="text-pink-300 hover:text-white underline"
              >
                Sign up
              </Link>
            </p>
      </form>)}


      </div>
    </div>
  );
};

export default SignIn;
