"use client";

import { useEffect, useRef, useState } from "react";

export default function TransicaoContatoLaranja() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const atualizar = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const altura = window.innerHeight;

      const inicio = altura * 0.9;
      const fim = altura * 0.15;

      const total = inicio - fim;
      const atual = inicio - rect.top;

      const calculado = Math.min(
        Math.max(atual / total, 0),
        1
      );

      setProgress(calculado);
    };

    atualizar();

    window.addEventListener("scroll", atualizar);

    return () => {
      window.removeEventListener("scroll", atualizar);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[45vh] overflow-hidden bg-nana-azul"
    >
      <div
        className="absolute left-0 top-0 h-full bg-nana-laranja"
        style={{
          width: `${progress * 100}%`,
        }}
      />
    </section>
  );
}