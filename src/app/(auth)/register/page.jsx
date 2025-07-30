"use client";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import SocialLoginButtons from "../components/SocialLoginButton";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { name, email, password };
    newUser.role = "user";
    newUser.createdAt = new Date().toISOString();

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      console.log(data);

      if (res.ok && data.insertedId) {
        alert("✅ User registered successfully!");
        form.reset();
        router.push("/login");
      } else {
        alert(`❌ Registration failed: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.log("Fetch error:", error);
      alert("❌ Something went wrong.");
    }
  };

  console.log();
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm md:max-w-md bg-[#111] text-white rounded-2xl p-8 border border-zinc-800 shadow-xl ring-1 ring-purple-500/40">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-xl font-bold">Welcome to Gadget Bazar</h2>
          <p className="text-gray-400 text-sm">Create your account</p>
        </div>

        <div className="flex justify-center mb-6 space-x-4">
          <Link
            href="/login"
            className="px-4 py-1 rounded-md font-semibold text-sm bg-zinc-900 text-white"
          >
            Login
          </Link>
          <button className="px-4 py-1 rounded-md font-semibold text-sm bg-white text-black">
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-sm block mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
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
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2 mt-2 bg-white text-black font-semibold rounded-full hover:opacity-90 transition"
          >
            <FaEnvelope />
            Register
          </button>
        </form>

        <SocialLoginButtons></SocialLoginButtons>
      </div>
    </div>
  );
};

export default RegisterPage;
