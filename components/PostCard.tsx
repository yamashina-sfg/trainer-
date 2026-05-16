import Link from "next/link";
import type { Post } from "@/types";
import { Badge } from "@/components/Badge";
import { formatDateTime } from "@/lib/utils";

export function PostCard({ post, href = `/posts/${post.id}` }: { post: Post; href?: string }) {
  const hasTrainerAnswer = post.comments.some((comment) => comment.authorType === "trainer");

  return (
    <Link href={href} className="sfg-card block transition hover:border-teal">
      <div className="mb-2 flex flex-wrap gap-1.5">
        <Badge tone="teal">{post.sport}</Badge>
        <Badge tone="navy">{post.bodyPart}</Badge>
        <Badge>{post.injuredAt}</Badge>
        {hasTrainerAnswer ? <Badge tone="ok">トレーナー回答あり</Badge> : <Badge tone="warn">未回答</Badge>}
      </div>
      <h3 className="text-sm font-bold text-slate-950">{post.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-700">{post.body}</p>
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
        <span>
          {post.athleteLabel} ・ {formatDateTime(post.createdAt)}
        </span>
        <span>コメント {post.comments.length}件</span>
      </div>
    </Link>
  );
}
