"use client";

import { useEffect, useState } from "react";

const START_SECONDS = 15 * 60;

function fmt(s: number) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return { m, sec };
}

export function Countdown() {
  const [secs, setSecs] = useState(START_SECONDS);

  useEffect(() => {
    const id = setInterval(() => {
      setSecs((s) => (s <= 1 ? START_SECONDS : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const { m, sec } = fmt(secs);
  const urgent = secs <= 60;

  return (
    <div className="flex items-stretch overflow-hidden rounded-sm animate-fade-up">
      {/* Conteúdo */}
      <div className="bg-ninja-card border border-ninja-line px-4 py-2 flex items-center gap-3">
        {/* Dot ao vivo */}
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="live-ring absolute inline-flex h-1.5 w-1.5" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
        </span>

        <span className="text-xs text-zinc-400 tracking-wide whitespace-nowrap">
          Acesso aberto por mais
        </span>

        {/* Timer */}
        <div className={`flex items-center gap-0.5 font-mono font-bold tabular-nums transition-colors ${urgent ? "text-ninja-red" : "text-white"}`}>
          <span className="text-sm leading-none">{m}</span>
          <span className="text-sm leading-none opacity-70 animate-pulse">:</span>
          <span className="text-sm leading-none">{sec}</span>
        </div>
      </div>
    </div>
  );
}
