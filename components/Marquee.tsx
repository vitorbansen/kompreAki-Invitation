export function Marquee() {
  const items = [
    "Amazon",
    "Mercado Livre",
    "Magalu",
    "Shopee",
    "AliExpress",
    "Americanas",
    "Casas Bahia",
    "Kabum",
    "Centauro",
    "Netshoes",
  ];

  return (
    <section className="relative border-y border-ninja-line bg-ninja-dark py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee gap-12">
          {[...items, ...items, ...items].map((item, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3 text-zinc-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ninja-red" />
              <span className="stamp text-sm tracking-widest">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
