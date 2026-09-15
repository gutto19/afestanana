"use client";

import { useEffect, useRef, useState } from "react";

export default function TimeEncontro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const atualizar = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const altura = window.innerHeight;

      const inicio = altura * 0.8;
      const fim = -altura * 0.8;

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

  const entrada = (
    inicio: number,
    duracao = 0.2
  ) =>
    Math.min(
      Math.max((progress - inicio) / duracao, 0),
      1
    );

  const cinco = entrada(0.25);
  const nana = entrada(0.42);
  const experiencia = entrada(0.59);
  const descricao = entrada(0.76);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[180vh] bg-nana-marinho px-10 py-32 text-nana-creme"
    >
      <div className="sticky top-0 flex min-h-screen items-center">

        <div className="mx-auto w-full max-w-6xl text-center">

          {/* IDENTIFICAÇÃO */}

          <p
            className="text-sm uppercase tracking-[0.3em] text-nana-amarelo"
            style={{
              opacity: cinco,
              transform: `translateY(${30 - cinco * 30}px)`,
            }}
          >
            O encontro
          </p>


          {/* CINCO OLHARES */}

          <h2
            className="mt-10 text-6xl uppercase leading-[1.05] md:text-9xl"
            style={{
              opacity: cinco,
              transform: `translateY(${50 - cinco * 50}px)`,
            }}
          >
            Cinco olhares.
          </h2>


          {/* UMA NÃNA */}

          <h2
            className="mt-2 text-6xl uppercase leading-[1.05] md:text-9xl"
            style={{
              opacity: nana,
              transform: `translateY(${60 - nana * 60}px)`,
            }}
          >
            <span className="font-londrina-black text-nana-azul">
              Uma NãNA.
            </span>
          </h2>


          {/* UMA EXPERIÊNCIA */}

          <h2
            className="mt-2 text-6xl uppercase leading-[1.05] md:text-9xl"
            style={{
              opacity: experiencia,
              transform: `translateY(${70 - experiencia * 70}px)`,
            }}
          >
            <span className="font-manteiga text-nana-laranja">
              Uma experiência.
            </span>
          </h2>


          {/* DESCRIÇÃO */}

          <p
            className="mx-auto mt-14 max-w-2xl text-lg leading-relaxed"
            style={{
              opacity: descricao,
              transform: `translateY(${30 - descricao * 30}px)`,
            }}
          >
            A NãNA acontece quando diferentes olhares se encontram
            e transformam música, comunicação, tecnologia e design
            em uma mesma experiência brasileira.
          </p>

        </div>

      </div>
    </section>
  );
}