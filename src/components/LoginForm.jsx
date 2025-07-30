"use client";
import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    toast.loading("Logging in...");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Logged in successfully!");
      toast.dismiss();
      form.reset();
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="text-sm block mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="hi@example.com"
          className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
      </div>
      <div>
        <label className="text-sm block mb-1">Password</label>
        <input
          type="password"
          name="password"
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
  );
};

export default LoginForm;
