import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-20 bg-surface reveal-on-scroll relative">
          <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-10">
              <h1 className="text-[12vw] md:text-[10rem] leading-[0.85] font-bold tracking-tighter text-white mb-12">
                NIOBIUM
              </h1>
              <p className="text-lg md:text-2xl text-on-surface-variant max-w-2xl mb-16 tracking-tight font-light">
                Architecting digital dominance through brutalist precision and
                high-potency creative strategy.
              </p>
              <div className="flex">
                <button className="px-10 py-4 border border-white/20 text-white uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:border-white hover:bg-white hover:text-black chrome-glow">
                  WORK WITH US
                </button>
              </div>
            </div>
          </div>
          {/* Progress Line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
            <div className="h-full w-1/4 bg-primary-fixed/30"></div>
          </div>
        </section>

        {/* Social Proof Strip */}
        <section className="py-12 bg-surface-container-lowest border-y border-white/5 overflow-hidden reveal-on-scroll">
          <div className="flex justify-around items-center opacity-30">
            <span className="text-[0.6875rem] uppercase tracking-[0.3em]">
              ESTABLISHED 2024
            </span>
            <span className="text-[0.6875rem] uppercase tracking-[0.3em]">
              42+ LUXURY DEPLOYMENTS
            </span>
            <span className="text-[0.6875rem] uppercase tracking-[0.3em]">
              &quot;EXCEPTIONAL PRECISION&quot; — VOGUE
            </span>
            <span className="hidden md:inline text-[0.6875rem] uppercase tracking-[0.3em]">
              GLOBAL OPERATIONS
            </span>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-8 md:px-24 bg-surface reveal-on-scroll">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white">
                SERVICES
              </h2>
              <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-primary-fixed opacity-60">
                CORE CAPABILITIES
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-white/10">
              {[
                {
                  num: "01",
                  title: "Social Media",
                  desc: "Curated high-frequency presence that commands attention and defines brand status across digital ecosystems.",
                },
                {
                  num: "02",
                  title: "SEO Strategy",
                  desc: "Invisible engineering that ensures your brand resides at the summit of organic search hierarchy.",
                },
                {
                  num: "03",
                  title: "Blog Content",
                  desc: "Intellectual authority through deep-form narrative and data-driven editorial precision.",
                },
                {
                  num: "04",
                  title: "Newsletters",
                  desc: "Direct, intimate, and highly-designed communication channels for your inner circle.",
                },
              ].map((service) => (
                <div
                  key={service.num}
                  className="group p-10 border-r border-b border-white/10 hover:bg-surface-container transition-colors duration-300"
                >
                  <span className="text-[0.6875rem] text-primary-fixed/60 mb-12 block">
                    {service.num}
                  </span>
                  <h3 className="text-2xl text-white mb-6 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-32 bg-surface-container-lowest reveal-on-scroll">
          <div className="px-8 md:px-24">
            <div className="max-w-[1440px] mx-auto">
              <div className="mb-24 flex justify-between items-baseline">
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white">
                  WORK
                </h2>
                <a className="text-[0.6875rem] uppercase tracking-[0.2em] border-b border-outline-variant hover:border-white transition-colors cursor-pointer">
                  View All Projects
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {[
                  {
                    cat: "Campaign / Digital",
                    title: "AETHERIS LUXURY",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5lKFwv2aDrY1yU7xO10sqmeBujuTdxKD1yqLiQhagCPnP3jVQh_L2lIAl9WEDymDVGZtHBn3L-v70kEHo0GoYFdrjf0LtobwaDjfvny5yQ1-Qh4bjeCYnCMfRIKlwN_m9wrQ0pXh3CpI_UpdY7kW0J4g2qC40rzaqjpDesz3FftwXNDePn9_mYlUDHAVP8vaaJRmva_A3FG6PkTchTeEE48gAZD-MFycqlitU-n5AFrVBf0ESguhhm8C_fsz7stcIKRseRYd6nw",
                    offset: false,
                  },
                  {
                    cat: "Branding / Identity",
                    title: "MONOLITH CORP",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeAV6Vm5yGolPGSqzjweXmv7QJUNd8v4Nie42ka9kKYc3t9xuRsCqCcb3cShGzHufeyWq0jUaOWUk_VZ_TT6Fs9yJ3zBHvQamWoFrhDBcmpcExrC-wVH8wYvMy64TjSUEmFVUEfPBWGdRr2LUu95pNbDmB28G49z07dySFTZFvFvnqR2mt5vLRxrza4CfSwW5ehSzElJ6bu5bi1SuPTMqpPDq1buhK56dvICrlwT0i4mjK8mBCimdEw8kp30xdLelopRnLgQSrpA",
                    offset: true,
                  },
                  {
                    cat: "Product / UI",
                    title: "QUANTUM OS",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIAIOapDpBS3toHK9JJtdJr_HVuha-yFFQWj6v8yRQnB8W10viCUSwvNfU_-ueO8IS0if2ysGhq2LTqxag0QKaTGlvY5Fxk3hmVTAPSpmdVPLvizI4DIiGPkXyDVNJLNzsskbac6Pbr_Q40bh_gYX_lvdhulyRmLsnangmfsnHr604qfyqx3RuM2px7GxxoVtVpOSBrsyKibkAr9OgnLNIMtNYSMCVWVE8C8o8LUxL9x0WEiauXC3cLS0kwtwi1SZlWtvomTQtNg",
                    offset: false,
                  },
                  {
                    cat: "Content / Social",
                    title: "THE VOID SERIES",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgUB5cNAQL3L-t_7f-7ByEjpfdocJMkveOm4mWAf9jS4jHH12nZ9tKEckhdLKy9zSD8D_-NdkkkEaBD99RDzk6XOLopOZ5bhm6NoT1ECLJwEx-oVXgClwiSRN5ck0OAWhinQ_WfkkenQ6zFsdWmxzhADIEcqqU9G52YYAXYrVchFns02rlXZnBIR-H38U1nR2aGxOJAYof3s1fSyuHbO5OGw8nfGaH_1luX1H-mV6DiQo5BKN2Ss5rPGoH8cbEBd6WjMaGgNOhwQ",
                    offset: true,
                  },
                ].map((project) => (
                  <div
                    key={project.title}
                    className={`space-y-6 group ${project.offset ? "md:mt-32" : ""}`}
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-surface relative">
                      <Image
                        alt={project.title}
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
                        src={project.img}
                        fill
                        unoptimized
                      />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[0.6875rem] text-primary-fixed/40 uppercase tracking-widest mb-2 block">
                          {project.cat}
                        </span>
                        <h4 className="text-3xl text-white uppercase tracking-tighter">
                          {project.title}
                        </h4>
                      </div>
                      <span className="material-symbols-outlined text-white/30 group-hover:text-white transition-colors">
                        north_east
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-64 bg-surface text-center px-8 reveal-on-scroll">
          <h2 className="text-4xl md:text-[6rem] leading-none mb-12 tracking-tighter uppercase">
            Ready to Ascend?
          </h2>
          <div className="flex justify-center">
            <button className="group flex items-center gap-4 bg-white text-black py-6 px-12 transition-all hover:bg-white/90">
              <span className="uppercase tracking-[0.2em] font-bold text-sm">
                Initiate Project
              </span>
              <span className="material-symbols-outlined font-bold">
                arrow_forward
              </span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
