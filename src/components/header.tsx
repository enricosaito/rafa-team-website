"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../public/images/logo.png";
import { CtaButton } from "./cta-button";

const links = [
  { href: "#resultados", label: "Resultados" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#rafa", label: "Quem é o Rafa" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-lg"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Silva Team — início">
          <Image src={logo} alt="Silva Team" className="h-10 w-auto" priority />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-cream/70 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <CtaButton size="sm" className="max-lg:hidden">Quero fazer parte</CtaButton>
      </div>
    </header>
  );
}
