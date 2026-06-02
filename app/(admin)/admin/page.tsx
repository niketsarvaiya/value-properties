import { Building2, FileText, Users, TrendingUp } from "lucide-react";
import { PROPERTIES } from "@/lib/data";

const MOCK_STATS = {
  totalProperties: PROPERTIES.filter((p) => p.status === "active").length,
  activeEnquiries: 7,
  visitsScheduled: 3,
  leadsThisWeek: 5,
};

const RECENT_ENQUIRIES = [
  { id: "e1", name: "Vikram Malhotra", property: "Oberoi Three Sixty West", status: "VISIT_SCHEDULED", date: "2026-06-01" },
  { id: "e2", name: "Ananya Sharma", property: "Raheja Imperia", status: "CONTACTED", date: "2026-05-28" },
  { id: "e3", name: "Sanjay Gupta", property: "Lodha World One", status: "NEW", date: "2026-05-31" },
  { id: "e4", name: "Meera Joshi", property: "Maker Tower", status: "CONTACTED", date: "2026-05-30" },
];

const STATUS_COLORS: Record<string, string> = {
  NEW: "bg-blue-100 text-blue-700",
  CONTACTED: "bg-yellow-100 text-yellow-700",
  VISIT_SCHEDULED: "bg-purple-100 text-purple-700",
  COMPLETED: "bg-green-100 text-green-700",
  CLOSED: "bg-gray-100 text-gray-500",
};

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <p className="text-xs text-[#C9A96E] tracking-widest uppercase mb-1">Overview</p>
        <h1 className="font-serif text-3xl font-semibold text-[#0F1C2E]">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">Value Properties — Admin Portal</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {[
          { icon: Building2, label: "Active Properties", value: MOCK_STATS.totalProperties, color: "text-navy" },
          { icon: FileText, label: "Active Enquiries", value: MOCK_STATS.activeEnquiries, color: "text-purple-600" },
          { icon: TrendingUp, label: "Visits Scheduled", value: MOCK_STATS.visitsScheduled, color: "text-[#C9A96E]" },
          { icon: Users, label: "Leads This Week", value: MOCK_STATS.leadsThisWeek, color: "text-green-600" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon size={20} className={stat.color} />
            </div>
            <p className="font-serif text-4xl font-semibold text-[#0F1C2E] mb-1">{stat.value}</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Enquiries */}
      <div className="bg-white border border-gray-200">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-[#0F1C2E]">Recent Enquiries</h2>
          <a href="/admin/enquiries" className="text-xs text-[#C9A96E] hover:text-[#0F1C2E] font-medium">View All →</a>
        </div>
        <div className="divide-y divide-gray-100">
          {RECENT_ENQUIRIES.map((e) => (
            <div key={e.id} className="px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-medium text-[#0F1C2E] text-sm">{e.name}</p>
                <p className="text-xs text-gray-400">{e.property}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className={`badge text-[10px] ${STATUS_COLORS[e.status]}`}>{e.status.replace("_", " ")}</span>
                <span className="text-xs text-gray-400 hidden sm:block">
                  {new Date(e.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Properties quick view */}
      <div className="mt-6 bg-white border border-gray-200">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-[#0F1C2E]">Properties</h2>
          <a href="/admin/properties" className="text-xs text-[#C9A96E] hover:text-[#0F1C2E] font-medium">Manage →</a>
        </div>
        <div className="divide-y divide-gray-100">
          {PROPERTIES.slice(0, 5).map((p) => (
            <div key={p.id} className="px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-medium text-[#0F1C2E] text-sm">{p.buildingName}</p>
                <p className="text-xs text-gray-400">{p.location} · {p.configuration.toUpperCase()}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-sm font-medium text-[#0F1C2E]">{p.priceDisplay}</span>
                {p.hotProperty && <span className="badge bg-[#C9A96E]/20 text-[#C9A96E]">Hot</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
