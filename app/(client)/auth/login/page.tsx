"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // In prod: call NextAuth signIn
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setError("Please install dependencies and run db:push to enable authentication.");
  };

  return (
    <div className="min-h-screen bg-[#0F1C2E] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <span className="font-serif text-3xl font-semibold text-white block">Value Properties</span>
          <span className="text-xs text-[#C9A96E] tracking-[0.25em] uppercase">Client Portal</span>
        </div>

        <div className="bg-white p-8">
          <h1 className="font-serif text-2xl font-semibold text-[#0F1C2E] mb-6">Sign In</h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E]"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#0F1C2E] text-white py-3.5 font-semibold text-sm hover:bg-[#C9A96E] hover:text-[#0F1C2E] transition-colors disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
              {!loading && <ArrowRight size={15} />}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-[#C9A96E] hover:text-[#0F1C2E] font-medium">
              Register
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-white/40 text-xs hover:text-white/70 transition-colors">
            ← Back to Value Properties
          </Link>
        </div>
      </div>
    </div>
  );
}
