"use client";

import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);
    // TODO: add your register logic here
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0] flex flex-col">
      {/* ── Main ── */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm w-full max-w-xl px-12 py-12">
          {/* Title */}
          <h1 className="text-[#2d2d2d] text-3xl font-bold text-center mb-6 tracking-tight">
            Register your account
          </h1>

          {/* Divider */}
          <hr className="border-t border-gray-200 mb-8" />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-[#2d2d2d] text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full bg-[#f5f5f5] rounded-lg px-4 py-3.5 text-sm text-[#333] placeholder:text-[#bbb] outline-none border-2 border-transparent focus:border-[#3d3d3d] transition-colors"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-[#2d2d2d] text-sm font-bold mb-2">
                Photo URL
              </label>
              <input
                type="url"
                name="photoURL"
                value={form.photoURL}
                onChange={handleChange}
                placeholder="Enter your photo URL"
                className="w-full bg-[#f5f5f5] rounded-lg px-4 py-3.5 text-sm text-[#333] placeholder:text-[#bbb] outline-none border-2 border-transparent focus:border-[#3d3d3d] transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#2d2d2d] text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="w-full bg-[#f5f5f5] rounded-lg px-4 py-3.5 text-sm text-[#333] placeholder:text-[#bbb] outline-none border-2 border-transparent focus:border-[#3d3d3d] transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[#2d2d2d] text-sm font-bold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full bg-[#f5f5f5] rounded-lg px-4 py-3.5 pr-12 text-sm text-[#333] placeholder:text-[#bbb] outline-none border-2 border-transparent focus:border-[#3d3d3d] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bbb] hover:text-[#555] transition-colors"
                >
                  {showPassword ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center gap-3 pt-1">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 rounded border-2 border-gray-300 accent-[#3d3d3d] cursor-pointer flex-shrink-0"
              />
              <label
                htmlFor="terms"
                className="text-sm text-[#555] cursor-pointer select-none"
              >
                Accept{" "}
                <Link
                  href="/terms"
                  className="font-bold text-[#2d2d2d] hover:underline"
                >
                  Term &amp; Conditions
                </Link>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !agreed}
              className="w-full bg-[#3d3d3d] text-white font-bold text-sm py-4 rounded-lg hover:bg-[#222] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
            >
              {loading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Registering...
                </>
              ) : (
                "Register"
              )}
            </button>
          </form>

          {/* Login link */}
          <p className="text-center text-sm text-[#777] font-semibold mt-6">
            Already Have An Account?{" "}
            <Link
              href="/auth/login"
              className="text-[#e05c5c] font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
