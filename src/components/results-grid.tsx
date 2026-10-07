"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react";

const INITIAL = 6;

function Labels({ size = "sm" }: { size?: "sm" | "lg" }) {
  const cls =
    size === "sm"
      ? "p-2 text-[9px] sm:p-3 sm:text-[10px]"
      : "p-4 text-xs";
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 flex justify-between font-bold tracking-[0.2em] uppercase ${cls}`}
    >
      <span className="rounded-full bg-ink/70 px-2.5 py-1 backdrop-blur">Antes</span>
      <span className="rounded-full bg-brand px-2.5 py-1 text-ink">Depois</span>
    </div>
  );
}

export function ResultsGrid({ images }: { images: StaticImageData[] }) {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const visible = expanded ? images : images.slice(0, INITIAL);
  const go = (dir: 1 | -1) =>
    setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length));

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {visible.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Ampliar transformação ${i + 1}`}
              className="group relative block w-full overflow-hidden rounded-xl bg-ink-3 ring-1 ring-white/10 transition-[box-shadow] duration-300 hover:ring-brand/60 sm:rounded-2xl"
            >
              <Image
                src={img}
                alt={`Transformação de aluna do Silva Team — antes e depois ${i + 1}`}
                placeholder="blur"
                priority={i < 2}
                sizes="(min-width: 1024px) 400px, 50vw"
                className="aspect-[800/740] h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <Labels />
            </button>
          </li>
        ))}
      </ul>

      {!expanded && images.length > INITIAL && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold tracking-wide uppercase transition-colors hover:border-brand hover:text-brand active:scale-[0.97]"
          >
            <Plus className="size-4" />
            Ver mais resultados
          </button>
        </div>
      )}

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
        className="m-auto max-h-none max-w-none bg-transparent p-4 text-cream backdrop:bg-ink/90 backdrop:backdrop-blur-sm"
      >
        {open !== null && (
          <div className="relative w-[min(92vw,800px)]">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={images[open]}
                alt={`Transformação de aluna do Silva Team — antes e depois ${open + 1}`}
                sizes="(min-width: 800px) 800px, 92vw"
                className="h-auto max-h-[80svh] w-full object-contain"
              />
              <Labels size="lg" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Resultado anterior"
                className="grid size-12 place-items-center rounded-full border border-white/20 transition-colors hover:border-brand hover:text-brand active:scale-95"
              >
                <ArrowLeft className="size-5" />
              </button>
              <span className="text-sm tabular-nums text-cream/60">
                {open + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próximo resultado"
                className="grid size-12 place-items-center rounded-full border border-white/20 transition-colors hover:border-brand hover:text-brand active:scale-95"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Fechar"
              className="absolute -top-14 right-0 grid size-10 place-items-center rounded-full bg-cream text-ink shadow-lg transition-transform active:scale-95"
            >
              <X className="size-5" />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
