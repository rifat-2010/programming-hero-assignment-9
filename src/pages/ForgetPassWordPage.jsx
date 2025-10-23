import React from "react";
import { useRef } from "react";
import { useLocation } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const ForgetPassWordPage = () => {
  const emailRef = useRef();
const location = useLocation();
const passedEmail = location.state?.email || "nonooooooo";
console.log(passedEmail);


  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        window.location.href = "https://mail.google.com"; // Gmail এ redirect
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
        {/* page title */}
        <title>Forget-password-Page</title>
      <form
        onSubmit={handleResetPassword}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Reset Password
        </h2>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Email Address
          </label>
          <input
            ref={emailRef}
            defaultValue={passedEmail}
            type="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgetPassWordPage;
