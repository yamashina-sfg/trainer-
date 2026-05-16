import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PostForm } from "@/components/PostForm";

export default function NewPostPage() {
  return (
    <PageShell className="max-w-2xl space-y-4">
      <Link href="/posts" className="text-sm font-bold text-teal">一覧に戻る</Link>
      <div>
        <h1 className="text-xl font-black text-navy">怪我を匿名で相談する</h1>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          競技、部位、困っていることを入力すると、トレーナーや経験者からヒントを得られます。
        </p>
      </div>
      <PostForm />
    </PageShell>
  );
}
