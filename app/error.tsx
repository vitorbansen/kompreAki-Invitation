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
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg-primary px-5 text-center">
      <h2 className="text-3xl font-black text-text-primary">Algo deu errado</h2>
      <button
        onClick={reset}
        className="btn-primary mt-2 rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wider text-white"
      >
        Tentar novamente
      </button>
    </div>
  );
}
