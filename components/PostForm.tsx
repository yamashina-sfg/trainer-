"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const postTypes = ["相談投稿", "経験談投稿", "復帰記録投稿"];
const bodyParts = ["足首", "膝", "腰", "肩", "肘", "手首", "その他"];
const sports = ["サッカー", "バスケ", "野球", "陸上", "テニス", "バレー", "その他"];
const phases = ["受傷直後", "通院中", "リハビリ中", "練習復帰", "試合復帰", "再発経験あり"];

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
        名前、学校名、連絡先は書かなくても投稿できます。相談だけでなく、復帰までの記録や「自分もこうだった」という経験談も歓迎です。
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="sfg-label" htmlFor="postType">投稿タイプ</label>
          <select id="postType" name="postType" className="sfg-input">
            {postTypes.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div>
          <label className="sfg-label" htmlFor="returnPhase">復帰フェーズ</label>
          <select id="returnPhase" name="returnPhase" className="sfg-input">
            {phases.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="sfg-label" htmlFor="title">タイトル</label>
        <input id="title" name="title" className="sfg-input" placeholder="例：サッカー 足首捻挫 復帰までの記録" />
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
          <label className="sfg-label" htmlFor="injuryName">怪我名・症状</label>
          <input id="injuryName" name="injuryName" className="sfg-input" placeholder="足首捻挫、肩痛など" />
        </div>
      </div>
      <div>
        <label className="sfg-label" htmlFor="body">投稿内容</label>
        <textarea
          id="body"
          name="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          maxLength={800}
          rows={7}
          className="sfg-input resize-y"
          placeholder="怪我した状況、復帰までの流れ、不安だったこと、やってよかったケアなどを書いてください。"
        />
        <p className="mt-1 text-right text-[11px] text-slate-500">{body.length}/800</p>
      </div>
      <button className="sfg-button w-full bg-navy text-white" type="submit">
        匿名で投稿する
      </button>
    </form>
  );
}
