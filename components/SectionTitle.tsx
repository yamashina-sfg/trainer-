export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b-2 border-teal-soft pb-2 text-sm font-bold text-navy">
      {children}
    </h2>
  );
}
