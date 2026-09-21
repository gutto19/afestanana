"use client";

import { useEffect, useRef, useState } from "react";

type InfoDJProps = {
  numero: string;
  nome: string;
  sobrenome: string;
  variante: "tata" | "guto";
  estilos: string[];
};

export default function InfoDJ({
  numero,
  nome,
  sobrenome,
  variante,
  estilos,
}: InfoDJProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const isTata = variante === "tata";

  useEffect(() => {
    const atualizar = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const altura = window.innerHeight;

      const inicio = altura * 0.85;
      const fim = altura * 0.35;

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

  const entrada = Math.min(Math.max((progress - 0.15) / 0.85, 0), 1);

  const deslocamento = 70 - entrada * 70;

  return (
    <div
      ref={containerRef}
      className="relative z-10 mt-8 overflow-hidden"
    >

      {/* NÚMERO */}

        <span
            className="absolute right-0 top-0 z-0 font-londrina-light text-[10rem] leading-none text-nana-creme/20"
            style={{
                opacity: entrada,
                transform: `translateX(${
                isTata
                    ? 100 - entrada * 100
                    : -100 + entrada * 100
                }px)`,
            }}
            >
            {numero}
        </span>

      {/* IDENTIFICAÇÃO */}

        <div
            className="relative z-10"
            style={{
                opacity: entrada,
                transform: `translateX(${
                isTata
                    ? deslocamento
                    : -deslocamento
                }px)`,
            }}
        >

        <p
          className={`mb-4 text-xs uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.25em] ${
            isTata
              ? "text-nana-amarelo"
              : "text-nana-marinho"
          }`}
        >
          DJ / Curador
        </p>


        <h3 className="text-5xl uppercase leading-[0.8] sm:text-6xl md:text-8xl">

          {nome}

          <br />

          <span
            className={
              isTata
                ? "font-manteiga text-nana-amarelo"
                : "font-londrina-black text-nana-marinho"
            }
          >
            {sobrenome}
          </span>

        </h3>


        {/* ESTILOS */}

        <div className="mt-10">

          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] opacity-60 sm:mb-5 sm:text-xs sm:tracking-[0.25em]">
            Estilos
          </p>

          <div className="flex flex-wrap gap-2">

            {estilos.map((estilo, index) => (

              <span
                key={estilo}
                className={
                  index === 0
                    ? isTata
                      ? "bg-nana-amarelo px-3 py-1.5 text-xs uppercase text-nana-marinho sm:px-4 sm:py-2 sm:text-sm"
                      : "bg-nana-marinho px-3 py-1.5 text-xs uppercase text-nana-creme sm:px-4 sm:py-2 sm:text-sm"
                    : "border border-nana-creme/50 px-3 py-1.5 text-xs uppercase sm:px-4 sm:py-2 sm:text-sm"
                }
              >
                {estilo}
              </span>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}