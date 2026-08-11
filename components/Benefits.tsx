import { FadeInOnScroll } from "./FadeInOnScroll";

const items = [
  {
    icon: "🎯",
    title: "Ofertas selecionadas",
    desc: "Cupons e promoções relâmpago selecionados todos os dias nas maiores lojas.",
  },
  {
    icon: "⚡",
    title: "Alertas em tempo real",
    desc: "Você recebe antes de todo mundo — quem é rápido garante o desconto.",
  },
  {
    icon: "🚫",
    title: "Sem spam",
    desc: "Só oferta de verdade, sem propaganda enganosa nem preço maquiado.",
  },
  {
    icon: "💰",
    title: "Economia real",
    desc: "Compre o que precisa pagando bem menos em cada pedido.",
  },
];

export function Benefits() {
  return (
    <section className="bg-bg-primary px-5 py-14 sm:py-20">
      <h2 className="section-title mb-8 text-2xl sm:text-3xl">
        Por que entrar no grupo?
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <FadeInOnScroll key={item.title} delay={i * 120}>
            <div className="benefit-card relative h-full px-5 py-7 text-center">
              <div className="card-dots absolute -top-[9px] left-1/2 flex -translate-x-1/2 gap-2">
                <span />
                <span />
              </div>
              <div className="mb-3 text-3xl">{item.icon}</div>
              <h3 className="mb-1.5 text-base font-extrabold text-text-primary">
                {item.title}
              </h3>
              <p className="text-sm text-text-primary/70">{item.desc}</p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  );
}
