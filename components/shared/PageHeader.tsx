interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function PageHeader({ eyebrow, title, subtitle, centered }: PageHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-xs text-[#C9A96E] tracking-[0.25em] uppercase mb-3 font-medium">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#0F1C2E] leading-tight mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
