"use client";

import { useState } from "react";

export function TrainerAnswerForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="sfg-card space-y-3"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <h3 className="text-sm font-bold text-navy">トレーナーとして回答する</h3>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          診断ではなく、相談として受け取れる表現で回答してください。
        </p>
      </div>
      {sent ? (
        <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-800">
          回答を投稿しました。実装時はSupabaseへ保存します。
        </div>
      ) : null}
      <textarea className="sfg-input min-h-32 resize-y" placeholder="練習を続ける判断、セルフケア、受診をおすすめする目安などを書いてください。" />
      <button className="sfg-button w-full bg-teal text-white" type="submit">
        回答を投稿する
      </button>
    </form>
  );
}
