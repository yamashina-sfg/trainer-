import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { getAreas, getClinicById, getClinics, getTrainerProfiles } from "@/lib/repositories";

export async function generateStaticParams() {
  const clinics = await getClinics();
  return clinics.map((clinic) => ({ id: clinic.id }));
}

export default async function ClinicDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [clinic, areas, trainers] = await Promise.all([getClinicById(id), getAreas(), getTrainerProfiles()]);

  if (!clinic) notFound();

  const area = areas.find((item) => item.id === clinic.areaId);
  const clinicTrainers = trainers.filter((trainer) => clinic.trainerProfileIds.includes(trainer.id));

  return (
    <PageShell className="max-w-3xl space-y-4">
      <Link href="/clinics" className="text-sm font-bold text-teal">接骨院一覧に戻る</Link>
      <section className="sfg-card">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {area ? <Badge tone="navy">{area.name}</Badge> : null}
          {clinic.specialties.map((specialty) => <Badge key={specialty} tone="teal">{specialty}</Badge>)}
        </div>
        <h1 className="text-2xl font-black leading-8 text-navy">{clinic.name}</h1>
        <p className="mt-2 text-sm font-bold text-teal">{clinic.catchCopy}</p>
        <p className="mt-4 text-sm leading-7 text-slate-800">{clinic.description}</p>
      </section>

      <section className="sfg-card">
        <SectionTitle>基本情報</SectionTitle>
        <dl className="grid gap-3 text-sm">
          <div><dt className="font-bold text-slate-500">住所</dt><dd className="mt-1 text-slate-800">{clinic.address}</dd></div>
          <div><dt className="font-bold text-slate-500">アクセス</dt><dd className="mt-1 text-slate-800">{clinic.access}</dd></div>
          <div><dt className="font-bold text-slate-500">受付時間</dt><dd className="mt-1 text-slate-800">{clinic.hours}</dd></div>
          <div><dt className="font-bold text-slate-500">電話</dt><dd className="mt-1 text-slate-800">{clinic.phone}</dd></div>
        </dl>
      </section>

      <section className="sfg-card">
        <SectionTitle>対応しやすい競技</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {clinic.sports.map((sport) => <Badge key={sport} tone="navy">{sport}</Badge>)}
        </div>
      </section>

      <section className="sfg-card">
        <SectionTitle>所属トレーナー</SectionTitle>
        {clinicTrainers.length > 0 ? (
          <div className="space-y-3">
            {clinicTrainers.map((trainer) => (
              <div key={trainer.id} className="rounded-lg bg-teal-soft p-3">
                <p className="text-sm font-bold text-navy">{trainer.name}</p>
                <p className="mt-1 text-xs font-bold text-teal">{trainer.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{trainer.bio}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-600">現在、掲載準備中です。</p>
        )}
      </section>

      <Link href={`/reservations/new?clinicId=${clinic.id}`} className="sfg-button w-full bg-teal text-white">
        この接骨院に予約相談する
      </Link>
    </PageShell>
  );
}
