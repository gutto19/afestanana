"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Pessoa = {
  numero: string;
  nome: string;
  funcao: string;
  descricao: string;
  corNumero: string;
  foto: string;
  palavras?: string[];
  formas?: boolean;
  tecnologia?: boolean;
};

const pessoas: Pessoa[] = [
  {
    numero: "03",
    nome: "Zé Junior",
    funcao: "Assessor de Comunicação",
    descricao:
      "Comunicação que conecta a NãNA com as pessoas, amplia sua presença e dá voz ao projeto.",
    corNumero: "text-nana-laranja",
    foto: "/images/time/ze-junior.jpeg",
    palavras: ["CONECTAR", "COMUNICAR", "PRESENÇA", "VOZ"],
  },
  {
    numero: "04",
    nome: "Pierre D'Akkel",
    funcao: "Designer",
    descricao:
      "A identidade visual que transforma a linguagem da NãNA em imagem, forma e desejo.",
    corNumero: "text-nana-azul",
    foto: "/images/time/pierre-dakkel.jpeg",
    formas: true,
  },
  {
    numero: "05",
    nome: "Guga Cardoso",
    funcao: "Desenvolvimento / Tecnologia",
    descricao:
      "Tecnologia que transforma ideias em experiências digitais e sustenta a presença da NãNA.",
    corNumero: "text-nana-laranja",
    foto: "/images/time/guga-cardoso.jpeg",
    tecnologia: true,
  },
];

