import Link from "next/link";
import type { Area, Clinic } from "@/types";
import { Badge } from "@/components/Badge";

export function ClinicCard({ clinic, area }: { clinic: Clinic; area?: Area }) {
  return (
    <Link href={`/clinics/${clinic.id}`} className="sfg-card block transition hover:border-teal">
      <div className="mb-2 flex flex-wrap gap-1.5">
        {area ? <Badge tone="navy">{area.name}</Badge> : null}
        {clinic.specialties.slice(0, 3).map((specialty) => (
          <Badge key={specialty} tone="teal">
            {specialty}
          </Badge>
        ))}
      </div>
      <h3 className="text-base font-bold text-navy">{clinic.name}</h3>
      <p className="mt-1 text-sm font-bold text-teal">{clinic.catchCopy}</p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{clinic.description}</p>
      <div className="mt-3 text-xs leading-5 text-slate-500">
        <p>{clinic.access}</p>
        <p>{clinic.hours}</p>
      </div>
    </Link>
  );
}
