import type { ReturnProcess } from "@/types";

const processRows: Array<{ key: keyof ReturnProcess; label: string }> = [
  { key: "injuredDate", label: "怪我した日" },
  { key: "visitedClinic", label: "病院・接骨院に行ったか" },
  { key: "walkedAt", label: "いつ歩けたか" },
  { key: "ranAt", label: "いつ走れたか" },
  { key: "practiceReturnedAt", label: "いつ練習復帰したか" },
  { key: "matchReturnedAt", label: "いつ試合復帰したか" },
  { key: "recurrence", label: "再発したか" },
  { key: "anxiety", label: "不安だったこと" },
  { key: "helpfulCare", label: "やってよかったケア" },
];

export function ReturnProcessSection({ process }: { process?: ReturnProcess }) {
  if (!process) {
    return (
      <div className="sfg-card text-sm leading-6 text-slate-600">
        この投稿にはまだ復帰プロセスが登録されていません。経験者コメントで「いつ歩けたか」「いつ練習復帰したか」を共有できます。
      </div>
    );
  }

  return (
    <div className="sfg-card">
      <dl className="space-y-3">
        {processRows.map((row) => (
          <div key={row.key} className="rounded-md bg-slate-50 p-3">
            <dt className="text-[11px] font-bold text-teal">{row.label}</dt>
            <dd className="mt-1 text-sm leading-6 text-slate-800">{process[row.key]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
