"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const bodyParts = ["足首", "膝", "腰", "肩", "肘", "手首", "その他"];
const sports = ["サッカー", "バスケ", "野球", "陸上", "テニス", "バレー", "その他"];
const timings = ["直後", "1週間以内", "1か月以内", "それ以上"];

export function PostForm() {
  const router = useRouter();
  const [body, setBody] = useState("");

  function submitPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!body.trim()) return;
    router.push("/posts?posted=1");
  }

  return (
    <form onSubmit={submitPost} className="sfg-card space-y-4">
      <div className="rounded-md border-l-4 border-teal bg-teal-soft px-3 py-2 text-xs leading-6 text-teal">
        名前、学校名、連絡先は書かなくても相談できます。個人が特定される情報は入力しないでください。
      </div>
      <div>
        <label className="sfg-label" htmlFor="title">相談タイトル</label>
        <input id="title" name="title" className="sfg-input" placeholder="例：足首をひねって腫れています" />
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div>
          <label className="sfg-label" htmlFor="bodyPart">怪我の部位</label>
          <select id="bodyPart" name="bodyPart" className="sfg-input">
            {bodyParts.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div>
          <label className="sfg-label" htmlFor="sport">競技</label>
          <select id="sport" name="sport" className="sfg-input">
            {sports.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div>
          <label className="sfg-label" htmlFor="injuredAt">怪我をした時期</label>
          <select id="injuredAt" name="injuredAt" className="sfg-input">
            {timings.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="sfg-label" htmlFor="body">相談内容</label>
        <textarea
          id="body"
          name="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          maxLength={500}
          rows={7}
          className="sfg-input resize-y"
          placeholder="どんな動きで痛くなったか、今できること、困っていることを書いてください。"
        />
        <p className="mt-1 text-right text-[11px] text-slate-500">{body.length}/500</p>
      </div>
      <button className="sfg-button w-full bg-navy text-white" type="submit">
        匿名で相談する
      </button>
    </form>
  );
}
