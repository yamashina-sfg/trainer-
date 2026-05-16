import { Suspense } from "react";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ReservationForm } from "@/components/ReservationForm";
import { getClinics } from "@/lib/repositories";

export default async function NewReservationPage() {
  const clinics = await getClinics();

  return (
    <PageShell className="max-w-2xl space-y-4">
      <Link href="/clinics" className="text-sm font-bold text-teal">接骨院一覧に戻る</Link>
      <div>
        <h1 className="text-xl font-black text-navy">予約相談フォーム</h1>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          接骨院へ相談したい内容を送信します。正式な予約確定は接骨院からの連絡後になります。
        </p>
      </div>
      <Suspense fallback={<div className="sfg-card text-sm text-slate-600">フォームを読み込み中です。</div>}>
        <ReservationForm clinics={clinics} />
      </Suspense>
    </PageShell>
  );
}
