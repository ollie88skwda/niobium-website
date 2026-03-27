import RevealOnScroll from "@/components/RevealOnScroll";
import ReadyToAscend from "@/components/ReadyToAscend";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | Niobium Agency",
  description: "Meet the team behind Niobium Agency. We combine raw technical power with high-end aesthetic precision to build brands that command attention. Operating globally from London & Berlin.",
};

export default function AboutPage() {
  return (
    <>
      <RevealOnScroll />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 bg-black reveal-on-scroll active">
          <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <span className="font-mono uppercase tracking-[0.1em] text-[0.75rem] text-primary-fixed mb-8 block font-medium">
                MISSION STATEMENT
              </span>
              <h1 className="font-display text-[15vw] md:text-[10rem] font-normal text-white leading-[0.8] tracking-[-0.02em] mb-12 uppercase">
                WE ARCHITECT <br /> DIGITAL MONOLITHS.
              </h1>
            </div>
            <div className="md:col-span-4 md:pt-32">
              <p className="font-mono text-lg md:text-xl text-on-surface-variant leading-relaxed uppercase tracking-tight">
                Niobium Agency bridges the gap between raw technical power and
                high-end aesthetic precision. We build systems that don&apos;t just
                function&mdash;they command attention.
              </p>
            </div>
          </div>
        </section>

        {/* Established Bar */}
        <section className="py-6 bg-black text-white border-y-[4px] border-white/5 overflow-hidden reveal-on-scroll">
          <div className="flex justify-around items-center opacity-80 whitespace-nowrap">
            <span className="font-display text-xl tracking-widest px-8">ESTABLISHED 2025</span>
            <span className="font-display text-xl tracking-widest px-8">42+ LUXURY DEPLOYMENTS</span>
            <span className="font-display text-xl tracking-widest px-8">&quot;EXCEPTIONAL PRECISION&quot; — VOGUE</span>
            <span className="hidden md:inline font-display text-xl tracking-widest px-8">GLOBAL OPERATIONS</span>
          </div>
        </section>

        {/* Architects Section — High Contrast White */}
        <section className="bg-white py-32 px-8 md:px-24 reveal-on-scroll">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <span className="font-mono uppercase tracking-[0.1em] text-[0.75rem] text-primary-fixed mb-4 block font-black">
                  THE CORE
                </span>
                <h2 className="font-display text-8xl md:text-[10rem] font-normal text-black uppercase leading-none tracking-tight">
                  Architects of Change
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  name: "MARCUS VAUGHN",
                  role: "The Visionary Lead & Systems Architect.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhQavS__mSB485Vka6El3ZfIUh-L8bXMwASwLtHkeCrGMKQwvkJsrUJtFZSU3X7B1I-sHDILMP3irJJVWh1Zuq-zEzTU39KdDuUlKBKTcwvcQuhr5wn00k7wwrOl7uKcINYSzEE3lIqQjg98ADah64kculiwHr8GwsdwIGpPIppzKyFK2dEvTTEErYa3-j1LT_xwRWrDg6U3OSduWu-BJb6VnIR_vliY--E6wBZQ8oMthewL2zHbYDJlRlWjq0OA0JmFHMYuKtLA",
                },
                {
                  name: "ELARA CHEN",
                  role: "Head of Creative & Human Interfacing.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm4cl8xmwejhCoVSklPOF535yFwdRyO5OG1ELacu9JTcYADOZB3L9wm5s6ElxIr56NmYUggvTh2Rg8LdP8Q8Xm-IgQJmcVXvKk6p1MtGlgne_mUSvN9QJPivjQg_th9HCZYJXn0tE-K-mazf3vb3GtTUKJaF09PRN67qisVDA3sST6yTtywOutKdGH2a3YprkufCMC5emb_SrcApL4jRUF6UaXXbsrovO6vTYMMGJKGicyhpQNsrAZaWhtxKuiB9c7kMHRa7tBAQ",
                },
              ].map((founder) => (
                <Link href="/contact" key={founder.name} className="bg-white p-6 brutalist-card group block">
                  <div className="aspect-[4/5] overflow-hidden mb-8 bg-gray-100 border-[4px] border-black relative">
                    <Image
                      alt={founder.name}
                      className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                      src={founder.img}
                      fill
                      unoptimized
                    />
                  </div>
                  <div className="flex justify-between items-end pb-4">
                    <div>
                      <h3 className="font-display text-6xl text-black mb-2 uppercase">{founder.name}</h3>
                      <p className="font-mono text-sm text-black uppercase font-medium">{founder.role}</p>
                    </div>
                    <span className="material-symbols-outlined text-black text-5xl font-black group-hover:text-primary-fixed transition-colors">
                      arrow_outward
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section — Black */}
        <section className="py-32 px-8 md:px-24 bg-black reveal-on-scroll">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h2 className="font-display text-8xl md:text-9xl font-normal text-white uppercase tracking-tight leading-[0.9] sticky top-32">
                  WHY <br /> NIOBIUM?
                </h2>
              </div>
              <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    title: "Local Presence",
                    desc: "We operate from the heart of the tech hubs, ensuring direct collaboration and hyper-local market awareness.",
                  },
                  {
                    title: "Lean Execution",
                    desc: "No bloat. No unnecessary layers. Just elite talent focused on the essential core of your product.",
                  },
                  {
                    title: "Built Different",
                    desc: "We reject industry standard templates. Every pixel is carved from the ground up for absolute uniqueness.",
                  },
                ].map((item) => (
                  <div key={item.title} className="pt-12 border-t border-white/20">
                    <h4 className="font-display text-4xl text-white mb-4 uppercase">{item.title}</h4>
                    <p className="font-mono text-on-surface-variant leading-relaxed uppercase text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ReadyToAscend />
      </main>
    </>
  );
}
