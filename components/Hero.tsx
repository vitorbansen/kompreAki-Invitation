import Image from "next/image";
import { WhatsappButton } from "./WhatsappButton";
import { ParticleField } from "./ParticleField";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ninja-black pb-16 pt-6 sm:pb-24">

      {/* Red radial glow — atrás do ninja */}
      <div
        className="absolute left-1/2 top-1/4 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-ninja-red/20 blur-[120px]"
        aria-hidden="true"
      />

      {/* Red top line */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ninja-red to-transparent"
        aria-hidden="true"
      />

      {/* Particles */}
      <ParticleField />

      <div className="relative mx-auto max-w-lg px-5">

        {/* Countdown ticker */}
        <div className="flex justify-center">
          <Countdown />
        </div>

        {/* Imagem do Ninja — peça central */}
        <div
          className="relative mx-auto mt-6 w-72 animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          {/* Glow vermelho por baixo da imagem */}
          <div
            className="absolute -bottom-6 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-ninja-red/40 blur-[60px]"
            aria-hidden="true"
          />
          <Image
            src="/ninja.png"
            alt="Ninja da Promo"
            width={540}
            height={540}
            priority
            className="relative w-full rounded-full"
          />
        </div>

        {/* Subhead */}
        <p
          className="mt-6 text-center text-base text-zinc-400 sm:text-lg animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          Receba promoções relâmpago da Amazon, Mercado Livre e Shopee{" "}
          <span className="font-semibold text-white">direto no seu WhatsApp.</span>{" "}
          Curadoria real. Zero spam.
        </p>

        {/* CTA */}
        <div
          className="mt-7 animate-fade-up"
          style={{ animationDelay: "220ms" }}
        >
          <WhatsappButton
            size="xl"
            label="Entrar no grupo grátis"
            sublabel="Acesso imediato • Sem cadastro"
          />
        </div>

        {/* Trust */}
        <div
          className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-zinc-500 animate-fade-up"
          style={{ animationDelay: "270ms" }}
        >
          {["100% grátis", "Sem cadastro", "Saia quando quiser"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="text-ninja-red">✓</span> {t}
            </span>
          ))}
        </div>

        {/* Live member count */}
        <div
          className="mt-5 flex justify-center animate-fade-up"
          style={{ animationDelay: "310ms" }}
        >
          <div className="inline-flex items-center gap-2 text-xs text-zinc-500">
            <span className="relative flex h-2 w-2">
              <span className="live-ring absolute inline-flex h-2 w-2" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="font-semibold text-white">+12.847 ninjas</span>
            no grupo agora
          </div>
        </div>

      </div>
    </section>
  );
}
