import { cn } from "@/lib/utils";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return <main className={cn("mx-auto min-h-screen max-w-5xl px-4 py-5", className)}>{children}</main>;
}
