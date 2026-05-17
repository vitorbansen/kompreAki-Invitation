export function Footer() {
  return (
    <footer className="border-t border-ninja-line bg-ninja-dark py-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blood">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor">
                <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" />
              </svg>
            </div>
            <span className="stamp text-sm text-white">
              Ninja<span className="text-ninja-red">.</span>da<span className="text-ninja-red">.</span>Promo
            </span>
          </div>

          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Ninja da Promo. Todos os direitos reservados.
          </p>

          <div className="flex gap-5 text-xs text-zinc-500">
            <a href="#" className="hover:text-white">
              Privacidade
            </a>
            <a href="#" className="hover:text-white">
              Termos
            </a>
            <a href="#" className="hover:text-white">
              Contato
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] leading-relaxed text-zinc-600 sm:text-left">
          Ninja da Promo é um grupo de curadoria de ofertas. Podemos receber
          comissão de afiliados pelas compras realizadas. Preços e disponibilidade
          variam e estão sujeitos a alteração pelas lojas.
        </p>
      </div>
    </footer>
  );
}
