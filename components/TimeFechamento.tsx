"use client";

import { useEffect, useRef, useState } from "react";

export default function TimeFechamento() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const atualizar = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const altura = window.innerHeight;

      const inicio = altura * 0.8;
      const fim = altura * 0.2;

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

  const entrada = Math.min(
    Math.max((progress - 0.2) / 0.6, 0),
    1
  );

  const nana = Math.min(
    Math.max((progress - 0.65) / 0.35, 0),
    1
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[130vh] bg-nana-creme px-10 py-32 text-center text-nana-marinho"
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center">

        <div className="mx-auto max-w-5xl">

          {/* FRASE */}

          <div
            style={{
              opacity: entrada,
              transform: `translateY(${
                40 - entrada * 40
              }px)`,
            }}
          >
            <p className="text-5xl uppercase leading-[1] md:text-8xl">

              Feita por pessoas.

              <br />

              <span className="font-manteiga text-nana-laranja">
                Movida por música.
              </span>

            </p>
          </div>


          {/* NÃNA */}

          <div
            className="mt-24"
            style={{
              opacity: nana,
              transform: `scale(${0.8 + nana * 0.2})`,
            }}
          >
            <p className="font-londrina-black text-8xl leading-none text-nana-azul md:text-[12rem]">
              NãNA
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}