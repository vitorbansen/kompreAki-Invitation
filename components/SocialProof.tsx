type Props = {
  className?: string;
};

export function SocialProof({ className = "" }: Props) {
  return (
    <div className={`flex flex-col items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-2 text-xs font-bold text-text-primary/70 sm:text-sm">
        <span className="live-ring relative inline-flex h-2.5 w-2.5 rounded-full bg-wa-green" />
        <span>Grupo ativo agora · ofertas novas o dia todo</span>
      </div>
      <p className="text-[11px] font-semibold text-primary sm:text-xs">
        🔥 Vagas limitadas — o grupo fecha assim que lotar
      </p>
    </div>
  );
}
