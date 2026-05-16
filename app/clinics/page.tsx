import Link from "next/link";
import { ClinicCard } from "@/components/ClinicCard";
import { PageShell } from "@/components/PageShell";
import { getAreas, getClinics } from "@/lib/repositories";

export default async function ClinicsPage() {
  const [clinics, areas] = await Promise.all([getClinics(), getAreas()]);

  return (
    <PageShell className="max-w-3xl space-y-4">
      <div>
        <h1 className="text-xl font-black text-navy">接骨院を探す</h1>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          スポーツの怪我相談に対応する地域の接骨院を掲載しています。相談内容に近い院を選んで予約へ進めます。
        </p>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {areas.map((area) => (
          <Link
            key={area.id}
            href={`/clinics#${area.id}`}
            className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600"
          >
            {area.name}
          </Link>
        ))}
      </div>
      <div className="space-y-3">
        {clinics.map((clinic) => (
          <ClinicCard key={clinic.id} clinic={clinic} area={areas.find((area) => area.id === clinic.areaId)} />
        ))}
      </div>
    </PageShell>
  );
}
