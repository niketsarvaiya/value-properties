import StatusBadge from "@/components/shared/StatusBadge";

const MOCK_ENQUIRIES = [
  { id: "e1", name: "Vikram Malhotra", phone: "+91 98100 12345", email: "vikram.m@example.com", property: "Oberoi Three Sixty West", status: "VISIT_SCHEDULED" as const, visitDate: "2026-06-10", createdAt: "2026-06-01" },
  { id: "e2", name: "Ananya Sharma", phone: "+91 98200 67890", email: "ananya.s@example.com", property: "Raheja Imperia", status: "CONTACTED" as const, visitDate: null, createdAt: "2026-05-28" },
  { id: "e3", name: "Sanjay Gupta", phone: "+91 98450 23456", email: "sanjay.g@example.com", property: "Lodha World One", status: "NEW" as const, visitDate: null, createdAt: "2026-05-31" },
  { id: "e4", name: "Meera Joshi", phone: "+91 99870 78901", email: "meera.j@example.com", property: "Maker Tower", status: "CONTACTED" as const, visitDate: null, createdAt: "2026-05-30" },
  { id: "e5", name: "Rajesh Patel", phone: "+91 97690 34567", email: "rajesh.p@example.com", property: "Lodha Malabar", status: "COMPLETED" as const, visitDate: "2026-05-25", createdAt: "2026-05-20" },
];

export default function AdminEnquiriesPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <p className="text-xs text-[#C9A96E] tracking-widest uppercase mb-1">Admin</p>
        <h1 className="font-serif text-3xl font-semibold text-[#0F1C2E]">Enquiries</h1>
      </div>

      {/* Summary chips */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {[
          { label: "All", count: MOCK_ENQUIRIES.length },
          { label: "New", count: MOCK_ENQUIRIES.filter((e) => e.status === "NEW").length },
          { label: "Visit Scheduled", count: MOCK_ENQUIRIES.filter((e) => e.status === "VISIT_SCHEDULED").length },
          { label: "Completed", count: MOCK_ENQUIRIES.filter((e) => e.status === "COMPLETED").length },
        ].map((chip) => (
          <div key={chip.label} className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 text-sm">
            <span className="text-gray-600">{chip.label}</span>
            <span className="font-bold text-[#0F1C2E]">{chip.count}</span>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Client</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Property</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Visit Date</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Submitted</th>
              <th className="px-4 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {MOCK_ENQUIRIES.map((e) => (
              <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-medium text-[#0F1C2E]">{e.name}</p>
                  <p className="text-xs text-gray-400">{e.phone}</p>
                </td>
                <td className="px-4 py-4 text-gray-600 max-w-xs">
                  <p className="truncate">{e.property}</p>
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={e.status} />
                </td>
                <td className="px-4 py-4 text-gray-500">
                  {e.visitDate
                    ? new Date(e.visitDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
                    : <span className="text-gray-300">—</span>}
                </td>
                <td className="px-4 py-4 text-gray-400 text-xs">
                  {new Date(e.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                </td>
                <td className="px-4 py-4">
                  <button className="text-xs text-[#C9A96E] hover:text-[#0F1C2E] font-medium">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
