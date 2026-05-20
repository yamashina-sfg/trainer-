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
        <h3 className="text-sm font-bold text-navy">補足・注意点を加える</h3>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          トレーナーは診断ではなく、経験談や復帰記録に対して再発予防、受診目安、復帰時の注意点を補足します。
        </p>
      </div>
      {sent ? (
        <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-800">
          補足コメントを投稿しました。実装時はSupabaseへ保存します。
        </div>
      ) : null}
      <textarea
        className="sfg-input min-h-32 resize-y"
        placeholder="例：痛みが残る時期に避けたい動き、段階的に戻す目安、受診をおすすめするサインなど"
      />
      <button className="sfg-button w-full bg-teal text-white" type="submit">
        補足コメントを投稿する
      </button>
    </form>
  );
}
