"use client";

import { useEffect, useRef, useState } from "react";

const etapas = [
  {
    numero: "01",
    titulo: "Chegar",
    descricao: "O primeiro encontro.",
  },
  {
    numero: "02",
    titulo: "Descobrir",
    descricao: "Novos sons começam a aparecer.",
  },
  {
    numero: "03",
    titulo: "Viver",
    descricao: "A pista encontra seu auge.",
  },
  {
    numero: "04",
    titulo: "Querer mais",
    descricao: "Quando a noite termina, a vontade fica.",
  },
];

export default function TransformacaoMusical() {
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
      className="relative min-h-[180vh] bg-nana-laranja px-10 py-32 text-nana-creme"
    >
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl">

          {/* TÍTULO */}

          <div>
            <p
              className="mb-8 text-sm uppercase tracking-[0.3em] text-nana-azul"
              style={{
                opacity: Math.min(progress * 3, 1),
                transform: `translateY(${20 - progress * 20}px)`,
              }}
            >
              A transformação
            </p>

            <h2 className="max-w-4xl text-6xl uppercase leading-[0.85] md:text-9xl">
              A música
              <br />
              também
              <br />
              <span className="font-londrina-black text-nana-marinho">
                se transforma.
              </span>
            </h2>
          </div>

          {/* ETAPAS */}

          <div className="mt-24 grid gap-6 md:grid-cols-4">
            {etapas.map((etapa, index) => {

              const inicio = 0.25 + index * 0.2;

              const entrada = Math.min(
                Math.max((progress - inicio) / 0.12, 0),
                1
              );

              return (
                <div
                  key={etapa.numero}
                  className="border-t-2 border-nana-creme pt-6"
                  style={{
                    opacity: entrada,
                    transform: `translateY(${50 - entrada * 50}px)`,
                  }}
                >
                  <p className="font-londrina-light text-6xl leading-none">
                    {etapa.numero}
                  </p>

                  <h3 className="mt-6 text-4xl uppercase leading-none">
                    {etapa.titulo}
                  </h3>

                  <p className="mt-5 max-w-[220px] text-sm leading-relaxed opacity-70">
                    {etapa.descricao}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}