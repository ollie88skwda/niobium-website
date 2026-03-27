import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-8 md:px-24 py-12 bg-[#131313] border-t-[4px] border-[#474747]/40">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link href="/" className="font-display text-2xl text-white uppercase tracking-tighter hover:text-primary-fixed transition-colors">
          NIOBIUM
        </Link>

        <div className="flex gap-10">
          <a
            href="https://instagram.com/niobium.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-[0.1em] text-[0.6875rem] text-[#c6c6c6] hover:text-primary-fixed transition-colors duration-300"
          >
            INSTAGRAM
          </a>
          <Link
            href="/faq"
            className="uppercase tracking-[0.1em] text-[0.6875rem] text-[#c6c6c6] hover:text-primary-fixed transition-colors duration-300"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="uppercase tracking-[0.1em] text-[0.6875rem] text-[#c6c6c6] hover:text-primary-fixed transition-colors duration-300"
          >
            CONTACT
          </Link>
        </div>

        <div className="uppercase tracking-[0.1em] text-[0.6875rem] text-[#c6c6c6]">
          &copy; 2026 NIOBIUM AGENCY. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
