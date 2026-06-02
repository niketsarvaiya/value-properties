"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Post to /api/leads
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, source: "contact_page" }),
    }).catch(() => {});
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F5F0]">
      {/* Header */}
      <div className="bg-[#0F1C2E] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <PageHeader
            eyebrow="Get in Touch"
            title="Contact Sreeja"
            subtitle="For private consultations, property enquiries, or to schedule a site visit."
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[#0F1C2E] mb-8">How to Reach Us</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C9A96E]/15 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#C9A96E]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F1C2E] mb-1">Call Sreeja</p>
                  <a href="tel:+919820000000" className="text-[#C9A96E] hover:text-[#0F1C2E] transition-colors">+91 98200 00000</a>
                  <p className="text-gray-400 text-xs mt-1">Mon – Sat, 10 AM – 7 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C9A96E]/15 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#C9A96E]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F1C2E] mb-1">Email</p>
                  <a href="mailto:sreeja@valueproperties.in" className="text-[#C9A96E] hover:text-[#0F1C2E] transition-colors">sreeja@valueproperties.in</a>
                  <p className="text-gray-400 text-xs mt-1">Response within 2 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C9A96E]/15 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#C9A96E]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F1C2E] mb-1">Office</p>
                  <p className="text-gray-600 text-sm">By appointment only<br />South Mumbai</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#0F1C2E] p-8">
              <p className="font-serif text-2xl text-white mb-3">A Note from Sreeja</p>
              <p className="text-white/70 text-sm leading-relaxed italic">
                "I believe in showing you only what you will love. No wasted visits, no generic suggestions.
                Tell me what you are looking for, and I will find it — or tell you honestly if it does not exist in this market."
              </p>
              <p className="text-[#C9A96E] text-sm font-medium mt-4">— Sreeja</p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="text-center py-16 bg-white border border-[#C9A96E]/20 px-8">
                <CheckCircle size={48} className="text-[#C9A96E] mx-auto mb-5" />
                <h3 className="font-serif text-2xl font-semibold text-[#0F1C2E] mb-3">Thank You</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Sreeja will personally review your message and reach out within 2 hours during business hours.
                </p>
              </div>
            ) : (
              <div className="bg-white border border-[#C9A96E]/20 p-8">
                <h2 className="font-serif text-2xl font-semibold text-[#0F1C2E] mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "Rajesh Malhotra" },
                    { key: "phone", label: "Mobile Number", type: "tel", placeholder: "+91 98000 00000" },
                    { key: "email", label: "Email", type: "email", placeholder: "rajesh@example.com" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">{f.label}</label>
                      <input
                        type={f.type}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => update(f.key, e.target.value)}
                        required
                        placeholder={f.placeholder}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E]"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Your Requirements</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={5}
                      placeholder="Tell Sreeja about your ideal home — location, configuration, budget, timeline..."
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C9A96E] text-[#0F1C2E] py-3.5 font-semibold text-sm hover:bg-[#0F1C2E] hover:text-white transition-colors disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
