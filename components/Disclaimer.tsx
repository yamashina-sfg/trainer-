import { medicalDisclaimer } from "@/lib/constants";

export function Disclaimer({ text = medicalDisclaimer }: { text?: string }) {
  return (
    <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs leading-relaxed text-emerald-800">
      {text}
    </div>
  );
}
