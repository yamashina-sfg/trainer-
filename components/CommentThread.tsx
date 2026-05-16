import type { Comment, TrainerProfile } from "@/types";
import { Badge } from "@/components/Badge";
import { Disclaimer } from "@/components/Disclaimer";
import { formatDateTime, getInitials } from "@/lib/utils";

export function CommentThread({
  comments,
  trainers,
}: {
  comments: Comment[];
  trainers: TrainerProfile[];
}) {
  if (comments.length === 0) {
    return <div className="sfg-card text-sm text-slate-600">まだコメントはありません。</div>;
  }

  return (
    <div className="space-y-3">
      {comments.map((comment) => {
        const trainer = trainers.find((item) => item.id === comment.trainerProfileId);
        const isTrainer = comment.authorType === "trainer";

        return (
          <article
            key={comment.id}
            className={
              isTrainer
                ? "rounded-lg border border-teal bg-teal-soft p-4"
                : "rounded-lg border border-slate-200 bg-white p-4"
            }
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                {getInitials(comment.authorName)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-bold text-navy">{comment.authorName}</p>
                  {isTrainer ? <Badge tone="teal">専門トレーナー</Badge> : <Badge>匿名選手</Badge>}
                </div>
                <p className="text-[11px] text-slate-500">
                  {trainer?.title ?? "選手コメント"} ・ {formatDateTime(comment.createdAt)}
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-800">{comment.body}</p>
            {isTrainer ? <div className="mt-3"><Disclaimer /></div> : null}
          </article>
        );
      })}
    </div>
  );
}
