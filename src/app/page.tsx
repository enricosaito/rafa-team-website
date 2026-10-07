import Image from "next/image";
import { Header } from "@/components/header";
import { CtaButton } from "@/components/cta-button";
import { ResultsGrid } from "@/components/results-grid";
import { MobileCta } from "@/components/mobile-cta";
import { RevealObserver } from "@/components/reveal";

import logo from "../../public/images/logo.png";
import rafaTraining from "../../public/images/rafa-training.png";
import rafaPortrait from "../../public/images/rafa-portrait.png";
import r01 from "../../public/images/results/01.png";
import r02 from "../../public/images/results/02.png";
import r03 from "../../public/images/results/03.png";
import r04 from "../../public/images/results/04.png";
import r05 from "../../public/images/results/05.png";
import r06 from "../../public/images/results/06.png";
import r07 from "../../public/images/results/07.png";
import r08 from "../../public/images/results/08.png";
import r09 from "../../public/images/results/09.png";
import r10 from "../../public/images/results/10.png";
import r11 from "../../public/images/results/11.png";
import r12 from "../../public/images/results/12.png";

const results = [r01, r02, r03, r04, r05, r06, r07, r08, r09, r10, r11, r12];

const steps = [
  { title: "Conte pra gente sobre você", text: "Anamnese + fotos para conhecermos seu momento, rotina e objetivo." },
  { title: "Rafa analisa seu caso", text: "Análise individual para definir a sua estratégia." },
  { title: "Receba sua dieta e seu treino", text: "Protocolos individualizados pra você e construídos para trabalharem juntos." },
  { title: "Fale diretamente com o Rafa", text: "Contato direto pelo WhatsApp durante todo o acompanhamento." },
  { title: "Atualize sua evolução", text: "Peso + fotos + feedback toda semana." },
  { title: "Ajuste. Evolua. Repita.", text: "Dieta e treino ajustados conforme a sua evolução." },
];

const tags = ["Treino", "Nutrição", "Estratégia", "Acompanhamento"];

function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`mb-5 flex items-center gap-3 text-xs ${center ? "justify-center" : ""} font-semibold tracking-[0.25em] text-brand uppercase`}>
      <span className={`h-px w-8 shrink-0 bg-brand ${center ? "max-sm:hidden" : ""}`} aria-hidden />
      {children}
    </p>
  );
}

