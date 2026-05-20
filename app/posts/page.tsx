import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PostFilters } from "@/components/PostFilters";
import { getPosts } from "@/lib/repositories";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <PageShell className="max-w-3xl space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-navy">怪我の相談・経験談・復帰記録</h1>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            競技、部位、復帰フェーズで絞り込み、同じ怪我をした選手の流れを探せます。
          </p>
        </div>
        <Link href="/posts/new" className="sfg-button shrink-0 bg-teal text-white">
          投稿する
        </Link>
      </div>
      <PostFilters posts={posts} />
    </PageShell>
  );
}
