"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

type TimePessoaProps = {
  numero: string;
  nome: string;
  sobrenome: string;
  funcao: string;
  chamada: ReactNode;
  descricao: string;
  fundo: string;
  corFuncao: string;
  corSobrenome: string;
  lado: "esquerda" | "direita";
  foto: string;
};

export default function TimePessoa({
  numero,
  nome,
  sobrenome,
  funcao,
  chamada,
  descricao,
  fundo,
  corFuncao,
  corSobrenome,
  lado,
  foto,
}: TimePessoaProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const atualizar = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const altura = window.innerHeight;

      const inicio = altura * 0.85;
      const fim = altura * 0.3;
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
    Math.max((progress - 0.15) / 0.85, 0),
    1
  );

  const deslocamento = 100 - entrada * 100;

  const deslocamentoTexto =
    lado === "esquerda"
      ? -deslocamento
      : deslocamento;

  return (
    <section
      ref={sectionRef}
      className={`${fundo} relative overflow-hidden px-10 py-32 text-nana-creme`}
    >
      <div className="mx-auto max-w-7xl">

        {/* NÚMERO */}

        <p
          className="mb-8 text-sm uppercase tracking-[0.3em]"
          style={{
            color: corFuncao.replace("text-", ""),
            opacity: entrada,
            transform: `translateX(${deslocamentoTexto * 0.5}px)`,
          }}
        >
          {numero} / {nome} {sobrenome}
        </p>


        {/* CONTEÚDO */}


        <div className="grid gap-16 md:grid-cols-2">

          {/* FOTO */}

          <div
            className={
              lado === "esquerda"
                ? "order-1"
                : "order-1 md:order-2"
            }
            style={{
              opacity: entrada,
              transform: `translateX(${
                lado === "esquerda"
                  ? -deslocamento * 0.7
                  : deslocamento * 0.7
              }px)`,
            }}
          >
            <div
              className={`relative aspect-[4/5] w-[75%] overflow-hidden ${
                lado === "esquerda" ? "mr-auto" : "ml-auto"
              }`}
            >
              <Image
                src={foto}
                alt={`${nome} ${sobrenome}`}
                fill
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>


          {/* INFORMAÇÕES */}

          <div
            className={
              lado === "esquerda"
                ? "order-2"
                : "order-2 md:order-1"
            }
            style={{
              opacity: entrada,
              transform: `translateX(${deslocamentoTexto}px)`,
            }}
          >

            <h2 className="text-7xl uppercase leading-[0.8] md:text-9xl">

              {nome}

              <br />

              <span className={corSobrenome}>
                {sobrenome}
              </span>

            </h2>

            <p
              className={`mt-8 text-sm uppercase tracking-[0.3em] ${corFuncao}`}
            >
              {funcao}
            </p>


            <div
              className="mt-16"
              style={{
                opacity: Math.min(
                  Math.max((progress - 0.25) / 0.75, 0),
                  1
                ),
                transform: `translateY(${
                  40 -
                  Math.min(
                    Math.max((progress - 0.25) / 0.75, 0),
                    1
                  ) * 40
                }px)`,
              }}
            >

              <p className="text-2xl leading-tight">
                {chamada}
              </p>

              <p className="mt-8 text-lg leading-relaxed opacity-80">
                {descricao}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}