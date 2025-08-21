"use client";
import React from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";

const SocialLoginButtons = ({ label = "Continue with Google" }) => {
  const handleGoogleLogin = () => {
    toast.error("This feature is not available yet. Please use credentials.");
  };
  return (
    <div className="space-y-3 mt-6">
      <div className="flex items-center gap-5">
        <div className="flex-grow h-px bg-gray-400"></div>
        <span className="text-xl">or</span>
        <div className="flex-grow h-px bg-gray-400"></div>
      </div>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-3 py-2 w-full border border-gray-600 rounded-full hover:bg-white hover:text-black transition duration-300"
      >
        <span className="text-lg">
          <FaGoogle />
        </span>
        {label}
      </button>
      <p className="text-xs text-center mt-6 text-gray-500">
        By signing in, you agree to our{" "}
        <a href="#" className="font-semibold underline">
          Privacy Policy
        </a>
        ,{" "}
        <a href="#" className="font-semibold underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="font-semibold underline">
          Cookie Policy
        </a>
        .
      </p>
    </div>
  );
};

export default SocialLoginButtons;
