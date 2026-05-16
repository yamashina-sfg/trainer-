export function StatCard({
  label,
  value,
  tone = "text-navy",
}: {
  label: string;
  value: string | number;
  tone?: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-soft">
      <div className={`text-2xl font-bold ${tone}`}>{value}</div>
      <div className="mt-1 text-[11px] font-bold text-slate-500">{label}</div>
    </div>
  );
}
