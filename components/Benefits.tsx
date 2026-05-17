import { ParticleField } from "./ParticleField";

const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Promos antes de todo mundo",
    desc: "Alertas em tempo real. Quando o grupo recebe, você já pode comprar — antes de esgotar.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Zero spam, só oferta real",
    desc: "IA analisa histórico de preços. Você só vê desconto de verdade, nunca preço maquiado.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Grátis para sempre",
    desc: "Sem assinatura, sem cadastro, sem pegadinhas. Um clique e você já está dentro.",
  },
];

export function Benefits() {
  return (
    <section className="relative bg-ninja-black py-14 sm:py-20">
      <div className="absolute inset-0 bg-slash opacity-30" aria-hidden="true" />
      <ParticleField />

      <div className="relative mx-auto max-w-lg px-5">
        <div className="mb-10 text-center">
          <p className="stamp mb-2 text-xs tracking-[0.3em] text-ninja-red">
            // por que entrar
          </p>
          <h2 className="headline text-4xl text-white sm:text-5xl">
            Três motivos. <span className="text-blood">Zero enrolação.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-ninja-line bg-ninja-card p-6 glow-card transition-all hover:border-ninja-red/50"
            >
              <span
                className="headline absolute -right-2 -top-4 text-9xl text-white/[0.03] select-none"
                aria-hidden="true"
              >
                0{i + 1}
              </span>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blood text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="stamp text-base text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
