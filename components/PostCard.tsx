import Link from "next/link";
import type { Post } from "@/types";
import { Badge } from "@/components/Badge";
import { formatDateTime } from "@/lib/utils";

export function PostCard({ post, href = `/posts/${post.id}` }: { post: Post; href?: string }) {
  const hasTrainerAnswer = post.comments.some((comment) => comment.authorType === "trainer");
  const experienceCommentCount = post.comments.filter((comment) => comment.commentType === "experience").length;

  return (
    <Link href={href} className="sfg-card block transition hover:border-teal">
      <div className="mb-2 flex flex-wrap gap-1.5">
        <Badge tone={post.type === "相談投稿" ? "warn" : post.type === "経験談投稿" ? "navy" : "teal"}>
          {post.type}
        </Badge>
        <Badge tone="teal">{post.sport}</Badge>
        <Badge tone="navy">{post.bodyPart}</Badge>
        <Badge>{post.injuryName}</Badge>
        <Badge tone="gray">{post.returnPhase}</Badge>
        {hasTrainerAnswer ? <Badge tone="ok">トレーナー補足あり</Badge> : null}
      </div>
      <h3 className="text-sm font-bold text-slate-950">{post.title}</h3>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {post.symptomTags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600">
            #{tag}
          </span>
        ))}
      </div>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-700">{post.body}</p>
      <div className="mt-3 flex items-center justify-between gap-3 text-[11px] text-slate-500">
        <span>
          {post.athleteLabel} ・ {formatDateTime(post.createdAt)}
        </span>
        <span className="shrink-0">経験者コメント {experienceCommentCount}件</span>
      </div>
    </Link>
  );
}
