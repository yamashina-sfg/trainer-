import { PageShell } from "@/components/PageShell";
import { PostCard } from "@/components/PostCard";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { TrainerAnswerForm } from "@/components/TrainerAnswerForm";
import { getAnsweredPosts, getOpenPosts, getPosts } from "@/lib/repositories";

export default async function TrainerPage() {
  const [posts, openPosts, answeredPosts] = await Promise.all([getPosts(), getOpenPosts(), getAnsweredPosts()]);
  const selectedPost = openPosts[0] ?? posts[0];

  return (
    <PageShell className="space-y-5">
      <div>
        <h1 className="text-xl font-black text-navy">トレーナーダッシュボード</h1>
        <p className="mt-1 text-sm text-slate-600">未回答の相談を確認し、選手に専門的なヒントを届けます。</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <StatCard label="総相談数" value={posts.length} />
        <StatCard label="未回答" value={openPosts.length} tone="text-amber-700" />
        <StatCard label="回答済み" value={answeredPosts.length} tone="text-teal" />
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <section className="space-y-3">
          <SectionTitle>未回答の相談</SectionTitle>
          {openPosts.length > 0 ? (
            openPosts.map((post) => <PostCard key={post.id} post={post} href={`/posts/${post.id}`} />)
          ) : (
            <div className="sfg-card text-sm text-slate-600">未回答の相談はありません。</div>
          )}

          <SectionTitle>回答済み</SectionTitle>
          {answeredPosts.slice(0, 3).map((post) => <PostCard key={post.id} post={post} href={`/posts/${post.id}`} />)}
        </section>

        <section className="space-y-3">
          <SectionTitle>選択中の相談プレビュー</SectionTitle>
          <PostCard post={selectedPost} href={`/posts/${selectedPost.id}`} />
          <TrainerAnswerForm />
        </section>
      </div>
    </PageShell>
  );
}
