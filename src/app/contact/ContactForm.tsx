"use client";

import { useState } from "react";
import Link from "next/link";
import { sendInquiry } from "./actions";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const result = await sendInquiry(formData);
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col justify-center h-full py-16">
        <span className="material-symbols-outlined text-6xl text-primary-fixed mb-8">check_circle</span>
        <h2 className="font-display text-6xl text-white uppercase mb-4">Received.</h2>
        <p className="font-mono text-white/60 text-sm uppercase tracking-widest mb-12">
          We&apos;ll review your inquiry and be in touch within 24–48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-display text-lg uppercase tracking-widest hover:bg-primary-fixed hover:text-white transition-all border-[3px] border-white"
          >
            Back to Home
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-3 px-8 py-4 text-white font-display text-lg uppercase tracking-widest hover:text-primary-fixed transition-colors border-[3px] border-white/20 hover:border-primary-fixed"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <label className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-white/60 font-bold block mb-4">
            Name
          </label>
          <input
            name="name"
            required
            className="w-full bg-transparent border-t-0 border-x-0 border-b-2 border-white/30 focus:border-primary-fixed focus:ring-0 px-0 py-3 text-white placeholder:text-white/20 transition-all duration-300 font-mono text-sm uppercase outline-none"
            placeholder="John Doe"
            type="text"
          />
        </div>
        <div>
          <label className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-white/60 font-bold block mb-4">
            Business Name
          </label>
          <input
            name="businessName"
            className="w-full bg-transparent border-t-0 border-x-0 border-b-2 border-white/30 focus:border-primary-fixed focus:ring-0 px-0 py-3 text-white placeholder:text-white/20 transition-all duration-300 font-mono text-sm uppercase outline-none"
            placeholder="Acme Corp"
            type="text"
          />
        </div>
      </div>
      <div>
        <label className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-white/60 font-bold block mb-4">
          Email Address
        </label>
        <input
          name="email"
          required
          className="w-full bg-transparent border-t-0 border-x-0 border-b-2 border-white/30 focus:border-primary-fixed focus:ring-0 px-0 py-3 text-white placeholder:text-white/20 transition-all duration-300 font-mono text-sm uppercase outline-none"
          placeholder="john@acme.com"
          type="email"
        />
      </div>
      <div>
        <label className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-white/60 font-bold block mb-4">
          Service needed
        </label>
        <select
          name="service"
          className="w-full bg-transparent border-t-0 border-x-0 border-b-2 border-white/30 focus:border-primary-fixed focus:ring-0 px-0 py-3 text-white transition-all duration-300 font-mono text-sm uppercase outline-none"
          defaultValue=""
        >
          <option value="" disabled className="bg-[#131313]">Select a service</option>
          <option value="Social Media" className="bg-[#131313]">Social Media</option>
          <option value="SEO Strategy" className="bg-[#131313]">SEO Strategy</option>
          <option value="Blog Content" className="bg-[#131313]">Blog Content</option>
          <option value="Strategic Consulting" className="bg-[#131313]">Strategic Consulting</option>
        </select>
      </div>
      <div>
        <label className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-white/60 font-bold block mb-4">
          Message
        </label>
        <textarea
          name="message"
          required
          className="w-full bg-transparent border-t-0 border-x-0 border-b-2 border-white/30 focus:border-primary-fixed focus:ring-0 px-0 py-3 text-white placeholder:text-white/20 transition-all duration-300 font-mono text-sm uppercase resize-none outline-none"
          placeholder="Tell us about your project..."
          rows={4}
        />
      </div>
      {status === "error" && (
        <p className="font-mono text-red-400 text-xs uppercase tracking-widest">{errorMsg}</p>
      )}
      <div className="pt-4">
        <button
          className="group w-full md:w-auto px-16 py-6 bg-white text-black font-display text-2xl uppercase tracking-widest border-[4px] border-white hover:bg-primary-fixed hover:border-primary-fixed hover:text-white transition-all chrome-glow-micro flex items-center justify-center gap-6 disabled:opacity-50"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Inquiry"}
          <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>
    </form>
  );
}
