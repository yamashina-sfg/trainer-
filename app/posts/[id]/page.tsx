import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { CommentThread } from "@/components/CommentThread";
import { Disclaimer } from "@/components/Disclaimer";
import { PageShell } from "@/components/PageShell";
import { ReturnProcessSection } from "@/components/ReturnProcessSection";
import { SectionTitle } from "@/components/SectionTitle";
import { getPostById, getPosts, getTrainerProfiles } from "@/lib/repositories";
import { formatDateTime } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: post.id }));
}

export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [post, trainers] = await Promise.all([getPostById(id), getTrainerProfiles()]);

  if (!post) notFound();

  const trainerNotes = post.comments.filter((comment) => comment.commentType === "trainer_note");
  const experienceComments = post.comments.filter((comment) => comment.commentType === "experience");

  return (
    <PageShell className="max-w-3xl space-y-4">
      <Link href="/posts" className="text-sm font-bold text-teal">一覧に戻る</Link>
      <article className="sfg-card">
        <div className="mb-3 flex flex-wrap gap-1.5">
          <Badge tone={post.type === "相談投稿" ? "warn" : post.type === "経験談投稿" ? "navy" : "teal"}>
            {post.type}
          </Badge>
          <Badge tone="teal">{post.sport}</Badge>
          <Badge tone="navy">{post.bodyPart}</Badge>
          <Badge>{post.injuryName}</Badge>
          <Badge tone="gray">{post.returnPhase}</Badge>
          {trainerNotes.length > 0 ? <Badge tone="ok">トレーナー補足あり</Badge> : null}
        </div>
        <h1 className="text-xl font-black leading-8 text-navy">{post.title}</h1>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.symptomTags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600">
              #{tag}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-800">{post.body}</p>
        <p className="mt-3 text-xs text-slate-500">
          {post.athleteLabel} ・ {formatDateTime(post.createdAt)}
        </p>
      </article>

      <Disclaimer />

      <section>
        <SectionTitle>復帰プロセス</SectionTitle>
        <ReturnProcessSection process={post.returnProcess} />
      </section>

      <section>
        <SectionTitle>経験者コメント</SectionTitle>
        <CommentThread comments={experienceComments} trainers={trainers} />
      </section>

      <section>
        <SectionTitle>トレーナーの補足・注意点</SectionTitle>
        <p className="mb-3 text-xs leading-5 text-slate-500">
          トレーナーは診断する人ではなく、選手の経験談や復帰記録に対して、再発予防や受診目安などの注意点を補足する役割です。
        </p>
        <CommentThread comments={trainerNotes} trainers={trainers} />
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
        <h2 className="text-base font-bold text-navy">不安が残る場合は、近くの接骨院へ</h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          ここで見られる経験談はあくまで選手ごとの記録です。痛みが続く場合や復帰判断に迷う場合は、地域の接骨院や医療機関に相談できます。
        </p>
        <Link href={`/clinics?postId=${post.id}`} className="sfg-button mt-4 w-full bg-teal text-white">
          近くの接骨院に相談する
        </Link>
      </section>
    </PageShell>
  );
}
