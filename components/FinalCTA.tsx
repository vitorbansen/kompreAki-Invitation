import { WhatsappButton } from "./WhatsappButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-bg-primary px-5 py-16 text-center sm:py-20">
      <div className="cta-glow" aria-hidden="true" />

      <div className="relative z-[1] mx-auto max-w-md">
        <h2 className="mb-3.5 text-[26px] font-black text-text-primary sm:text-4xl">
          Entre hoje e comece a economizar
        </h2>

        <p className="mx-auto mb-6 max-w-sm text-[15px] text-text-primary/70">
          O grupo é gratuito, sem spam e feito para quem quer economizar de
          verdade sem perder tempo procurando promoção.
        </p>

        <WhatsappButton size="xl" label="ENTRAR NO GRUPO GRÁTIS" pulse />

        <p className="mt-4 text-xs font-bold tracking-wide text-text-primary/50">
          Gratuito • Sem spam • Ofertas selecionadas
        </p>
      </div>
    </section>
  );
}
