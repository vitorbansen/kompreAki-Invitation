import { FadeInOnScroll } from "./FadeInOnScroll";

const steps = [
  "Você entra gratuitamente no grupo, sem cadastro.",
  "Você recebe ofertas selecionadas das maiores lojas do Brasil.",
  "Você compra o que precisa gastando muito menos.",
];

export function HowItWorks() {
  return (
    <section className="bg-bg-primary px-5 py-14 sm:py-20">
      <h2 className="section-title mb-8 text-2xl sm:text-3xl">Como funciona</h2>

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 lg:flex-row lg:items-stretch">
        {steps.map((text, i) => (
          <div key={text} className="contents">
            <FadeInOnScroll delay={i * 120} className="w-full max-w-xs lg:max-w-none lg:flex-1">
              <div className="step-card flex h-full flex-col items-center px-6 py-6 text-center">
                <div className="step-number mb-3 flex h-11 w-11 items-center justify-center text-lg">
                  {i + 1}
                </div>
                <p className="text-sm font-semibold text-text-primary">{text}</p>
              </div>
            </FadeInOnScroll>

            {i < steps.length - 1 && (
              <span
                className="rotate-90 text-xl font-black text-primary lg:rotate-0"
                aria-hidden="true"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