export default function TimeApoio() {
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

  const tituloEntrada = Math.min(progress * 3, 1);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[180vh] bg-nana-creme px-10 py-32 text-nana-marinho"
    >
      <div className="sticky top-0 flex min-h-screen items-center">

        <div className="mx-auto w-full max-w-7xl">

          {/* TÍTULO */}

          <div
            style={{
              opacity: tituloEntrada,
              transform: `translateY(${
                40 - tituloEntrada * 40
              }px)`,
            }}
          >
            <p className="mb-10 text-sm uppercase tracking-[0.3em] text-nana-azul">
              Além da pista
            </p>

            <h2 className="max-w-5xl text-6xl uppercase leading-[1] md:text-9xl">
              Uma NãNA

              <br />

              <span className="font-londrina-black text-nana-azul">
                não acontece
              </span>

              <br />

              <span className="font-manteiga text-nana-laranja">
                sozinha.
              </span>
            </h2>
          </div>


          {/* PESSOAS */}

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            {pessoas.map((pessoa, index) => {

              const inicio = 0.35 + index * 0.18;

              const entrada = Math.min(
                Math.max(
                  (progress - inicio) / 0.15,
                  0
                ),
                1
              );

              return (
                <div
                  key={pessoa.numero}
                  className="border-t-2 border-nana-marinho pt-6"
                  style={{
                    opacity: entrada,
                    transform: `translateY(${
                      60 - entrada * 60
                    }px)`,
                  }}
                >

                  {/* FOTO + MARCAS DE COMUNICAÇÃO */}

                  <div className="relative mb-8 aspect-[4/5] w-full overflow-hidden">

                    <Image
                      src={pessoa.foto}
                      alt={pessoa.nome}
                      fill
                      className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    />

                    {pessoa.palavras && (
                      <>
                        {/* CONECTAR */}

                        <span
                          className="absolute left-4 top-6 z-10 font-londrina-black text-5xl uppercase leading-none text-nana-laranja/25"
                          style={{
                            opacity: Math.min(entrada * 1.2, 0.8),
                            transform: `translateX(${
                              -20 + entrada * 20
                            }px)`,
                          }}
                        >
                          {pessoa.palavras[0]}
                        </span>

                        {/* COMUNICAR */}

                        <span
                          className="absolute -right-8 top-[35%] z-10 font-londrina-black text-6xl uppercase leading-none text-nana-azul/25"
                          style={{
                            opacity: Math.min(
                              Math.max((entrada - 0.15) * 1.2, 0),
                              0.8
                            ),
                            transform: `translateX(${
                              30 - entrada * 30
                            }px)`,
                          }}
                        >
                          {pessoa.palavras[1]}
                        </span>

                        {/* PRESENÇA */}

                        <span
                          className="absolute bottom-10 left-4 z-10 font-londrina-black text-6xl uppercase leading-none text-nana-laranja/25"
                          style={{
                            opacity: Math.min(
                              Math.max((entrada - 0.3) * 1.2, 0),
                              0.8
                            ),
                            transform: `translateY(${
                              25 - entrada * 25
                            }px)`,
                          }}
                        >
                          {pessoa.palavras[2]}
                        </span>

                        {/* VOZ */}

                        <span
                          className="absolute -bottom-2 right-4 z-10 font-londrina-black text-5xl uppercase leading-none text-nana-azul/25"
                          style={{
                            opacity: Math.min(
                              Math.max((entrada - 0.45) * 1.2, 0),
                              0.8
                            ),
                            transform: `translateX(${
                              25 - entrada * 25
                            }px)`,
                          }}
                        >
                          {pessoa.palavras[3]}
                        </span>
                      </>
                    )}

                    {pessoa.formas && (
                      <>
                        {/* LINHA HORIZONTAL */}

                        <span
                          className="absolute left-0 top-[22%] z-10 h-[2px] w-full bg-nana-amarelo"
                          style={{
                            opacity: Math.min(entrada * 1.2, 0.45),
                            transform: `translateX(${
                              -40 + entrada * 40
                            }px)`,
                          }}
                        />

                        {/* LINHA VERTICAL */}

                        <span
                          className="absolute bottom-0 right-[22%] z-10 h-full w-[2px] bg-nana-azul"
                          style={{
                            opacity: Math.min(
                              Math.max((entrada - 0.15) * 1.2, 0),
                              0.45
                            ),
                            transform: `translateY(${
                              40 - entrada * 40
                            }px)`,
                          }}
                        />

                        {/* QUADRADO */}

                        <span
                          className="absolute left-[12%] top-[32%] z-10 h-24 w-24 border-2 border-nana-laranja"
                          style={{
                            opacity: Math.min(
                              Math.max((entrada - 0.25) * 1.2, 0),
                              0.5
                            ),
                            transform: `scale(${
                              0.6 + entrada * 0.4
                            })`,
                          }}
                        />

                        {/* CÍRCULO */}

                        <span
                          className="absolute bottom-[18%] right-[12%] z-10 h-20 w-20 rounded-full border-2 border-nana-amarelo"
                          style={{
                            opacity: Math.min(
                              Math.max((entrada - 0.4) * 1.2, 0),
                              0.5
                            ),
                            transform: `scale(${
                              0.5 + entrada * 0.5
                            })`,
                          }}
                        />
                      </>
                    )}

                   {pessoa.tecnologia && (
                    <>
                      {/* MARCAS DE TECNOLOGIA */}

                      {/* SYSTEM */}

                      <span
                        className="absolute left-4 top-4 z-10 font-mono text-xs uppercase tracking-[0.2em] text-nana-amarelo"
                        style={{
                          opacity: Math.min(entrada * 1.2, 0.6),
                          transform: `translateX(${
                            -15 + entrada * 15
                          }px)`,
                        }}
                      >
                        SYSTEM / 05
                      </span>

                      {/* INDICADOR */}

                      <span
                        className="absolute right-4 top-4 z-10 h-3 w-3 rounded-full border border-nana-amarelo"
                        style={{
                          opacity: Math.min(
                            Math.max((entrada - 0.1) * 1.5, 0),
                            0.7
                          ),
                          transform: `scale(${entrada})`,
                        }}
                      />

                      {/* LINHA DE CONEXÃO */}

                      <span
                        className="absolute left-4 top-[28%] z-10 h-[1px] w-[55%] bg-nana-azul"
                        style={{
                          opacity: Math.min(
                            Math.max((entrada - 0.15) * 1.2, 0),
                            0.5
                          ),
                          transform: `scaleX(${entrada})`,
                          transformOrigin: "left",
                        }}
                      />

                      {/* PONTO */}

                      <span
                        className="absolute left-[55%] top-[28%] z-10 h-3 w-3 rounded-full bg-nana-azul"
                        style={{
                          opacity: Math.min(
                            Math.max((entrada - 0.25) * 1.5, 0),
                            0.7
                          ),
                          transform: `scale(${entrada})`,
                        }}
                      />

                      {/* DADOS */}

                      <span
                        className="absolute bottom-4 right-4 z-10 font-mono text-xs uppercase tracking-[0.15em] text-nana-creme"
                        style={{
                          opacity: Math.min(
                            Math.max((entrada - 0.35) * 1.2, 0),
                            0.55
                          ),
                          transform: `translateY(${
                            15 - entrada * 15
                          }px)`,
                        }}
                      >
                        DATA / ONLINE
                      </span>
                    </>
                  )}

                  </div>

                  {/* NÚMERO */}

                  <p
                    className={`text-sm uppercase tracking-[0.25em] ${pessoa.corNumero}`}
                  >
                    {pessoa.numero}
                  </p>


                  {/* NOME */}

                  <h3 className="mt-8 text-5xl uppercase leading-none">
                    {pessoa.nome}
                  </h3>


                  {/* FUNÇÃO */}

                  <p className="mt-5 text-sm uppercase tracking-[0.2em] opacity-60">
                    {pessoa.funcao}
                  </p>


                  {/* DESCRIÇÃO */}

                  <p className="mt-8 text-lg leading-relaxed opacity-80">
                    {pessoa.descricao}
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