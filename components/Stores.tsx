const stores = [
  "Amazon",
  "Mercado Livre",
  "Magalu",
  "Shopee",
  "Americanas",
  "Casas Bahia",
  "AliExpress",
  "e muito mais",
];

export function Stores() {
  return (
    <section className="bg-bg-primary px-5 py-10 sm:py-14">
      <h2 className="section-title mb-8 text-2xl sm:text-3xl">
        Ofertas das maiores lojas do Brasil
      </h2>

      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5">
        {stores.map((store) => (
          <span
            key={store}
            className="store-badge px-4 py-2.5 text-sm"
          >
            {store}
          </span>
        ))}
      </div>
    </section>
  );
}
