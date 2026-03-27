import RevealOnScroll from "@/components/RevealOnScroll";
import ReadyToAscend from "@/components/ReadyToAscend";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Niobium Agency | Social Media, SEO & Content Marketing",
  description:
    "You built something worth finding — we make sure they find it. Niobium delivers elite social media management, SEO strategy, and blog content for ambitious brands.",
};

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <main>
        {/* Hero Section — Full 100vh, button inside */}
        <section className="h-screen flex flex-col justify-center px-8 md:px-24 bg-black reveal-on-scroll active">
          <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-12">
              <h1 className="font-display font-normal text-white mb-12 uppercase text-[16vw] md:text-[15rem] leading-[0.7] tracking-[-0.05em]">
                NIOBIUM
              </h1>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <p className="font-body text-xl md:text-3xl text-white max-w-3xl tracking-tight font-medium leading-[1.15] uppercase">
                  You built something worth finding — We make sure They find it
                </p>
              </div>
              <div className="mt-12 flex justify-start">
                <Link href="/contact" className="px-12 py-6 bg-white text-black font-display text-2xl tracking-widest border-[4px] border-black hover:bg-primary-fixed hover:text-white transition-all chrome-glow-micro uppercase">
                  Work With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Strip */}
        <section className="py-6 bg-black text-white border-y-[4px] border-white/5 overflow-hidden reveal-on-scroll">
          <div className="flex justify-around items-center opacity-80 whitespace-nowrap">
            <span className="font-display text-xl tracking-widest px-8">ESTABLISHED 2025</span>
            <span className="font-display text-xl tracking-widest px-8">42+ LUXURY DEPLOYMENTS</span>
            <span className="font-display text-xl tracking-widest px-8">&quot;EXCEPTIONAL PRECISION&quot; — VOGUE</span>
            <span className="hidden md:inline font-display text-xl tracking-widest px-8">GLOBAL OPERATIONS</span>
          </div>
        </section>

        {/* Services Section — 3 cards */}
        <section className="py-32 px-8 md:px-24 bg-white reveal-on-scroll">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
              <h2 className="font-display text-8xl md:text-[12rem] leading-none tracking-tight text-black uppercase">
                SERVICES
              </h2>
              <span className="font-body text-[0.75rem] uppercase tracking-[0.3em] text-primary-fixed font-black mb-4">
                CORE CAPABILITIES
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "Social\nMedia",
                  desc: "Curated high-frequency presence that commands attention and defines brand status across digital ecosystems.",
                },
                {
                  num: "02",
                  title: "SEO\nStrategy",
                  desc: "Invisible engineering that ensures your brand resides at the summit of organic search hierarchy.",
                },
                {
                  num: "03",
                  title: "Blog\nContent",
                  desc: "Intellectual authority through deep-form narrative and data-driven editorial precision.",
                },
              ].map((service) => (
                <Link
                  href="/contact"
                  key={service.num}
                  className="bg-black p-10 flex flex-col justify-between min-h-[440px] border border-white transition-transform hover:-translate-y-2 hover:shadow-[6px_6px_0px_#842bd2]"
                >
                  <div>
                    <span className="font-mono text-3xl text-white/30 mb-12 block">
                      {service.num}
                    </span>
                    <h3 className="font-display text-5xl text-white mb-6 uppercase leading-[0.9]">
                      {service.title.split("\n").map((line, i, arr) => (
                        <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                      ))}
                    </h3>
                  </div>
                  <p className="font-mono text-sm text-white font-normal uppercase tracking-tight leading-relaxed">
                    {service.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-32 bg-black reveal-on-scroll">
          <div className="px-8 md:px-24">
            <div className="max-w-[1440px] mx-auto">
              <div className="mb-24 flex justify-between items-baseline">
                <h2 className="font-display text-8xl md:text-[12rem] leading-none tracking-tight text-white uppercase">
                  WORK
                </h2>
                <Link href="/contact" className="font-body text-[0.75rem] uppercase tracking-[0.3em] text-primary-fixed font-black border-b-4 border-primary-fixed cursor-pointer">
                  Start a Project
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    cat: "Campaign / Digital",
                    title: "Aetheris Luxury",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5lKFwv2aDrY1yU7xO10sqmeBujuTdxKD1yqLiQhagCPnP3jVQh_L2lIAl9WEDymDVGZtHBn3L-v70kEHo0GoYFdrjf0LtobwaDjfvny5yQ1-Qh4bjeCYnCMfRIKlwN_m9wrQ0pXh3CpI_UpdY7kW0J4g2qC40rzaqjpDesz3FftwXNDePn9_mYlUDHAVP8vaaJRmva_A3FG6PkTchTeEE48gAZD-MFycqlitU-n5AFrVBf0ESguhhm8C_fsz7stcIKRseRYd6nw",
                  },
                  {
                    cat: "Branding / Identity",
                    title: "Monolith Corp",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeAV6Vm5yGolPGSqzjweXmv7QJUNd8v4Nie42ka9kKYc3t9xuRsCqCcb3cShGzHufeyWq0jUaOWUk_VZ_TT6Fs9yJ3zBHvQamWoFrhDBcmpcExrC-wVH8wYvMy64TjSUEmFVUEfPBWGdRr2LUu95pNbDmB28G49z07dySFTZFvFvnqR2mt5vLRxrza4CfSwW5ehSzElJ6bu5bi1SuPTMqpPDq1buhK56dvICrlwT0i4mjK8mBCimdEw8kp30xdLelopRnLgQSrpA",
                  },
                  {
                    cat: "Product / UI",
                    title: "Quantum OS",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIAIOapDpBS3toHK9JJtdJr_HVuha-yFFQWj6v8yRQnB8W10viCUSwvNfU_-ueO8IS0if2ysGhq2LTqxag0QKaTGlvY5Fxk3hmVTAPSpmdVPLvizI4DIiGPkXyDVNJLNzsskbac6Pbr_Q40bh_gYX_lvdhulyRmLsnangmfsnHr604qfyqx3RuM2px7GxxoVtVpOSBrsyKibkAr9OgnLNIMtNYSMCVWVE8C8o8LUxL9x0WEiauXC3cLS0kwtwi1SZlWtvomTQtNg",
                  },
                  {
                    cat: "Content / Social",
                    title: "The Void Series",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgUB5cNAQL3L-t_7f-7ByEjpfdocJMkveOm4mWAf9jS4jHH12nZ9tKEckhdLKy9zSD8D_-NdkkkEaBD99RDzk6XOLopOZ5bhm6NoT1ECLJwEx-oVXgClwiSRN5ck0OAWhinQ_WfkkenQ6zFsdWmxzhADIEcqqU9G52YYAXYrVchFns02rlXZnBIR-H38U1nR2aGxOJAYof3s1fSyuHbO5OGw8nfGaH_1luX1H-mV6DiQo5BKN2Ss5rPGoH8cbEBd6WjMaGgNOhwQ",
                  },
                ].map((project) => (
                  <Link href="/contact" key={project.title} className="brutalist-card-white bg-white p-4 space-y-6 group block">
                    <div className="aspect-[4/5] overflow-hidden bg-black border-[4px] border-black relative">
                      <Image
                        alt={project.title}
                        className="object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
                        src={project.img}
                        fill
                        unoptimized
                      />
                    </div>
                    <div className="flex justify-between items-end pb-4 px-2">
                      <div>
                        <span className="font-body text-[0.7rem] text-black/50 uppercase tracking-[0.2em] font-black mb-1 block">
                          {project.cat}
                        </span>
                        <h4 className="font-display text-6xl text-black uppercase leading-none tracking-tight">
                          {project.title}
                        </h4>
                      </div>
                      <span className="material-symbols-outlined text-black text-5xl font-black">
                        arrow_outward
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 px-8 md:px-24 bg-white reveal-on-scroll">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
              <h2 className="font-display text-8xl md:text-[10rem] leading-none tracking-tight text-black uppercase">
                HOW IT WORKS
              </h2>
              <span className="font-body text-[0.75rem] uppercase tracking-[0.3em] text-primary-fixed font-black mb-4">
                THE PROCESS
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t-[4px] border-b-[4px] border-black">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We audit your current presence, define your target audience, and identify the gaps where your competitors are winning.",
                  border: "border-b-[4px] md:border-b-0 md:border-r-[4px]",
                },
                {
                  step: "02",
                  title: "Strategy",
                  desc: "A bespoke content and SEO roadmap built around your goals — no templates, no recycled playbooks.",
                  border: "border-b-[4px] md:border-b-0 md:border-r-[4px]",
                },
                {
                  step: "03",
                  title: "Execution",
                  desc: "We deploy. Weekly content, monthly SEO reports, and continuous optimisation until your brand owns its space.",
                  border: "",
                },
              ].map((item) => (
                <div key={item.step} className={`p-12 border-black ${item.border}`}>
                  <span className="font-mono text-5xl text-black/20 block mb-8">{item.step}</span>
                  <h3 className="font-display text-5xl text-black uppercase mb-6">{item.title}</h3>
                  <p className="font-mono text-sm text-black/60 uppercase leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ReadyToAscend />
      </main>
    </>
  );
}
