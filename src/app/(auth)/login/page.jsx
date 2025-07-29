import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import SocialLoginButtons from "../components/SocialLoginButton";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm md:max-w-md bg-[#111] text-white rounded-2xl p-8 border border-zinc-800 shadow-xl ring-1 ring-purple-500/40">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-xl font-bold">Welcome Back</h2>
          <p className="text-gray-400 text-sm">Log in to your account.</p>
        </div>

        <div className="flex justify-center mb-6 space-x-5">
          <button className="px-4 py-1 rounded-md font-semibold text-sm bg-white text-black">
            Login
          </button>
          <Link
            href="/register"
            className="px-4 py-1 rounded-md font-semibold text-sm bg-zinc-900 text-white"
          >
            Sign Up
          </Link>
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
          <div>
            <label className="text-sm block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="accent-purple-500" />
              <span>Remember me</span>
            </label>
            <Link href="/reset-password" className="hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2 mt-2 bg-white text-black font-semibold rounded-full hover:opacity-90 transition"
          >
            <FaEnvelope />
            Login
          </button>
        </form>
        <SocialLoginButtons></SocialLoginButtons>
      </div>
    </div>
  );
};

export default LoginPage;
