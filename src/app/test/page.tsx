import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Test | Niobium Agency",
  description: "Test page.",
};

export default function TestPage() {
  return (
    <>
      <RevealOnScroll />
      <main>
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 bg-surface">
          <div className="max-w-7xl mx-auto w-full reveal-on-scroll">
            <span className="uppercase tracking-[0.1em] text-[0.6875rem] text-primary-fixed mb-8 block">
              Test Page
            </span>
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-[-0.02em] leading-none mb-12">
              THIS IS A <br /> TEST PAGE.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
              If you can see this, the routing works. This page was added via the GitHub MCP.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
