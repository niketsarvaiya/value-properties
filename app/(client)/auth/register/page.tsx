"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#0F1C2E] flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-[#C9A96E] flex items-center justify-center mx-auto mb-6">
            <span className="font-serif text-3xl text-[#0F1C2E]">✓</span>
          </div>
          <h2 className="font-serif text-3xl text-white mb-4">Welcome</h2>
          <p className="text-white/60 text-sm mb-6">Your account has been created. Please sign in to continue.</p>
          <Link href="/auth/login" className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#0F1C2E] px-6 py-3 font-semibold text-sm">
            Sign In <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F1C2E] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <span className="font-serif text-3xl font-semibold text-white block">Value Properties</span>
          <span className="text-xs text-[#C9A96E] tracking-[0.25em] uppercase">Create Account</span>
        </div>

        <div className="bg-white p-8">
          <h1 className="font-serif text-2xl font-semibold text-[#0F1C2E] mb-6">Register</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { key: "name", label: "Full Name", type: "text", placeholder: "Rajesh Malhotra" },
              { key: "email", label: "Email", type: "email", placeholder: "rajesh@example.com" },
              { key: "phone", label: "Mobile Number", type: "tel", placeholder: "+91 98000 00000" },
              { key: "password", label: "Password", type: "password", placeholder: "Min. 8 characters" },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">{field.label}</label>
                <input
                  type={field.type}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => update(field.key, e.target.value)}
                  required
                  placeholder={field.placeholder}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E]"
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#0F1C2E] text-white py-3.5 font-semibold text-sm hover:bg-[#C9A96E] hover:text-[#0F1C2E] transition-colors disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Account"}
              {!loading && <ArrowRight size={15} />}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#C9A96E] hover:text-[#0F1C2E] font-medium">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
