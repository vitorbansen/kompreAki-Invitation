import { WhatsappButton } from "./WhatsappButton";

export function DealsShowcase() {
  const deals = [
    {
      tag: "Eletrônicos",
      title: "Echo Dot 5ª Geração",
      from: "R$ 499",
      to: "R$ 249",
      off: "50%",
      store: "Amazon",
    },
    {
      tag: "Casa",
      title: "Air Fryer Mondial 4L",
      from: "R$ 599",
      to: "R$ 289",
      off: "52%",
      store: "Magalu",
    },
    {
      tag: "Tech",
      title: "Smartphone Xiaomi 128GB",
      from: "R$ 1.899",
      to: "R$ 1.099",
      off: "42%",
      store: "Mercado Livre",
    },
    {
      tag: "Moda",
      title: "Tênis Nike Revolution",
      from: "R$ 349",
      to: "R$ 179",
      off: "48%",
      store: "Centauro",
    },
  ];

  return (
    <section className="relative bg-ninja-black py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ninja-red to-transparent" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <p className="stamp mb-3 text-xs tracking-[0.3em] text-ninja-red">
            // Exemplos reais
          </p>
          <h2 className="headline text-4xl text-white sm:text-5xl">
            O tipo de oferta que <span className="text-blood">você recebe</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400">
            Ofertas reais enviadas no grupo nas últimas semanas. Preços e
            disponibilidade variam.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((deal, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-ninja-line bg-ninja-card p-5 transition-all hover:border-ninja-red/60 hover:-translate-y-1"
            >
              {/* OFF badge - corner */}
              <div className="absolute right-0 top-0">
                <div className="relative bg-blood px-3 py-1.5 stamp text-xs text-white">
                  -{deal.off}
                </div>
              </div>

              {/* Tag */}
              <div className="mb-12 inline-flex items-center gap-1.5 rounded-full border border-ninja-line bg-ninja-black px-2.5 py-1 text-[10px] uppercase tracking-wider text-zinc-400">
                {deal.tag}
              </div>

              {/* Title */}
              <h3 className="mb-4 font-bold text-white">{deal.title}</h3>

              {/* Prices */}
              <div className="mb-1 text-xs text-zinc-500 line-through">
                de {deal.from}
              </div>
              <div className="mb-4 flex items-baseline gap-1.5">
                <span className="text-xs text-zinc-400">por</span>
                <span className="stamp text-2xl text-blood">{deal.to}</span>
              </div>

              {/* Store */}
              <div className="flex items-center justify-between border-t border-ninja-line pt-3 text-xs">
                <span className="text-zinc-500">{deal.store}</span>
                <span className="font-semibold text-ninja-red">⚡ Hoje</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-14 text-center">
          <WhatsappButton
            size="lg"
            label="Quero receber essas ofertas"
          />
        </div>
      </div>
    </section>
  );
}
