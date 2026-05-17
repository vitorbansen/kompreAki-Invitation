"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ninja-black px-5 text-center">
      <p className="stamp text-xs tracking-[0.3em] text-ninja-red">// erro</p>
      <h2 className="headline text-4xl text-white">Algo deu errado</h2>
      <button
        onClick={reset}
        className="mt-2 rounded-sm bg-ninja-red px-6 py-3 text-sm font-bold uppercase tracking-wider text-white"
      >
        Tentar novamente
      </button>
    </div>
  );
}
