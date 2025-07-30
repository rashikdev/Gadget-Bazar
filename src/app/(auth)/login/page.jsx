import Link from "next/link";
import SocialLoginButtons from "../components/SocialLoginButton";
import LoginForm from "@/components/LoginForm";

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
            Register
          </Link>
        </div>

        {/* Form */}
        <LoginForm></LoginForm>
        <SocialLoginButtons></SocialLoginButtons>
      </div>
    </div>
  );
};

export default LoginPage;
