"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ResultsCarousel({ images }: { images: StaticImageData[] }) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-4 [scrollbar-width:none] sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <figure
            key={img.src}
            data-card
            className="group relative w-[82vw] shrink-0 snap-start overflow-hidden rounded-2xl bg-ink-3 ring-1 ring-white/10 sm:w-[420px]"
          >
            <Image
              src={img}
              alt={`Transformação de aluna do Silva Team — antes e depois ${i + 1}`}
              placeholder="blur"
              sizes="(min-width: 640px) 420px, 82vw"
              className="aspect-[800/740] h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-3 text-[10px] font-bold tracking-[0.2em] uppercase">
              <span className="rounded-full bg-ink/70 px-2.5 py-1 backdrop-blur">
                Antes
              </span>
              <span className="rounded-full bg-brand px-2.5 py-1 text-ink">
                Depois
              </span>
            </div>
          </figure>
        ))}
      </div>
      <div className="mx-auto mt-6 flex max-w-7xl justify-end gap-3 px-5 sm:px-8">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Resultado anterior"
          className="grid size-12 place-items-center rounded-full border border-white/15 transition-colors hover:border-brand hover:text-brand active:scale-95"
        >
          <ArrowLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Próximo resultado"
          className="grid size-12 place-items-center rounded-full border border-white/15 transition-colors hover:border-brand hover:text-brand active:scale-95"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
