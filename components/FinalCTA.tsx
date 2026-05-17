import { WhatsappButton } from "./WhatsappButton";
import { ParticleField } from "./ParticleField";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ninja-black py-20 sm:py-28">
      {/* Dramatic red radial */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,42,0.30)_0%,transparent_65%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-slash opacity-40" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ninja-red to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ninja-red to-transparent" />
      <ParticleField />

      <div className="relative mx-auto max-w-lg px-5 text-center">
        <p className="stamp mb-4 text-xs tracking-[0.3em] text-ninja-red">
          // última chance
        </p>

        <h2 className="headline text-5xl text-white sm:text-6xl">
          Cada minuto fora
          <br />do grupo é uma
          <br /><span className="text-blood">oferta perdida.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-sm text-base text-zinc-400">
          Promos relâmpago somem em horas — às vezes minutos. Entra agora e
          começa a economizar ainda hoje.
        </p>

        {/* Live indicator */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-ninja-line bg-ninja-card/80 px-4 py-2 text-sm backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="live-ring absolute inline-flex h-2 w-2" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-zinc-400">+23 pessoas entraram na última hora</span>
        </div>

        <div className="mt-7">
          <WhatsappButton
            size="xl"
            label="Entrar agora — é grátis"
            sublabel="Acesso imediato pelo WhatsApp"
          />
        </div>

        <p className="mt-4 text-xs text-zinc-600">
          Sem cadastro · Sem pagamento · Saia quando quiser
        </p>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {[
            { v: "12.847+", l: "membros ativos" },
            { v: "1.200+",  l: "ofertas/mês" },
            { v: "4.9★",    l: "avaliação" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="stamp text-2xl text-white sm:text-3xl">{s.v}</div>
              <div className="mt-0.5 text-[11px] uppercase tracking-wider text-zinc-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
