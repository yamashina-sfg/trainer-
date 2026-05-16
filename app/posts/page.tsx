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
          <h1 className="text-xl font-black text-navy">怪我相談一覧</h1>
          <p className="mt-1 text-sm text-slate-600">部位や競技で絞り込み、近い相談を探せます。</p>
        </div>
        <Link href="/posts/new" className="sfg-button shrink-0 bg-teal text-white">
          相談する
        </Link>
      </div>
      <PostFilters posts={posts} />
    </PageShell>
  );
}
