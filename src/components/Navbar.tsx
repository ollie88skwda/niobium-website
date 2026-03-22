"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "WORK" },
  { href: "/about", label: "STUDIO" },
  { href: "#", label: "JOURNAL" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-[#131313]/80 backdrop-blur-xl border-b border-[#474747]/10">
      <Link
        href="/"
        className="text-xl font-bold tracking-tighter text-white"
      >
        NIOBIUM
      </Link>
      <div className="hidden md:flex gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`uppercase tracking-[0.1em] text-[0.6875rem] font-medium transition-colors duration-200 ${
              isActive(link.href)
                ? "text-white after:content-[''] after:block after:w-1 after:h-1 after:bg-[#842bd2] after:mx-auto after:mt-1"
                : "text-[#c6c6c6] hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <span className="material-symbols-outlined text-white">menu</span>
      </div>
    </nav>
  );
}
