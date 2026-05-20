import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PostForm } from "@/components/PostForm";

export default function NewPostPage() {
  return (
    <PageShell className="max-w-2xl space-y-4">
      <Link href="/posts" className="text-sm font-bold text-teal">一覧に戻る</Link>
      <div>
        <h1 className="text-xl font-black text-navy">相談・経験談・復帰記録を投稿する</h1>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          同じ怪我で悩む選手が、復帰までの見通しや不安との向き合い方を知れる投稿を残せます。
        </p>
      </div>
      <PostForm />
    </PageShell>
  );
}
