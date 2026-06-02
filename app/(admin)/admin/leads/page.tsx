const MOCK_LEADS = [
  { id: "l1", name: "Priya Nair", phone: "+91 99001 23456", email: "priya.n@example.com", message: "Looking for 3 BHK in Worli under ₹15 Cr", source: "contact_page", createdAt: "2026-06-02" },
  { id: "l2", name: "Arjun Kapoor", phone: "+91 98765 43210", email: "arjun.k@example.com", message: "NRI buyer. Interested in Malabar Hill. Budget: ₹25–35 Cr", source: "contact_page", createdAt: "2026-06-01" },
  { id: "l3", name: "Sunita Mehta", phone: "+91 97654 12345", email: null, message: "Called about penthouse options", source: "phone_call", createdAt: "2026-05-31" },
  { id: "l4", name: "Deepak Agarwal", phone: "+91 96543 09876", email: "deepak.a@example.com", message: "End-user buyer. Cuffe Parade or Colaba. 3 BHK.", source: "contact_page", createdAt: "2026-05-30" },
];

const SOURCE_LABELS: Record<string, string> = {
  contact_page: "Contact Form",
  phone_call: "Phone Call",
  website: "Website",
  referral: "Referral",
};

export default function AdminLeadsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <p className="text-xs text-[#C9A96E] tracking-widest uppercase mb-1">Admin</p>
        <h1 className="font-serif text-3xl font-semibold text-[#0F1C2E]">Leads</h1>
        <p className="text-gray-400 text-sm mt-1">Unqualified inbound enquiries from the website.</p>
      </div>

      <div className="bg-white border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Source</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {MOCK_LEADS.map((l) => (
              <tr key={l.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-[#0F1C2E]">{l.name}</td>
                <td className="px-4 py-4">
                  <p className="text-gray-600 text-xs">{l.phone}</p>
                  {l.email && <p className="text-gray-400 text-xs">{l.email}</p>}
                </td>
                <td className="px-4 py-4 max-w-xs">
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{l.message}</p>
                </td>
                <td className="px-4 py-4">
                  <span className="badge bg-gray-100 text-gray-500 text-[10px]">
                    {SOURCE_LABELS[l.source] ?? l.source}
                  </span>
                </td>
                <td className="px-4 py-4 text-xs text-gray-400">
                  {new Date(l.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                </td>
                <td className="px-4 py-4">
                  <button className="text-xs text-[#C9A96E] hover:text-[#0F1C2E] font-medium">Convert</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
