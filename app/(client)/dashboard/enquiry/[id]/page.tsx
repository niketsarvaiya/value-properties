import Link from "next/link";
import { ArrowLeft, Calendar, Phone, FileText } from "lucide-react";
import StatusBadge from "@/components/shared/StatusBadge";

const MOCK_ENQUIRY = {
  id: "enq-1",
  propertyName: "Lodha Malabar — Sea-Facing Residence",
  propertySlug: "lodha-malabar-walkeshwar",
  status: "VISIT_SCHEDULED" as const,
  visitDate: "2026-06-10",
  visitTime: "10:00 AM – 12:00 PM",
  message: "Looking for a sea-facing 4 BHK. Vastu preferred.",
  createdAt: "2026-06-01T10:00:00Z",
  updatedAt: "2026-06-02T09:00:00Z",
};

export default async function EnquiryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const enquiry = MOCK_ENQUIRY; // In prod: fetch by id from DB

  if (!enquiry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl">Enquiry not found.</p>
          <Link href="/dashboard" className="text-[#C9A96E] text-sm mt-4 block">← Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F5F0] min-h-screen">
      <div className="bg-[#0F1C2E] py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/dashboard" className="flex items-center gap-2 text-white/50 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft size={14} /> My Enquiries
          </Link>
          <div className="flex items-start gap-3">
            <StatusBadge status={enquiry.status} />
          </div>
          <h1 className="font-serif text-3xl font-semibold text-white mt-2">{enquiry.propertyName}</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        {/* Visit Info */}
        {enquiry.visitDate && (
          <div className="bg-white border border-[#C9A96E]/30 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={16} className="text-[#C9A96E]" />
              <h2 className="font-semibold text-[#0F1C2E]">Scheduled Site Visit</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Date</p>
                <p className="font-medium text-[#0F1C2E]">
                  {new Date(enquiry.visitDate).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Time</p>
                <p className="font-medium text-[#0F1C2E]">{enquiry.visitTime}</p>
              </div>
            </div>
          </div>
        )}

        {/* Enquiry details */}
        <div className="bg-white border border-[#C9A96E]/20 p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={16} className="text-[#C9A96E]" />
            <h2 className="font-semibold text-[#0F1C2E]">Enquiry Details</h2>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Enquiry ID</span>
              <span className="text-[#0F1C2E] font-mono text-xs">{enquiry.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Submitted</span>
              <span className="text-[#0F1C2E]">{new Date(enquiry.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Last Updated</span>
              <span className="text-[#0F1C2E]">{new Date(enquiry.updatedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
            </div>
            {enquiry.message && (
              <div className="pt-3 border-t border-gray-100">
                <p className="text-gray-400 text-xs mb-1">Your Requirements</p>
                <p className="text-[#0F1C2E]">{enquiry.message}</p>
              </div>
            )}
          </div>
        </div>

        {/* Status timeline */}
        <div className="bg-white border border-[#C9A96E]/20 p-6">
          <h2 className="font-semibold text-[#0F1C2E] mb-5">Status Timeline</h2>
          <div className="space-y-4">
            {[
              { label: "Enquiry Received", done: true, date: "1 Jun 2026" },
              { label: "Sreeja Contacted You", done: true, date: "1 Jun 2026" },
              { label: "Site Visit Scheduled", done: enquiry.status === "VISIT_SCHEDULED" || enquiry.status === "COMPLETED", date: "2 Jun 2026" },
              { label: "Site Visit Completed", done: enquiry.status === "COMPLETED", date: "" },
              { label: "Negotiation & Closing", done: false, date: "" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className={`w-4 h-4 rounded-full mt-0.5 shrink-0 ${item.done ? "bg-[#C9A96E]" : "border-2 border-gray-200"}`} />
                <div className="flex-1 flex justify-between items-center">
                  <span className={`text-sm ${item.done ? "text-[#0F1C2E] font-medium" : "text-gray-400"}`}>{item.label}</span>
                  {item.date && <span className="text-xs text-gray-400">{item.date}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/properties/${enquiry.propertySlug}`}
            className="flex-1 text-center bg-[#0F1C2E] text-white py-3 text-sm font-medium hover:bg-[#C9A96E] hover:text-[#0F1C2E] transition-colors"
          >
            View Property
          </Link>
          <a
            href="tel:+919820000000"
            className="flex-1 flex items-center justify-center gap-2 border border-[#0F1C2E] text-[#0F1C2E] py-3 text-sm font-medium hover:bg-[#0F1C2E] hover:text-white transition-colors"
          >
            <Phone size={14} />
            Call Sreeja
          </a>
        </div>
      </div>
    </div>
  );
}
