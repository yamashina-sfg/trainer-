"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Clinic } from "@/types";
import { Disclaimer } from "@/components/Disclaimer";

export function ReservationForm({ clinics }: { clinics: Clinic[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialClinicId = searchParams.get("clinicId") ?? clinics[0]?.id;

  return (
    <form
      className="sfg-card space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        router.push("/reservations/complete");
      }}
    >
      <Disclaimer text="予約内容は相談受付のための情報です。緊急性がある症状や強い痛みがある場合は、すぐに医療機関へ相談してください。" />
      <div>
        <label className="sfg-label" htmlFor="clinicId">相談したい接骨院</label>
        <select id="clinicId" name="clinicId" className="sfg-input" defaultValue={initialClinicId}>
          {clinics.map((clinic) => (
            <option key={clinic.id} value={clinic.id}>
              {clinic.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="sfg-label" htmlFor="name">お名前</label>
          <input id="name" name="name" className="sfg-input" placeholder="例：山田 太郎" />
        </div>
        <div>
          <label className="sfg-label" htmlFor="contact">連絡先</label>
          <input id="contact" name="contact" className="sfg-input" placeholder="メールまたは電話番号" />
        </div>
      </div>
      <div>
        <label className="sfg-label" htmlFor="preferredDate">希望日</label>
        <input id="preferredDate" name="preferredDate" type="date" className="sfg-input" />
      </div>
      <div>
        <label className="sfg-label" htmlFor="message">相談したい内容</label>
        <textarea id="message" name="message" rows={6} className="sfg-input resize-y" placeholder="痛みの部位、競技、いつから続いているかを書いてください。" />
      </div>
      <button className="sfg-button w-full bg-navy text-white" type="submit">
        予約相談を送信する
      </button>
    </form>
  );
}
