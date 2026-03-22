export default function Footer() {
  return (
    <footer className="w-full px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-[#131313] border-t border-[#474747]/20">
      <div className="text-lg font-bold text-white uppercase tracking-tighter">
        NIOBIUM
      </div>
      <div className="uppercase tracking-[0.1em] text-[0.6875rem] text-[#c6c6c6]">
        &copy; 2024 NIOBIUM AGENCY. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-12">
        <a
          className="uppercase tracking-[0.1em] text-[0.6875rem] text-[#c6c6c6] hover:text-[#842bd2] transition-colors duration-300"
          href="#"
        >
          INSTAGRAM
        </a>
        <a
          className="uppercase tracking-[0.1em] text-[0.6875rem] text-[#c6c6c6] hover:text-[#842bd2] transition-colors duration-300"
          href="#"
        >
          LINKEDIN
        </a>
        <a
          className="uppercase tracking-[0.1em] text-[0.6875rem] text-[#c6c6c6] hover:text-[#842bd2] transition-colors duration-300"
          href="#"
        >
          TWITTER
        </a>
      </div>
      <div className="hidden md:block">
        <div className="w-2 h-2 rounded-full bg-[#842bd2]/40"></div>
      </div>
    </footer>
  );
}
