import RevealOnScroll from "@/components/RevealOnScroll";
import ReadyToAscend from "@/components/ReadyToAscend";

export const metadata = {
  title: "FAQ | Niobium Agency",
  description:
    "Answers to common questions about working with Niobium Agency — our services, timelines, pricing structure, and what sets us apart.",
};

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with ambitious brands across all industries — from e-commerce and fashion to tech startups and professional services. If you're serious about growth, we're serious about you.",
  },
  {
    q: "How long before I see results from SEO?",
    a: "SEO is a long game. Most clients see measurable ranking improvements within 3–6 months. Social media and content marketing can generate engagement within weeks. We set honest expectations from day one.",
  },
  {
    q: "Do you offer one-off projects or retainers?",
    a: "Both. We offer one-off strategy audits and campaign builds, as well as monthly retainers for ongoing social media management, SEO, and content publishing.",
  },
  {
    q: "What makes Niobium different from other agencies?",
    a: "No account managers playing telephone. You work directly with the people doing the work. We're lean, fast, and obsessed with precision — no bloat, no buzzwords.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the contact form and tell us about your project. We'll review your inquiry within 24–48 hours and schedule a discovery call to map out next steps.",
  },
  {
    q: "What does a typical retainer include?",
    a: "Retainers are scoped per client. A typical engagement includes weekly content publishing, monthly SEO audits and reporting, and a dedicated strategy session each quarter. We tailor everything to your goals.",
  },
];

export default function FAQPage() {
  return (
    <>
      <RevealOnScroll />
      <main>
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 bg-black reveal-on-scroll active pt-32 pb-16">
          <div className="max-w-[1440px] mx-auto w-full">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-fixed block mb-8">
              COMMON QUESTIONS
            </span>
            <h1 className="font-display text-[18vw] md:text-[12rem] font-normal text-white leading-[0.8] tracking-tighter uppercase mb-24">
              FAQ
            </h1>
            <div className="divide-y divide-white/10">
              {faqs.map((item) => (
                <div key={item.q} className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <h2 className="font-display text-3xl md:text-4xl text-white uppercase leading-tight">
                    {item.q}
                  </h2>
                  <p className="font-mono text-sm text-white/60 uppercase leading-relaxed self-center">
                    {item.a}
                  </p>
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
