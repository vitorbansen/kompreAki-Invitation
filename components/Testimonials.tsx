import { ParticleField } from "./ParticleField";

const testimonials = [
  {
    name: "Carla M.",
    location: "Joinville, SC",
    text: "Comprei um notebook que tava acompanhando há meses. Apareceu no grupo com 40% off e eu nem pensei duas vezes.",
    saved: "R$ 1.480",
    time: "ontem às 14h22",
  },
  {
    name: "Rafael S.",
    location: "São Paulo, SP",
    text: "Achei que ia ser mais um grupo de spam. Errado. Só posta oferta real e ainda mostra o histórico de preço. Tô há 6 meses e não saio mais.",
    saved: "R$ 2.130",
    time: "2 dias atrás",
  },
  {
    name: "Juliana T.",
    location: "Curitiba, PR",
    text: "Equipei a cozinha inteira com as promoções. Air fryer, micro-ondas, liquidificador — tudo entre 40–60% de desconto.",
    saved: "R$ 890",
    time: "3 dias atrás",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-ninja-dark py-14 sm:py-20">
      {/* Red glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-ninja-red/10 blur-[80px]"
        aria-hidden="true"
      />
      <ParticleField />

      <div className="relative mx-auto max-w-lg px-5">

        <div className="mb-10 text-center">
          <p className="stamp mb-2 text-xs tracking-[0.3em] text-ninja-red">
            // o que dizem
          </p>
          <h2 className="headline text-4xl text-white sm:text-5xl">
            Mais de <span className="text-blood">12 mil ninjas</span>
            <br />economizando junto
          </h2>
        </div>

        {/* WhatsApp-style chat bubbles */}
        <div className="flex flex-col gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col gap-1.5">
              {/* Sender */}
              <div className="flex items-center gap-2 px-1">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ninja-card border border-ninja-line text-xs font-bold text-ninja-red">
                  {t.name.charAt(0)}
                </div>
                <span className="text-xs font-semibold text-white">{t.name}</span>
                <span className="text-xs text-zinc-600">{t.location}</span>
              </div>

              {/* Bubble */}
              <div className="ml-10 rounded-2xl rounded-tl-sm border border-ninja-line bg-ninja-card p-4">
                {/* Stars */}
                <div className="mb-2.5 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 15l-5.3 2.8 1-5.9L1.5 7.7l5.9-.9L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-zinc-300">{t.text}</p>
                <div className="mt-3 flex items-center justify-between gap-3 border-t border-ninja-line pt-3">
                  <span className="text-[10px] text-zinc-600">{t.time}</span>
                  <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white" style={{ background: "linear-gradient(135deg, #1aab4b 0%, #0a6e5a 100%)" }}>
                    Economizou {t.saved}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate */}
        <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-ninja-line bg-ninja-card px-5 py-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 15l-5.3 2.8 1-5.9L1.5 7.7l5.9-.9L10 1.5z" />
              </svg>
            ))}
          </div>
          <div className="text-sm">
            <span className="stamp font-bold text-white">4.9</span>
            <span className="ml-1 text-zinc-500">· +12.847 membros satisfeitos</span>
          </div>
        </div>

      </div>
    </section>
  );
}
