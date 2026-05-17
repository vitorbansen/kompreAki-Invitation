"use client";

import { useState } from "react";

export function FAQ() {
  const items = [
    {
      q: "É realmente grátis?",
      a: "100% grátis. A gente ganha uma pequena comissão das lojas quando você compra pelos nossos links — sem custo adicional pra você. Você paga o mesmo preço que pagaria comprando direto.",
    },
    {
      q: "Vou receber muitas mensagens?",
      a: "Não. O grupo é silencioso (só admins postam) e enviamos em média 5 a 8 ofertas selecionadas por dia. Nada de spam, nada de bom dia.",
    },
    {
      q: "Como sei que a oferta é real?",
      a: "Cada produto é analisado pelo nosso sistema de histórico de preços. Só postamos quando o desconto é genuíno comparado aos últimos 90 dias.",
    },
    {
      q: "Posso sair quando quiser?",
      a: "Claro. É só sair do grupo no WhatsApp. Sem cancelamento, sem cadastro, sem burocracia.",
    },
    {
      q: "Funciona pra qualquer cidade?",
      a: "Sim. As ofertas são de lojas online (Amazon, Mercado Livre, Magalu, Shopee, etc) que entregam em todo o Brasil.",
    },
    {
      q: "Quem está por trás do grupo?",
      a: "Uma equipe de curadores apaixonados por achados. Usamos IA pra varrer milhares de ofertas por hora, mas todo destaque passa por revisão humana antes de chegar até você.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-ninja-black py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-12 text-center">
          <p className="stamp mb-3 text-xs tracking-[0.3em] text-ninja-red">
            // Perguntas frequentes
          </p>
          <h2 className="headline text-4xl text-white sm:text-5xl">
            Tira a <span className="text-blood">dúvida.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-xl border bg-ninja-card transition-colors ${
                  isOpen ? "border-ninja-red/50" : "border-ninja-line"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white">{item.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen
                        ? "rotate-45 border-ninja-red bg-ninja-red text-white"
                        : "border-ninja-line text-zinc-400"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="h-4 w-4"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
