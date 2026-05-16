import { cn } from "@/lib/utils";

type BadgeTone = "teal" | "navy" | "gray" | "warn" | "ok";

const toneClass: Record<BadgeTone, string> = {
  teal: "bg-teal-soft text-teal",
  navy: "bg-navy/10 text-navy",
  gray: "bg-slate-100 text-slate-600",
  warn: "bg-amber-100 text-amber-800",
  ok: "bg-emerald-100 text-emerald-800",
};

export function Badge({
  children,
  tone = "gray",
  className,
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex rounded-full px-2 py-1 text-[11px] font-bold", toneClass[tone], className)}>
      {children}
    </span>
  );
}
