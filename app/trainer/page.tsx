import { PageShell } from "@/components/PageShell";
import { PostCard } from "@/components/PostCard";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { TrainerAnswerForm } from "@/components/TrainerAnswerForm";
import { getAnsweredPosts, getOpenPosts, getPosts } from "@/lib/repositories";

export default async function TrainerPage() {
  const [posts, openPosts, answeredPosts] = await Promise.all([getPosts(), getOpenPosts(), getAnsweredPosts()]);
  const selectedPost = openPosts[0] ?? posts[0];
  const returnRecords = posts.filter((post) => post.type === "復帰記録投稿").length;
  const experiencePosts = posts.filter((post) => post.type === "経験談投稿").length;

  return (
    <PageShell className="space-y-5">
      <div>
        <h1 className="text-xl font-black text-navy">トレーナーダッシュボード</h1>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          選手の経験談や復帰記録に、診断ではなく補足・注意点を加えるための画面です。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="総投稿数" value={posts.length} />
        <StatCard label="相談投稿" value={openPosts.length} tone="text-amber-700" />
        <StatCard label="経験談" value={experiencePosts} tone="text-navy" />
        <StatCard label="復帰記録" value={returnRecords} tone="text-teal" />
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <section className="space-y-3">
          <SectionTitle>補足したい相談投稿</SectionTitle>
          {openPosts.length > 0 ? (
            openPosts.map((post) => <PostCard key={post.id} post={post} href={`/posts/${post.id}`} />)
          ) : (
            <div className="sfg-card text-sm text-slate-600">未補足の相談投稿はありません。</div>
          )}

          <SectionTitle>補足済みの経験談・復帰記録</SectionTitle>
          {answeredPosts.slice(0, 3).map((post) => <PostCard key={post.id} post={post} href={`/posts/${post.id}`} />)}
        </section>

        <section className="space-y-3">
          <SectionTitle>選択中の投稿プレビュー</SectionTitle>
          <PostCard post={selectedPost} href={`/posts/${selectedPost.id}`} />
          <TrainerAnswerForm />
        </section>
      </div>
    </PageShell>
  );
}
