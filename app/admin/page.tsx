import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { getClinics, getPosts, getReservations } from "@/lib/repositories";

export default async function AdminPage() {
  const [posts, clinics, reservations] = await Promise.all([getPosts(), getClinics(), getReservations()]);
  const answeredPosts = posts.filter((post) => post.status === "answered");
  const openPosts = posts.filter((post) => post.status === "open");
  const conversionRate = posts.length > 0 ? Math.round((reservations.length / posts.length) * 100) : 0;

  return (
    <PageShell className="space-y-5">
      <div>
        <h1 className="text-xl font-black text-navy">SFG管理画面</h1>
        <p className="mt-1 text-sm text-slate-600">相談コミュニティと接骨院送客のKPIを確認します。</p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <StatCard label="総相談数" value={posts.length} />
        <StatCard label="回答済み" value={answeredPosts.length} tone="text-teal" />
        <StatCard label="未回答" value={openPosts.length} tone="text-amber-700" />
        <StatCard label="掲載接骨院" value={clinics.length} />
        <StatCard label="予約相談率" value={`${conversionRate}%`} tone="text-teal" />
      </div>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="sfg-card">
          <SectionTitle>部位別の相談</SectionTitle>
          <div className="space-y-3">
            {["足首", "膝", "肩", "腰"].map((part) => {
              const count = posts.filter((post) => post.bodyPart === part).length;
              return (
                <div key={part}>
                  <div className="mb-1 flex justify-between text-xs font-bold text-slate-600">
                    <span>{part}</span>
                    <span>{count}件</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-teal" style={{ width: `${Math.max(count * 25, 8)}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="sfg-card">
          <SectionTitle>予約相談</SectionTitle>
          <div className="space-y-3">
            {reservations.map((reservation) => {
              const clinic = clinics.find((item) => item.id === reservation.clinicId);
              return (
                <div key={reservation.id} className="rounded-lg border border-slate-200 p-3">
                  <p className="text-sm font-bold text-navy">{clinic?.name ?? "未設定の接骨院"}</p>
                  <p className="mt-1 text-xs text-slate-500">希望日: {reservation.preferredDate}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{reservation.message}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sfg-card">
        <SectionTitle>今後Supabaseへ接続するテーブル</SectionTitle>
        <div className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "users",
            "posts",
            "comments",
            "trainer_profiles",
            "clinics",
            "clinic_trainers",
            "reservations",
            "areas",
            "specialties",
          ].map((table) => (
            <code key={table} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-bold text-navy">
              {table}
            </code>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
