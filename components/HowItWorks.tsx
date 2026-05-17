export function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Clique no botão",
      desc: "Toque em \"Entrar no grupo\" e o WhatsApp abre direto no convite. Não precisa criar conta.",
    },
    {
      n: "02",
      title: "Aceite o convite",
      desc: "Você entra automaticamente em um grupo silencioso (só admins postam). Nada de spam.",
    },
    {
      n: "03",
      title: "Receba e economize",
      desc: "Ofertas chegam várias vezes ao dia. Clicou, comprou, economizou. Simples assim.",
    },
  ];

  return (
    <section className="relative bg-ninja-dark py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <p className="stamp mb-3 text-xs tracking-[0.3em] text-ninja-red">
            // Como funciona
          </p>
          <h2 className="headline text-4xl text-white sm:text-5xl">
            3 passos. <span className="text-blood">60 segundos.</span>
          </h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {/* Connecting line on desktop */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-ninja-red/40 to-transparent md:block"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <div key={step.n} className="relative text-center">
              <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-ninja-red bg-ninja-black">
                <span className="stamp text-lg text-white">{step.n}</span>
              </div>
              <h3 className="stamp mb-2 text-lg text-white">{step.title}</h3>
              <p className="mx-auto max-w-xs text-sm text-zinc-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
