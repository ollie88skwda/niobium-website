import Link from "next/link";

export default function ReadyToAscend() {
  return (
    <section className="py-64 bg-white text-center px-8 reveal-on-scroll border-t-[4px] border-black">
      <h2 className="font-display text-7xl md:text-[14rem] leading-none mb-24 tracking-tight uppercase text-black font-normal">
        Ready to Ascend?
      </h2>
      <div className="flex justify-center">
        <Link href="/contact" className="group flex items-center gap-8 bg-black text-white font-display py-8 px-20 transition-all hover:bg-primary-fixed hover:text-white border-[6px] border-black chrome-glow-micro">
          <span className="uppercase tracking-widest text-3xl">Initiate Project</span>
          <span className="material-symbols-outlined text-5xl font-black group-hover:translate-x-4 transition-transform">
            arrow_forward
          </span>
        </Link>
      </div>
    </section>
  );
}
