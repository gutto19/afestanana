"use client";

import { useEffect, useRef, useState } from "react";

const blocos = [
  {
    texto: "NãNA",
    fundo: "bg-nana-azul",
    textoCor: "text-nana-creme",
    fonte: "font-londrina-black",
    direcao: -1,
  },
  {
    texto: "Brasil",
    fundo: "bg-nana-amarelo",
    textoCor: "text-nana-marinho",
    fonte: "font-manteiga",
    direcao: 1,
  },
  {
    texto: "SOM",
    fundo: "bg-nana-oliva",
    textoCor: "text-nana-creme",
    fonte: "font-jaro",
    direcao: -1,
  },
];

export default function EsteticaVisual() {
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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[180vh] bg-nana-creme px-10 py-32 text-nana-marinho"
    >
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1600px]">

          {/* TÍTULO */}

          <div>
            <p
              className="mb-8 text-sm uppercase tracking-[0.3em] text-nana-azul"
              style={{
                opacity: Math.min(progress * 3, 1),
                transform: `translateY(${20 - progress * 20}px)`,
              }}
            >
              Estética
            </p>

            <h2 className="max-w-5xl text-6xl uppercase leading-[1.05] md:text-8xl xl:text-9xl">
              A música
              <br />
              também
              <br />
              <span className="font-manteiga text-nana-laranja">
                se vê.
              </span>
            </h2>
          </div>

          {/* BLOCOS */}

          <div className="mt-16 grid gap-8 overflow-x-clip xl:grid-cols-3">

            {blocos.map((bloco, index) => {

              const inicio = 0.25 + index * 0.18;

              const entrada = Math.min(
                Math.max((progress - inicio) / 0.18, 0),
                1
              );

              return (
                <div
                  key={bloco.texto}
                  className={`flex min-h-[260px] items-center justify-center overflow-hidden ${bloco.fundo}`}
                  style={{
                    opacity: entrada,
                    transform: `
                      translateX(
                        ${bloco.direcao * (60 - entrada * 60)}px
                      )
                      translateY(${40 - entrada * 40}px)
                    `,
                  }}
                >
                  <span
                    className={`${bloco.fonte} ${bloco.textoCor} text-5xl uppercase leading-none sm:text-6xl md:text-8xl ${
                      index === 1 ? "xl:text-7xl" : ""
                    }`}
                  >
                    {bloco.texto}
                  </span>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}