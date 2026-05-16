import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Badge } from "@/components/Badge";
import { ClinicCard } from "@/components/ClinicCard";
import { PostCard } from "@/components/PostCard";
import { getAreas, getClinics, getPosts } from "@/lib/repositories";

const values = [
  "匿名で相談できる",
  "トレーナーから専門的な回答が届く",
  "同じ怪我を経験した選手の体験談が見られる",
  "必要に応じて近くの接骨院に相談できる",
];

export default async function Home() {
  const [posts, clinics, areas] = await Promise.all([getPosts(), getClinics(), getAreas()]);
  const latestPosts = posts.slice(0, 2);
  const featuredClinic = clinics[0];

  return (
    <PageShell className="space-y-6">
      <section className="rounded-xl bg-navy px-5 py-7 text-white shadow-soft sm:px-8">
        <Badge className="mb-4 bg-white/10 text-cyan-100">SFG Injury Support</Badge>
        <h1 className="text-3xl font-black tracking-normal sm:text-4xl">怪我を、ひとりで抱えない。</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-cyan-50">
          スポーツで怪我をした選手が、匿名で相談し、専門トレーナーや同じ経験をした選手からヒントを得られる場所。
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link href="/posts/new" className="sfg-button bg-teal text-white">
            怪我を相談する
          </Link>
          <Link href="/posts" className="sfg-button bg-white text-navy">
            みんなの相談を見る
          </Link>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <div key={value} className="sfg-card">
            <p className="text-sm font-bold leading-6 text-navy">{value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-navy">最近の相談</h2>
            <Link href="/posts" className="text-xs font-bold text-teal">一覧へ</Link>
          </div>
          {latestPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-navy">近くの接骨院に相談</h2>
            <Link href="/clinics" className="text-xs font-bold text-teal">探す</Link>
          </div>
          <ClinicCard clinic={featuredClinic} area={areas.find((area) => area.id === featuredClinic.areaId)} />
        </div>
      </section>
    </PageShell>
  );
}
