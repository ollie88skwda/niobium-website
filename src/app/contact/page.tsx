export const metadata = {
  title: "Contact Us | Niobium Agency",
  description: "Let's talk. Tell us about your vision.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-8 lg:grid lg:grid-cols-12 lg:gap-24">
        {/* Left Column */}
        <div className="lg:col-span-5 mb-16 lg:mb-0">
          <h1 className="text-[5rem] md:text-[7rem] leading-[0.9] font-bold tracking-tighter text-white mb-12 opacity-0 animate-fade-in-up">
            Let&apos;s talk.
          </h1>
          <p className="text-on-surface-variant text-lg max-w-sm leading-relaxed opacity-0 animate-fade-in-up animate-delay-100">
            We partner with ambitious brands to build sharp, monolithic digital
            experiences. Tell us about your vision.
          </p>
          <div className="mt-24 space-y-4 opacity-0 animate-fade-in-up animate-delay-200">
            <div className="group">
              <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-outline opacity-50 block mb-1">
                Email
              </span>
              <a
                className="text-xl text-white hover:text-primary-fixed transition-colors duration-300"
                href="mailto:hello@niobium.agency"
              >
                hello@niobium.agency
              </a>
            </div>
            <div className="group pt-4">
              <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-outline opacity-50 block mb-1">
                Social
              </span>
              <a
                className="text-xl text-white hover:text-primary-fixed transition-colors duration-300"
                href="#"
              >
                @niobium.agency
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative opacity-0 animate-fade-in-up animate-delay-100">
                <label className="text-[0.6875rem] uppercase tracking-[0.2em] text-outline block mb-4">
                  Name
                </label>
                <input
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:border-primary-fixed focus:ring-0 px-0 py-4 text-white placeholder:text-surface-container-highest transition-all duration-300"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="relative opacity-0 animate-fade-in-up animate-delay-200">
                <label className="text-[0.6875rem] uppercase tracking-[0.2em] text-outline block mb-4">
                  Business Name
                </label>
                <input
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:border-primary-fixed focus:ring-0 px-0 py-4 text-white placeholder:text-surface-container-highest transition-all duration-300"
                  placeholder="Acme Corp"
                  type="text"
                />
              </div>
            </div>
            <div className="relative opacity-0 animate-fade-in-up animate-delay-300">
              <label className="text-[0.6875rem] uppercase tracking-[0.2em] text-outline block mb-4">
                Email Address
              </label>
              <input
                className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:border-primary-fixed focus:ring-0 px-0 py-4 text-white placeholder:text-surface-container-highest transition-all duration-300"
                placeholder="john@acme.com"
                type="email"
              />
            </div>
            <div className="relative opacity-0 animate-fade-in-up animate-delay-400">
              <label className="text-[0.6875rem] uppercase tracking-[0.2em] text-outline block mb-4">
                Service needed
              </label>
              <select className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:border-primary-fixed focus:ring-0 px-0 py-4 text-white transition-all duration-300">
                <option className="bg-surface" disabled value="">
                  Select a service
                </option>
                <option className="bg-surface" value="branding">
                  Brand Identity
                </option>
                <option className="bg-surface" value="digital">
                  Digital Product Design
                </option>
                <option className="bg-surface" value="development">
                  Creative Development
                </option>
                <option className="bg-surface" value="consulting">
                  Strategic Consulting
                </option>
              </select>
            </div>
            <div className="relative opacity-0 animate-fade-in-up animate-delay-500">
              <label className="text-[0.6875rem] uppercase tracking-[0.2em] text-outline block mb-4">
                Message
              </label>
              <textarea
                className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:border-primary-fixed focus:ring-0 px-0 py-4 text-white placeholder:text-surface-container-highest transition-all duration-300 resize-none"
                placeholder="Tell us about your project..."
                rows={4}
              />
            </div>
            <div className="pt-8 opacity-0 animate-fade-in-up animate-delay-500">
              <button
                className="group relative w-full md:w-auto px-16 py-6 bg-white text-on-primary font-bold uppercase tracking-widest text-xs hover:bg-primary-fixed hover:text-white transition-all duration-300 flex items-center justify-center gap-4"
                type="submit"
              >
                Send Inquiry
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="w-full bg-surface-container-lowest py-32 mt-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs">
              <p className="text-[0.6rem] text-outline uppercase tracking-[0.3em] mb-4">
                Inquiry response time
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                We review every inquiry within 24&ndash;48 hours. For urgent
                matters, please mention it in the subject line.
              </p>
            </div>
            <div className="max-w-xs">
              <p className="text-[0.6rem] text-outline uppercase tracking-[0.3em] mb-4">
                Global Reach
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Operating from London and Berlin. Collaborating with visionaries
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
