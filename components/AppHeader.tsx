import Link from "next/link";

const navItems = [
  { href: "/posts", label: "相談" },
  { href: "/clinics", label: "接骨院" },
  { href: "/trainer", label: "トレーナー" },
  { href: "/admin", label: "管理" },
];

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 bg-navy text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="leading-tight">
          <span className="block text-[15px] font-bold tracking-wide">SFG 怪我サポート</span>
          <span className="block text-[10px] font-semibold text-cyan-100/80">
            Sports Injury Support Community
          </span>
        </Link>
        <nav className="flex gap-1 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-bold text-cyan-100 transition hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
