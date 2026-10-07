"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "./cta-button";

/** Thumb-reachable signup bar on small screens, shown between the hero and the final CTA. */
export function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const final = document.getElementById("inscricao");
    let frame = 0;
    const update = () => {
      frame = 0;
      const pastHero = hero ? hero.getBoundingClientRect().bottom < 80 : true;
      const atFinal = final
        ? final.getBoundingClientRect().top < window.innerHeight * 0.85
        : false;
      setShow(pastHero && !atFinal);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!show}
      inert={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/85 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <CtaButton className="w-full justify-center">Quero fazer parte</CtaButton>
    </div>
  );
}
