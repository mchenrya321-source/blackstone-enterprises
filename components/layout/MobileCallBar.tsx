import { SITE } from "@/lib/constants";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/95 p-3 backdrop-blur-md sm:hidden">
      <a
        href={SITE.phoneHref}
        className="flex w-full items-center justify-center rounded-sm bg-brand-orange py-3.5 text-base font-bold uppercase tracking-wider text-black shadow-premium-orange"
      >
        Call Now — {SITE.phone}
      </a>
    </div>
  );
}
