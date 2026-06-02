import Link from "next/link";
import { FileText, Calendar, ArrowRight, Plus } from "lucide-react";
import StatusBadge from "@/components/shared/StatusBadge";
import PageHeader from "@/components/shared/PageHeader";

// In a real app this would fetch from DB using auth session
const MOCK_ENQUIRIES = [
  {
    id: "enq-1",
    propertyName: "Lodha Malabar — Sea-Facing Residence",
    propertySlug: "lodha-malabar-walkeshwar",
    status: "VISIT_SCHEDULED" as const,
    visitDate: "2026-06-10",
    visitTime: "10:00 AM – 12:00 PM",
    createdAt: "2026-06-01T10:00:00Z",
  },
  {
    id: "enq-2",
    propertyName: "Oberoi Three Sixty West — Ultra-Luxury Residence",
    propertySlug: "oberoi-three-sixty-west-worli",
    status: "CONTACTED" as const,
    visitDate: null,
    visitTime: null,
    createdAt: "2026-05-28T14:00:00Z",
  },
];

export default function DashboardPage() {
  return (
    <div className="bg-[#F8F5F0] min-h-screen">
      <div className="bg-[#0F1C2E] py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <PageHeader
            eyebrow="Client Portal"
            title="My Enquiries"
            subtitle="Track your site visit bookings and enquiry status."
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {MOCK_ENQUIRIES.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#C9A96E]/20">
            <FileText size={40} className="text-[#C9A96E]/40 mx-auto mb-4" />
            <p className="font-serif text-2xl text-[#0F1C2E] mb-2">No Enquiries Yet</p>
            <p className="text-gray-500 text-sm mb-8">Start by exploring properties and submitting an enquiry.</p>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#0F1C2E] px-6 py-3 text-sm font-semibold hover:bg-[#0F1C2E] hover:text-white transition-colors"
            >
              <Plus size={15} />
              Explore Properties
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {MOCK_ENQUIRIES.map((enq) => (
              <div key={enq.id} className="bg-white border border-[#C9A96E]/20 p-6 hover:border-[#C9A96E]/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <StatusBadge status={enq.status} />
                      <span className="text-xs text-gray-400">
                        Submitted {new Date(enq.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#0F1C2E] mb-1">{enq.propertyName}</h3>

                    {enq.visitDate && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                        <Calendar size={14} className="text-[#C9A96E]" />
                        <span>
                          Visit: {new Date(enq.visitDate).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })}
                          {enq.visitTime && ` · ${enq.visitTime}`}
                        </span>
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/dashboard/enquiry/${enq.id}`}
                    className="shrink-0 flex items-center gap-1 text-xs text-[#C9A96E] hover:text-[#0F1C2E] font-medium transition-colors"
                  >
                    Details <ArrowRight size={12} />
                  </Link>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex gap-4">
                  <Link
                    href={`/properties/${enq.propertySlug}`}
                    className="text-xs text-gray-400 hover:text-[#C9A96E] transition-colors"
                  >
                    View Property →
                  </Link>
                  <a
                    href="tel:+919820000000"
                    className="text-xs text-gray-400 hover:text-[#C9A96E] transition-colors"
                  >
                    Call Sreeja →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 bg-[#0F1C2E] p-6 flex items-center justify-between">
          <div>
            <p className="font-serif text-lg font-semibold text-white">Looking for another property?</p>
            <p className="text-white/50 text-sm">Sreeja is available for private consultations.</p>
          </div>
          <Link
            href="/explore"
            className="shrink-0 flex items-center gap-2 bg-[#C9A96E] text-[#0F1C2E] px-5 py-2.5 text-sm font-semibold hover:bg-white transition-colors"
          >
            Explore <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
