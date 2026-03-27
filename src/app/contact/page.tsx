import RevealOnScroll from "@/components/RevealOnScroll";
import ReadyToAscend from "@/components/ReadyToAscend";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | Niobium Agency",
  description: "Start your project with Niobium Agency. Get in touch for social media management, SEO strategy, or content services. We respond within 24–48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <RevealOnScroll />
      <main>
        {/* Hero + Form side by side on black */}
        <section className="min-h-screen w-full flex items-center bg-black py-24">
          <div className="max-w-7xl mx-auto w-full px-8 pt-16 lg:grid lg:grid-cols-12 lg:gap-16 items-center">

            {/* Left: Heading + contact info */}
            <div className="lg:col-span-6 mb-16 lg:mb-0">
              <h1 className="font-display text-[22vw] md:text-[16rem] leading-[0.8] font-normal tracking-tighter text-white uppercase">
                Let&apos;s<br />talk.
              </h1>
              <div className="mt-12 space-y-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 block mb-1">
                    Email
                  </span>
                  <a
                    className="font-display text-3xl text-white hover:text-primary-fixed transition-colors duration-300 uppercase"
                    href="mailto:niobium.co@gmail.com"
                  >
                    niobium.co@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 block mb-1">
                    Social
                  </span>
                  <a
                    className="font-display text-3xl text-white hover:text-primary-fixed transition-colors duration-300 uppercase"
                    href="https://instagram.com/niobium.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @niobium.studio
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form — fades in after 1s */}
            <div
              className="lg:col-span-6"
              style={{ animation: "fadeInUp 0.8s ease forwards 1s", opacity: 0 }}
            >
              <ContactForm />
            </div>

          </div>
        </section>

        {/* Social Proof Strip */}
        <section className="py-6 bg-black text-white border-y-[4px] border-white/5 overflow-hidden">
          <div className="flex justify-around items-center opacity-80 whitespace-nowrap">
            <span className="font-display text-2xl tracking-widest px-8">ESTABLISHED 2025</span>
            <span className="font-display text-2xl tracking-widest px-8">42+ LUXURY DEPLOYMENTS</span>
            <span className="font-display text-2xl tracking-widest px-8">&quot;EXCEPTIONAL PRECISION&quot; — VOGUE</span>
            <span className="hidden md:inline font-display text-2xl tracking-widest px-8">GLOBAL OPERATIONS</span>
          </div>
        </section>

        {/* Inquiry Details */}
        <div className="w-full bg-white py-32 border-b-[4px] border-black">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="max-w-xs">
                <p className="font-mono text-[0.7rem] text-black uppercase tracking-[0.3em] font-bold mb-4">
                  Inquiry response time
                </p>
                <p className="font-mono text-black/60 text-xs leading-relaxed uppercase">
                  We review every inquiry within 24&ndash;48 hours. For urgent
                  matters, please mention it in the subject line.
                </p>
              </div>
              <div className="max-w-xs">
                <p className="font-mono text-[0.7rem] text-black uppercase tracking-[0.3em] font-bold mb-4">
                  Global Reach
                </p>
                <p className="font-mono text-black/60 text-xs leading-relaxed uppercase">
                  Operating from London and Berlin. Collaborating with visionaries
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ReadyToAscend />
      </main>
    </>
  );
}
