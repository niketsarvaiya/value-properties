"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { getPropertyBySlug } from "@/lib/data";
import { ArrowRight, ArrowLeft, CheckCircle, Calendar, User, MessageSquare } from "lucide-react";
import Link from "next/link";

const STEPS = ["Your Details", "Visit Preferences", "Confirmation"];

export default function EnquirePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const property = getPropertyBySlug(slug);
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pan: "",
    preferredDate: "",
    preferredTime: "",
    requirements: "",
    funding: "self",
  });

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-[#0F1C2E]">Property not found.</p>
          <Link href="/properties" className="text-[#C9A96E] text-sm mt-4 block">← Back to Properties</Link>
        </div>
      </div>
    );
  }

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-[#C9A96E]/15 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-[#C9A96E]" />
          </div>
          <h1 className="font-serif text-4xl font-semibold text-[#0F1C2E] mb-4">Enquiry Received</h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Sreeja will personally review your enquiry for{" "}
            <strong className="text-[#0F1C2E]">{property.buildingName}</strong> and reach out
            within 2 business hours to confirm your site visit.
          </p>
          <div className="bg-white border border-[#C9A96E]/20 p-6 text-left mb-8 space-y-3">
            <h3 className="font-semibold text-[#0F1C2E] text-sm">What Happens Next</h3>
            {[
              "Sreeja reviews your enquiry",
              "Personal call to confirm visit details",
              "Private site visit at your chosen time",
              "Detailed consultation on the property",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-[#C9A96E]/20 text-[#C9A96E] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                {step}
              </div>
            ))}
          </div>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 bg-[#0F1C2E] text-white px-6 py-3 text-sm font-medium hover:bg-[#C9A96E] hover:text-[#0F1C2E] transition-colors"
          >
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Property context */}
        <div className="bg-[#0F1C2E] p-5 mb-8 flex items-center gap-4">
          <div className="w-1 h-12 bg-[#C9A96E]" />
          <div>
            <p className="text-[#C9A96E] text-xs tracking-widest uppercase">Enquiry For</p>
            <p className="font-serif text-xl font-semibold text-white">{property.title}</p>
            <p className="text-white/50 text-xs">{property.location} · {property.priceDisplay}</p>
          </div>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-2 mb-10">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-7 h-7 flex items-center justify-center text-xs font-bold shrink-0 ${i <= step ? "bg-[#C9A96E] text-[#0F1C2E]" : "bg-gray-200 text-gray-400"}`}>
                {i < step ? <CheckCircle size={14} /> : i + 1}
              </div>
              <span className={`text-xs hidden sm:block ${i === step ? "text-[#0F1C2E] font-semibold" : "text-gray-400"}`}>{s}</span>
              {i < STEPS.length - 1 && <div className={`flex-1 h-px ${i < step ? "bg-[#C9A96E]" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="bg-white border border-[#C9A96E]/20 p-8">
          {/* Step 1 */}
          {step === 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <User size={18} className="text-[#C9A96E]" />
                <h2 className="font-serif text-2xl font-semibold text-[#0F1C2E]">Your Details</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                  <input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Rajesh Malhotra"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Mobile Number *</label>
                  <input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 98000 00000"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                  <input
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    type="email"
                    placeholder="rajesh@example.com"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">PAN Number (Optional)</label>
                  <input
                    value={form.pan}
                    onChange={(e) => update("pan", e.target.value)}
                    placeholder="ABCDE1234F"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] bg-white"
                  />
                  <p className="text-xs text-gray-400 mt-1">Required for shortlisting and documentation. Kept confidential.</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Calendar size={18} className="text-[#C9A96E]" />
                <h2 className="font-serif text-2xl font-semibold text-[#0F1C2E]">Visit Preferences</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Preferred Visit Date *</label>
                  <input
                    type="date"
                    value={form.preferredDate}
                    onChange={(e) => update("preferredDate", e.target.value)}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Preferred Time *</label>
                  <select
                    value={form.preferredTime}
                    onChange={(e) => update("preferredTime", e.target.value)}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] bg-white"
                  >
                    <option value="">Select a time slot</option>
                    <option>10:00 AM – 12:00 PM</option>
                    <option>12:00 PM – 2:00 PM</option>
                    <option>2:00 PM – 4:00 PM</option>
                    <option>4:00 PM – 6:00 PM</option>
                    <option>Weekend Morning</option>
                    <option>Weekend Afternoon</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Funding Arrangement</label>
                  <select
                    value={form.funding}
                    onChange={(e) => update("funding", e.target.value)}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] bg-white"
                  >
                    <option value="self">Self-Funded</option>
                    <option value="loan">Bank Loan</option>
                    <option value="mix">Mix of Own Funds + Loan</option>
                    <option value="nri">NRI Remittance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Specific Requirements</label>
                  <textarea
                    value={form.requirements}
                    onChange={(e) => update("requirements", e.target.value)}
                    rows={4}
                    placeholder="Vastu compliance, specific floor preferences, family size, parking requirements, etc."
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] bg-white resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 2 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={18} className="text-[#C9A96E]" />
                <h2 className="font-serif text-2xl font-semibold text-[#0F1C2E]">Confirm Your Enquiry</h2>
              </div>
              <div className="bg-[#F8F5F0] p-6 space-y-4 mb-6">
                <h3 className="font-semibold text-[#0F1C2E] text-sm mb-3">Summary</h3>
                {[
                  { label: "Property", value: property.title },
                  { label: "Name", value: form.name },
                  { label: "Phone", value: form.phone },
                  { label: "Email", value: form.email },
                  { label: "Preferred Date", value: form.preferredDate },
                  { label: "Preferred Time", value: form.preferredTime },
                  { label: "Funding", value: form.funding },
                ].map((row) => row.value && (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span className="text-gray-400">{row.label}</span>
                    <span className="text-[#0F1C2E] font-medium text-right max-w-xs">{row.value}</span>
                  </div>
                ))}
                {form.requirements && (
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-gray-400 text-xs mb-1">Requirements</p>
                    <p className="text-[#0F1C2E] text-sm">{form.requirements}</p>
                  </div>
                )}
              </div>

              <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 p-4 text-xs text-gray-600">
                By submitting this enquiry, you consent to Sreeja contacting you regarding this property. Your details are kept strictly confidential.
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
            {step > 0 ? (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0F1C2E] transition-colors"
              >
                <ArrowLeft size={14} /> Back
              </button>
            ) : (
              <div />
            )}

            {step < STEPS.length - 1 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={step === 0 && (!form.name || !form.phone || !form.email)}
                className="flex items-center gap-2 bg-[#0F1C2E] text-white px-6 py-3 text-sm font-medium hover:bg-[#C9A96E] hover:text-[#0F1C2E] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="flex items-center gap-2 bg-[#C9A96E] text-[#0F1C2E] px-8 py-3 text-sm font-semibold hover:bg-[#0F1C2E] hover:text-white transition-colors disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Enquiry"}
                {!submitting && <CheckCircle size={14} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
