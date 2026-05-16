import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { CommentThread } from "@/components/CommentThread";
import { Disclaimer } from "@/components/Disclaimer";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { getPostById, getPosts, getTrainerProfiles } from "@/lib/repositories";
import { formatDateTime } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: post.id }));
}

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [post, trainers] = await Promise.all([getPostById(id), getTrainerProfiles()]);

  if (!post) notFound();

  const trainerAnswers = post.comments.filter((comment) => comment.authorType === "trainer");

  return (
    <PageShell className="max-w-3xl space-y-4">
      <Link href="/posts" className="text-sm font-bold text-teal">一覧に戻る</Link>
      <article className="sfg-card">
        <div className="mb-3 flex flex-wrap gap-1.5">
          <Badge tone="teal">{post.sport}</Badge>
          <Badge tone="navy">{post.bodyPart}</Badge>
          <Badge>{post.injuredAt}</Badge>
        </div>
        <h1 className="text-xl font-black leading-8 text-navy">{post.title}</h1>
        <p className="mt-3 text-sm leading-7 text-slate-800">{post.body}</p>
        <p className="mt-3 text-xs text-slate-500">
          {post.athleteLabel} ・ {formatDateTime(post.createdAt)}
        </p>
      </article>

      <Disclaimer />

      <section>
        <SectionTitle>コメントとトレーナー回答</SectionTitle>
        <CommentThread comments={post.comments} trainers={trainers} />
      </section>

      {trainerAnswers.length > 0 ? (
        <section className="rounded-lg border border-teal bg-white p-4 shadow-soft">
          <h2 className="text-base font-bold text-navy">症状が続く場合は、近くの接骨院へ</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            トレーナー回答を見ても不安が残る場合や、痛みが続く場合は、地域の接骨院に相談できます。
          </p>
          <Link href={`/clinics?postId=${post.id}`} className="sfg-button mt-4 w-full bg-teal text-white">
            近くの接骨院に相談する
          </Link>
        </section>
      ) : null}
    </PageShell>
  );
}