function Marquee() {
  const row = [...tags, ...tags, ...tags];
  return (
    <div className="relative overflow-hidden border-y border-ink bg-brand py-4 text-ink">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
            {row.map((t, i) => (
              <span
                key={i}
                className="flex items-center font-display text-2xl tracking-wide uppercase sm:text-3xl"
              >
                <span className="px-6">{t}</span>
                <span className="text-ink/40">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Header />
      <MobileCta />

      <main id="top">
        {/* HERO */}
        <section id="hero" className="grain relative isolate overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-40 right-[-10%] -z-10 size-[720px] rounded-full bg-brand/25 blur-[140px]"
          />
          <div
            data-reveal
            style={{ "--delay": "200ms" } as React.CSSProperties}
            className="hero-photo absolute inset-x-0 top-0 -z-10 h-[72svh] lg:inset-x-auto lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[55%]"
          >
            <Image
              src={rafaTraining}
              alt="Rafa Silva treinando na Silva Gym"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 55vw, 90vw"
              className="h-full w-full object-cover object-[60%_center] opacity-60 lg:opacity-100"
            />
          </div>
          <div className="mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pt-28 pb-16 sm:px-8 lg:items-center lg:pt-20">
            <div className="lg:max-w-[52%]">
              <h1
                data-reveal
                style={{ "--delay": "80ms" } as React.CSSProperties}
                className="font-display text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.92] tracking-tight uppercase"
              >
                A melhor consultoria online{" "}
                <span className="text-brand">está de volta.</span>
              </h1>
              <p
                data-reveal
                style={{ "--delay": "160ms" } as React.CSSProperties}
                className="mt-8 max-w-xl text-lg leading-relaxed text-cream/70"
              >
                Todo o universo SILVA começou aqui. Milhares de vidas já foram
                transformadas através de protocolos individualizados de dieta e
                treino, acompanhamento próximo e o método do Rafa.
              </p>
              <div
                data-reveal
                style={{ "--delay": "240ms" } as React.CSSProperties}
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6"
              >
                <CtaButton>Quero fazer parte</CtaButton>
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl text-brand">+3.000</span>
                  <span className="text-sm leading-tight text-cream/60">
                    alunos
                    <br />
                    transformados
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* RESULTS */}
        <section id="resultados" className="bg-ink-2 py-24 lg:py-32">
          <div className="mx-auto mb-14 max-w-7xl px-5 sm:px-8">
            <div data-reveal className="max-w-2xl">
              <Eyebrow>Resultados reais</Eyebrow>
              <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] uppercase">
                Queremos mudar vidas.{" "}
                <span className="text-brand">Você vem com a gente?</span>
              </h2>
            </div>
          </div>
          <div data-reveal className="mx-auto max-w-7xl px-5 sm:px-8">
            <ResultsGrid images={results} />
          </div>
          <div data-reveal className="mt-12 flex justify-center px-5">
            <CtaButton>Quero fazer parte</CtaButton>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="como-funciona" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div data-reveal className="max-w-3xl">
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] uppercase">
              Do seu primeiro dia à sua evolução,{" "}
              <span className="text-brand">você será acompanhada pelo Rafa.</span>
            </h2>
          </div>

          <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                style={{ "--delay": `${(i % 3) * 80}ms` } as React.CSSProperties}
                className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-2 p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-brand/50"
              >
                <span className="font-display text-7xl leading-none text-brand/90">
                  0{i + 1}
                </span>
                <h3 className="mt-8 font-display text-2xl tracking-wide uppercase">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-cream/60">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ABOUT RAFA */}
        <section id="rafa" className="relative overflow-hidden bg-cream text-ink">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
            <div data-reveal className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 -z-0 rotate-3 rounded-[2rem] bg-brand" aria-hidden />
              <Image
                src={rafaPortrait}
                alt="Rafa Silva, criador do Silva Team"
                placeholder="blur"
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover"
              />
            </div>
            <div data-reveal style={{ "--delay": "120ms" } as React.CSSProperties}>
              <Eyebrow>Quem está por trás do método?</Eyebrow>
              <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] uppercase">
                Rafa Silva
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
                <p className="font-semibold text-ink">
                  Antes de existir a SILVA GYM, já existia o método.
                </p>
                <p>
                  Foi através da consultoria online que Rafa começou a acompanhar
                  de perto a transformação de milhares de pessoas, unindo
                  protocolos individualizados de dieta e treino a um
                  acompanhamento constante da evolução de cada aluno.
                </p>
                <p>
                  A consultoria cresceu até ultrapassar{" "}
                  <strong className="text-ink">1.000 alunos ativos simultaneamente</strong>{" "}
                  e mais de <strong className="text-ink">3.000 alunos</strong> — e foi
                  ali que começou a história que, anos depois, daria origem a todo
                  o universo SILVA.
                </p>
                <p>
                  Hoje, depois de transformar sua forma de enxergar treinamento em
                  uma das maiores redes de academias em expansão do país, Rafa
                  volta às origens. Mas dessa vez, de um jeito diferente.
                </p>
              </div>
              <p className="mt-8 font-display text-3xl uppercase">
                O Silva Team está de volta.{" "}
                <span className="text-brand">E Rafa também.</span>
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="inscricao" className="grain relative isolate overflow-hidden">
          <div
            aria-hidden
            className="absolute bottom-[-40%] left-1/2 -z-10 size-[900px] -translate-x-1/2 rounded-full bg-brand/30 blur-[160px]"
          />
          <div data-reveal className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 lg:py-40">
            <Eyebrow center>Todo o universo Silva começou aqui</Eyebrow>
            <h2 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] uppercase">
              Anos depois, voltamos{" "}
              <span className="text-brand">às nossas origens.</span>
            </h2>
            <div className="mt-12 flex justify-center">
              <CtaButton>Quero fazer parte</CtaButton>
            </div>
            <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-cream/50">
              O preenchimento da inscrição não garante uma vaga. Todas as
              inscrições serão analisadas individualmente e as selecionadas serão
              contatadas pelo WhatsApp.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
          <Image src={logo} alt="Silva Team" className="h-12 w-auto" />
          <p className="text-center text-xs tracking-[0.2em] text-cream/50 uppercase">
            Treino. Nutrição. Estratégia. Acompanhamento.
          </p>
          <p className="text-xs text-cream/40">
            © Silva Team. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
