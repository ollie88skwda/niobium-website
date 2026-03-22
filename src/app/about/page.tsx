import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";

export const metadata = {
  title: "About | Niobium Agency",
  description: "We architect digital monoliths.",
};

export default function AboutPage() {
  return (
    <>
      <RevealOnScroll />
      <main>
        {/* Hero / Mission Section */}
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 bg-surface">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start reveal-on-scroll">
            <div className="md:col-span-8">
              <span className="uppercase tracking-[0.1em] text-[0.6875rem] text-primary-fixed mb-8 block">
                Mission Statement
              </span>
              <h1 className="text-5xl md:text-8xl font-bold text-white tracking-[-0.02em] leading-none mb-12">
                WE ARCHITECT <br /> DIGITAL MONOLITHS.
              </h1>
            </div>
            <div className="md:col-span-4 md:pt-32">
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
                Niobium Agency bridges the gap between raw technical power and
                high-end aesthetic precision. We build systems that don&apos;t just
                function&mdash;they command attention.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="bg-surface-container-low py-32 px-8 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 reveal-on-scroll">
              <span className="uppercase tracking-[0.1em] text-[0.6875rem] text-on-surface-variant mb-4 block">
                The Core
              </span>
              <h2 className="text-4xl font-bold text-white uppercase">
                Architects of Change
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 reveal-on-scroll">
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
                <div
                  key={founder.name}
                  className="bg-surface p-12 group transition-all duration-300"
                >
                  <div className="aspect-[4/5] overflow-hidden mb-8 bg-surface-container-highest relative">
                    <Image
                      alt={founder.name}
                      className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                      src={founder.img}
                      fill
                      unoptimized
                    />
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {founder.name}
                      </h3>
                      <p className="text-sm text-on-surface-variant italic">
                        {founder.role}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-white/20 group-hover:text-primary-fixed transition-colors">
                      north_east
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-32 px-8 md:px-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 reveal-on-scroll">
              <div className="md:col-span-4">
                <h2 className="text-5xl font-bold text-white uppercase tracking-tighter leading-none sticky top-32">
                  WHY <br /> NIOBIUM?
                </h2>
              </div>
              <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
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
                    title: "AI-Powered",
                    desc: "We leverage cutting-edge neural frameworks to accelerate development without sacrificing bespoke quality.",
                  },
                  {
                    title: "Built Different",
                    desc: "We reject industry standard templates. Every pixel is carved from the ground up for absolute uniqueness.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="pt-12 border-t border-outline-variant/30 reveal-on-scroll"
                  >
                    <h4 className="text-lg font-bold text-white mb-4 uppercase">
                      {item.title}
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="h-96 flex items-center justify-center bg-surface-container-lowest border-t border-white/5">
          <div className="text-center reveal-on-scroll">
            <button className="bg-white text-[#131313] px-12 py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#842bd2] hover:text-white">
              Start a project
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
