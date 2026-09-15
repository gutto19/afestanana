"use client";

import { useEffect, useRef, useState } from "react";
import TransicaoContato from "@/components/TransicaoContato";
import TransicaoContatoLaranja from "@/components/TransicaoContatoLaranja";

export default function Contato() {
const sectionRef = useRef<HTMLElement | null>(null);
const fechamentoRef = useRef<HTMLElement | null>(null);
const [fechamentoProgress, setFechamentoProgress] = useState(0);

const [progress, setProgress] = useState(0);
const [formAberto, setFormAberto] = useState(false);

const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [assunto, setAssunto] = useState("");
const [mensagem, setMensagem] = useState("");

useEffect(() => {
const atualizar = () => {
if (!sectionRef.current) return;


  const rect = sectionRef.current.getBoundingClientRect();
  const altura = window.innerHeight;

  const inicio = altura * 0.85;
  const fim = altura * 0.25;

  const total = inicio - fim;
  const atual = inicio - rect.top;

  const calculado = Math.min(
    Math.max(atual / total, 0),
    1
  );

  setProgress(calculado);
  if (fechamentoRef.current) {
    const fechamentoRect =
        fechamentoRef.current.getBoundingClientRect();

    const fechamentoInicio = altura * 0.9;
    const fechamentoFim = altura * 0.1;

    const fechamentoTotal =
        fechamentoInicio - fechamentoFim;

    const fechamentoAtual =
        fechamentoInicio - fechamentoRect.top;

    const fechamentoCalculado = Math.min(
        Math.max(
        fechamentoAtual / fechamentoTotal,
        0
        ),
        1
    );

    setFechamentoProgress(fechamentoCalculado);
    }
};

atualizar();

window.addEventListener("scroll", atualizar);

return () => {
  window.removeEventListener("scroll", atualizar);
};


}, []);

const entrada = Math.min(progress * 1.5, 1);

const enviarWhatsApp = () => {
  if (!nome.trim() || !mensagem.trim()) {
    return;
  }

  const texto = `Olá, NãNA!

Meu nome é ${nome}.

Vim pelo site da NãNA e gostaria de falar sobre ${assunto || "uma dúvida"}.

${mensagem}

${email ? `Meu e-mail: ${email}` : ""}

Até breve!`;

  const url = `https://wa.me/5577981272224?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
};

return ( <main className="min-h-screen bg-nana-creme text-nana-laranja font-vinila">


  {/* =========================================
      NAVBAR
  ========================================= */}

  <nav className="flex items-center justify-between px-10 py-6">

    <a
      href="/"
      className="text-4xl"
    >
      NãNA
    </a>

    <div className="flex gap-8 text-sm uppercase">

      <a
        href="/som-estetica"
        className="transition-opacity hover:opacity-70"
      >
        Som & Estética
      </a>

      <a
        href="/time"
        className="transition-opacity hover:opacity-70"
      >
        Time
      </a>

      <a
        href="/contato"
        className="text-nana-azul"
      >
        Contato
      </a>

    </div>

  </nav>


  {/* =========================================
      ABERTURA
  ========================================= */}

  <section
    ref={sectionRef}
    className="flex min-h-[85vh] items-center px-10 py-32"
  >

    <div className="mx-auto w-full max-w-7xl">

      <p
        className="mb-10 text-sm uppercase tracking-[0.3em] text-nana-azul"
        style={{
          opacity: entrada,
          transform: `translateY(${
            30 - entrada * 30
          }px)`,
        }}
      >
        Vamos conversar
      </p>

      <h1
        className="max-w-6xl text-6xl uppercase leading-[0.9] md:text-[10rem]"
        style={{
          opacity: entrada,
          transform: `translateY(${
            60 - entrada * 60
          }px)`,
        }}
      >

        Quer fazer

        <br />

        <span className="font-londrina-black text-nana-azul">
          parte?
        </span>

      </h1>

      <p
        className="mt-16 max-w-2xl text-xl leading-relaxed"
        style={{
          opacity: Math.min(
            Math.max((progress - 0.25) * 1.5, 0),
            1
          ),
          transform: `translateY(${
            30 -
            Math.min(
              Math.max((progress - 0.25) * 1.5, 0),
              1
            ) *
              30
          }px)`,
        }}
      >
        A NãNA está aberta para encontros,
        parcerias e novas possibilidades.
      </p>

    </div>

  </section>

    <TransicaoContato />

  {/* =========================================
      CONTATO
  ========================================= */}

  <section className="min-h-screen bg-nana-azul px-10 py-32 text-nana-creme">

    <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center">

      <p className="mb-10 text-sm uppercase tracking-[0.3em] text-nana-amarelo">
        Fale com a NãNA
      </p>

      <h2 className="max-w-5xl text-5xl uppercase leading-[0.95] md:text-8xl">

        Música.

        <br />

        Cultura.

        <br />

        <span className="font-manteiga text-nana-amarelo">
          Encontros.
        </span>

      </h2>


      {/* CONTATOS */}

      <div className="mt-20 grid gap-6 md:grid-cols-2">

        {/* E-MAIL */}

        <a
          href="mailto:afestanana@gmail.com"
          className="group border-t-2 border-nana-creme pt-6 transition-opacity hover:opacity-70"
        >

          <div className="mb-8 flex items-center gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-nana-amarelo">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-7 w-7 text-nana-amarelo"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />

                <path d="m3 7 9 6 9-6" />
              </svg>

            </div>

            <span className="text-sm uppercase tracking-[0.25em] text-nana-amarelo">
              E-mail
            </span>

          </div>

          <p className="break-all text-2xl md:text-4xl">
            afestanana@gmail.com
          </p>

        </a>


        {/* WHATSAPP */}

        <button
          type="button"
          onClick={() => setFormAberto(true)}
          className="group border-t-2 border-nana-creme pt-6 text-left transition-opacity hover:opacity-70"
        >

          <div className="mb-8 flex items-center gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-nana-amarelo">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-7 w-7 text-nana-amarelo"
              >
                <path
                  d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
                />

                <path
                  d="M8.5 9.5c.3 1.8 1.7 3.6 3.7 4.5"
                />

                <path
                  d="M8.5 9.5c.3-.6.6-1 .9-1"
                />

                <path
                  d="M12.2 14c.5.2 1 .3 1.5.3"
                />
              </svg>

            </div>

            <span className="text-sm uppercase tracking-[0.25em] text-nana-amarelo">
              WhatsApp
            </span>

          </div>

          <p className="text-2xl md:text-4xl">
            Tem uma pergunta?
          </p>

          <p className="mt-3 text-lg opacity-70">
            Fale com a gente.
          </p>

        </button>

      </div>

    </div>

  </section>

    <TransicaoContatoLaranja />

    {/* =========================================
        POSSIBILIDADES
    ========================================= */}

    <section className="min-h-[100vh] bg-nana-laranja px-10 py-32 text-nana-creme">

    <div className="mx-auto max-w-7xl">

        <p className="mb-20 text-sm uppercase tracking-[0.3em]">
        A gente conversa sobre
        </p>

        <div className="relative">

        {/* LINHA CENTRAL */}

        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-nana-creme/30 md:block" />

        {[
            {
            numero: "01",
            titulo: "Eventos",
            texto: "Encontros que ganham forma.",
            lado: "esquerda",
            },
            {
            numero: "02",
            titulo: "Parcerias",
            texto: "Marcas, espaços e pessoas.",
            lado: "direita",
            },
            {
            numero: "03",
            titulo: "Curadoria",
            texto: "Música pensada para cada momento.",
            lado: "esquerda",
            },
            {
            numero: "04",
            titulo: "Comunicação",
            texto: "Ideias que encontram sua voz.",
            lado: "direita",
            },
        ].map((item, index) => {

            const aparece = Math.min(
            Math.max((progress - 0.18 - index * 0.08) * 2.5, 0),
            1
            );

            return (
            <div
                key={item.numero}
                className={`relative mb-20 flex md:mb-28 ${
                item.lado === "direita"
                    ? "md:justify-end"
                    : "md:justify-start"
                }`}
                style={{
                opacity: aparece,
                transform: `translateX(${
                    item.lado === "esquerda"
                    ? -60 + aparece * 60
                    : 60 - aparece * 60
                }px)`,
                }}
            >

                <div
                className={`w-full md:w-[46%] ${
                    item.lado === "direita"
                    ? "md:text-left"
                    : "md:text-right"
                }`}
                >

                {/* NÚMERO */}

                <p className="mb-4 text-sm tracking-[0.3em] opacity-60">
                    {item.numero}
                </p>

                {/* TÍTULO */}

                <h3 className="text-6xl uppercase leading-[0.8] md:text-8xl">
                    {item.titulo}
                </h3>

                {/* LINHA */}

                <div
                    className={`my-6 h-[2px] w-full bg-nana-creme ${
                    item.lado === "direita"
                        ? "md:origin-left"
                        : "md:origin-right"
                    }`}
                    style={{
                    transform: `scaleX(${aparece})`,
                    }}
                />

                {/* DESCRIÇÃO */}

                <p className="max-w-md text-lg leading-relaxed opacity-70 md:ml-auto">
                    {item.texto}
                </p>

                </div>

            </div>
            );
        })}

        </div>

    </div>

    </section>


    {/* =========================================
        FECHAMENTO
    ========================================= */}

    <section
    ref={fechamentoRef}
    className="relative flex min-h-[120vh] items-center justify-center overflow-hidden bg-nana-creme px-10 py-32"
    >

    <div className="sticky top-0 flex h-screen w-full items-center justify-center">

        <div className="text-center">

        {/* TEXTO SUPERIOR */}

        <p
            className="mb-10 text-sm uppercase tracking-[0.3em] text-nana-azul"
            style={{
            opacity: Math.min(fechamentoProgress / 0.25, 1),
            transform: `translateY(${
                30 -
                Math.min(fechamentoProgress / 0.25, 1) * 30
            }px)`,
            }}
        >
            Uma experiência
        </p>


        {/* NãNA */}

        <h2
            className="text-[24vw] uppercase leading-none text-nana-azul"
            style={{
            transform: `scale(${
                0.45 +
                Math.min(
                Math.max((fechamentoProgress - 0.15) / 0.6, 0),
                1
                ) *
                0.55
            })`,
            }}
        >
            NãNA
        </h2>


        {/* TEXTO FINAL */}

        <p
            className="mt-8 text-lg uppercase tracking-[0.2em]"
            style={{
            opacity: Math.min(
                Math.max((fechamentoProgress - 0.55) / 0.25, 0),
                1
            ),
            transform: `translateY(${
                30 -
                Math.min(
                Math.max((fechamentoProgress - 0.55) / 0.25, 0),
                1
                ) *
                30
            }px)`,
            }}
        >
            100% brasileira.
        </p>

        </div>

    </div>

    </section>


  {/* =========================================
      MODAL WHATSAPP
  ========================================= */}

  {formAberto && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-nana-marinho/80 px-6 py-10">

      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-nana-creme p-8 text-nana-marinho md:p-12">

        {/* FECHAR */}

        <button
          type="button"
          onClick={() => setFormAberto(false)}
          className="absolute right-6 top-6 text-3xl leading-none transition-opacity hover:opacity-50"
          aria-label="Fechar formulário"
        >
          ×
        </button>


        <p className="mb-8 text-sm uppercase tracking-[0.3em] text-nana-azul">
          Fale com a NãNA
        </p>

        <h3 className="max-w-xl text-4xl uppercase leading-none md:text-6xl">

          Manda sua
          <br />
          <span className="font-manteiga text-nana-laranja">
            pergunta.
          </span>

        </h3>


        {/* NOME */}

        <div className="mt-12">

          <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
            Nome *
          </label>

          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className="w-full border-b-2 border-nana-marinho bg-transparent py-4 text-xl outline-none placeholder:opacity-40 focus:border-nana-azul"
          />

        </div>


        {/* E-MAIL */}

        <div className="mt-8">

          <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
            E-mail
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="w-full border-b-2 border-nana-marinho bg-transparent py-4 text-xl outline-none placeholder:opacity-40 focus:border-nana-azul"
          />

        </div>


        {/* ASSUNTO */}

        <div className="mt-8">

          <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
            Assunto
          </label>

          <select
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
            className="w-full border-b-2 border-nana-marinho bg-transparent py-4 text-xl outline-none focus:border-nana-azul"
          >

            <option value="">
              Selecione
            </option>

            <option value="Evento">
              Evento
            </option>

            <option value="Parceria">
              Parceria
            </option>

            <option value="Curadoria">
              Curadoria
            </option>

            <option value="Comunicação">
              Comunicação
            </option>

            <option value="Outro">
              Outro
            </option>

          </select>

        </div>


        {/* MENSAGEM */}

        <div className="mt-8">

          <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
            Mensagem *
          </label>

          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Como podemos ajudar?"
            rows={4}
            className="w-full resize-none border-b-2 border-nana-marinho bg-transparent py-4 text-xl outline-none placeholder:opacity-40 focus:border-nana-azul"
          />

        </div>


        {/* ENVIAR */}

        <button
          type="button"
          onClick={enviarWhatsApp}
          disabled={!nome.trim() || !mensagem.trim()}
          className="mt-10 w-full bg-nana-azul px-6 py-5 text-lg uppercase tracking-[0.2em] text-nana-creme transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-30"
        >
          Enviar pelo WhatsApp
        </button>

      </div>

    </div>
  )}

</main>


);
}
