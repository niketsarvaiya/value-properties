import { cn } from "@/lib/utils";

type Status = "NEW" | "CONTACTED" | "VISIT_SCHEDULED" | "COMPLETED" | "CLOSED";

const STATUS_CONFIG: Record<Status, { label: string; className: string }> = {
  NEW: { label: "New", className: "bg-blue-50 text-blue-700 border border-blue-200" },
  CONTACTED: { label: "Contacted", className: "bg-yellow-50 text-yellow-700 border border-yellow-200" },
  VISIT_SCHEDULED: { label: "Visit Scheduled", className: "bg-purple-50 text-purple-700 border border-purple-200" },
  COMPLETED: { label: "Completed", className: "bg-green-50 text-green-700 border border-green-200" },
  CLOSED: { label: "Closed", className: "bg-gray-50 text-gray-500 border border-gray-200" },
};

export default function StatusBadge({ status }: { status: Status }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.NEW;
  return (
    <span className={cn("badge text-[10px]", config.className)}>
      {config.label}
    </span>
  );
}
