"use client";

import { useEffect, useRef, useState } from "react";

export default function TituloQuemFazOSom() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const atualizar = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const altura = window.innerHeight;

      const inicio = altura * 0.9;
      const fim = altura * 0.25;

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
    <div ref={sectionRef}>

      <p
        className="mb-8 text-sm uppercase tracking-[0.3em] text-nana-laranja"
        style={{
          opacity: Math.min(progress * 2, 1),
          transform: `translateY(${20 - progress * 20}px)`,
        }}
      >
        Quem faz o som
      </p>

      <h2 className="max-w-5xl text-4xl uppercase leading-[0.85] sm:text-5xl md:text-8xl lg:text-8xl xl:text-9xl">

        <span
          className="block"
          style={{
            opacity: Math.min(progress * 2, 1),
            transform: `translateX(${40 - progress * 40}px)`,
          }}
        >
          Duas pessoas.
        </span>

        <span
          className="block font-londrina-black text-nana-azul"
          style={{
            opacity: Math.min(Math.max((progress - 0.15) * 2, 0), 1),
            transform: `translateX(${60 - Math.max((progress - 0.15) / 0.85, 0) * 60}px)`,
          }}
        >
          Dois olhares.
        </span>

        <span
          className="block font-manteiga text-nana-laranja"
          style={{
            opacity: Math.min(Math.max((progress - 0.3) * 2, 0), 1),
            transform: `translateX(${80 - Math.max((progress - 0.3) / 0.7, 0) * 80}px)`,
          }}
        >
          Uma pista.
        </span>

      </h2>

      <p
        className="mt-12 max-w-xl text-lg leading-relaxed"
        style={{
          opacity: Math.min(Math.max((progress - 0.45) * 2, 0), 1),
          transform: `translateY(${30 - Math.max((progress - 0.45) / 0.55, 0) * 30}px)`,
        }}
      >
        A NãNA também acontece através de quem escolhe,
        mistura e transforma cada música ao longo da noite.
      </p>

    </div>
  );
}