import Image from "next/image";
import { WhatsappButton } from "./WhatsappButton";
import { SocialProof } from "./SocialProof";

const tags = [
  { label: "Até 70% OFF", className: "bg-primary text-white" },
  {
    label: "Ofertas todo dia",
    className: "border border-border-light bg-white text-text-primary",
  },
  {
    label: "Direto no WhatsApp",
    className: "border border-primary/40 bg-text-primary text-primary",
  },
];

const floatingBadges = [
  { label: "🎯 Ofertas verificadas", pos: "left-0 top-0", delay: "0.4s" },
  { label: "🔥 Vagas limitadas", pos: "right-0 top-[8%]", delay: "0.9s" },
  { label: "📲 Direto no WhatsApp", pos: "bottom-[8%] left-0", delay: "1.4s" },
  { label: "🛍️ Maiores lojas do Brasil", pos: "bottom-0 right-0", delay: "1.9s" },
];

const floatingEmojis = [
  { emoji: "🛍️", pos: "left-[16%] top-[8%]", delay: "0s", size: "text-3xl" },
  { emoji: "🏷️", pos: "right-[18%] top-[22%]", delay: "1s", size: "text-2xl" },
  { emoji: "⚡", pos: "left-[20%] bottom-[18%]", delay: "2s", size: "text-2xl" },
  { emoji: "🎉", pos: "right-[12%] bottom-[32%]", delay: "1.5s", size: "text-3xl" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-primary px-5 pb-16 pt-12 sm:pb-24 sm:pt-16">
      {/* Emojis flutuantes de fundo (desktop) */}
      {floatingEmojis.map((f) => (
        <span
          key={f.emoji}
          className={`pointer-events-none absolute z-0 hidden opacity-40 animate-float lg:block ${f.pos} ${f.size}`}
          style={{ animationDelay: f.delay }}
          aria-hidden="true"
        >
          {f.emoji}
        </span>
      ))}

      <div className="relative z-[1] mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <h1 className="text-shimmer text-[28px] font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
          As melhores ofertas de todo o Brasil direto no seu WhatsApp
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag, i) => (
            <span
              key={tag.label}
              className={`animate-float rounded-full px-3.5 py-2 text-xs font-extrabold shadow-md sm:text-sm ${tag.className}`}
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* CTA logo abaixo do título — já aparece na primeira dobra, sem precisar rolar */}
        <div className="w-full max-w-xs">
          <WhatsappButton size="xl" label="QUERO ENTRAR NO GRUPO" pulse />
        </div>

        <SocialProof />

        {/* Logo — peça central do hero, com distância das badges ao redor */}
        <div
          className="relative mx-auto mt-2 w-full max-w-[300px] animate-fade-up sm:max-w-[360px] lg:max-w-[420px]"
          style={{ animationDelay: "300ms" }}
        >
          <div className="relative mx-auto aspect-square w-[58%]">
            <div className="image-glow" aria-hidden="true" />
            <div className="relative z-[1] h-full w-full overflow-hidden rounded-full drop-shadow-xl">
              <Image
                src="/logo.png"
                alt="Kompreaki"
                fill
                priority
                unoptimized
                className="scale-[1.06] object-cover"
              />
            </div>
          </div>

          {floatingBadges.map((badge) => (
            <span
              key={badge.label}
              className={`floating-badge absolute z-[2] px-2.5 py-1.5 text-[9px] sm:text-[11px] lg:text-[13px] ${badge.pos}`}
              style={{ animationDelay: badge.delay }}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
