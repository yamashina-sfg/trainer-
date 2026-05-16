import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function ReservationCompletePage() {
  return (
    <PageShell className="flex max-w-2xl items-center">
      <section className="sfg-card w-full py-10 text-center">
        <p className="text-sm font-bold text-teal">送信完了</p>
        <h1 className="mt-2 text-2xl font-black text-navy">予約相談を受け付けました</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">
          接骨院からの連絡をお待ちください。痛みが強い場合や不安が大きい場合は、早めに医療機関へ相談してください。
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link href="/posts" className="sfg-button bg-white text-navy ring-1 ring-slate-200">相談一覧へ</Link>
          <Link href="/clinics" className="sfg-button bg-teal text-white">接骨院一覧へ</Link>
        </div>
      </section>
    </PageShell>
  );
}
