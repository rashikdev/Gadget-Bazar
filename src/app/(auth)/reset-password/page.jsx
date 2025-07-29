import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm md:max-w-md bg-[#111] text-white rounded-2xl p-8 border border-zinc-800 shadow-xl ring-1 ring-purple-500/40">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-xl font-bold">Reset Password</h2>
          <p className="text-gray-400 text-sm">Enter your email to get a reset link</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="text-sm block mb-1">Email</label>
            <input
              type="email"
              placeholder="hi@example.com"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2 mt-2 bg-white text-black font-semibold rounded-full hover:opacity-90 transition"
          >
            <FaEnvelope />
            Send Reset Link
          </button>
        </form>
        <Link href="/login"
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-2 mt-8 bg-zinc-950 text-white font-semibold rounded-full hover:opacity-90 transition"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default page;
