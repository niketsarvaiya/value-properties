"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Building2, FileText, Users, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/properties", label: "Properties", icon: Building2 },
  { href: "/admin/enquiries", label: "Enquiries", icon: FileText },
  { href: "/admin/leads", label: "Leads", icon: Users },
];

export default function AdminSidebar() {
  const path = usePathname();

  return (
    <aside className="w-64 bg-[#0F1C2E] min-h-screen flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/10">
        <span className="font-serif text-lg font-semibold text-white block">Value Properties</span>
        <span className="text-[10px] text-[#C9A96E] tracking-[0.2em] uppercase">Admin Portal</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = path === href || (href !== "/admin" && path.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 text-sm transition-colors",
                active
                  ? "bg-[#C9A96E] text-[#0F1C2E] font-semibold"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon size={16} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Sign out */}
      <div className="px-4 py-4 border-t border-white/10">
        <Link
          href="/admin-login"
          className="flex items-center gap-3 px-3 py-2.5 text-sm text-white/40 hover:text-white transition-colors"
        >
          <LogOut size={16} />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
