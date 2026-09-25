import Image from "next/image";
import TimePessoa from "@/components/TimePessoa";
import TimeApoio from "@/components/TimeApoio";
import TimeEncontro from "@/components/TimeEncontro";
import TimeFechamento from "@/components/TimeFechamento";

export default function Time() {
  return (
    <main className="min-h-screen bg-nana-creme text-nana-laranja font-vinila">

      {/* =========================================
          NAVBAR
      ========================================= */}

      <nav className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6 md:px-10">

        <a href="/" className="flex items-center">
          <Image
            src="/images/logoprincipal.svg"
            alt="NãNA"
            width={100}
            height={100}
            className="h-auto w-16 sm:w-20"
          />
        </a>

        <div className="flex gap-5 text-xs uppercase sm:gap-8 sm:text-sm">

          <a
            href="/som-estetica"
            className="transition-opacity hover:opacity-70"
          >
            O Som da Nãna
          </a>

          <a
            href="/time"
            className="text-nana-azul"
          >
            Time
          </a>

          <a
            href="/contato"
            className="transition-opacity hover:opacity-70"
          >
            Contato
          </a>

        </div>

      </nav>


      {/* =========================================
          ABERTURA
      ========================================= */}

      <section className="flex min-h-[85vh] items-center px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">

        <div className="mx-auto w-full max-w-7xl">

          <p className="mb-10 text-sm uppercase tracking-[0.3em] text-nana-azul">
            O time
          </p>

          <h1 className="max-w-6xl text-5xl uppercase leading-[1.05] sm:text-6xl md:text-7xl lg:text-[9rem]">

            Por trás da

            <br />

            <span className="font-londrina-black text-nana-azul">
                pista,
            </span>

            <br />

            <span className="font-manteiga text-nana-laranja">
                tem gente.
            </span>

          </h1>

          <p className="mt-16 max-w-xl text-xl leading-relaxed">
            Uma experiência construída por diferentes olhares,
            talentos e formas de transformar uma ideia em realidade.
          </p>

        </div>

      </section>


      {/* =========================================
          TATÁ
      ========================================= */}

        <TimePessoa
            numero="01"
            nome="Tatá"
            sobrenome="K-laça"
            funcao="DJ / Curador"
            chamada={
                <>
                Música como encontro,
                <br />
                memória e movimento.
                </>
            }
            descricao="Tatá traz para a NãNA um olhar que atravessa diferentes momentos da música brasileira, conectando referências, gerações e atmosferas."
            fundo="bg-nana-azul"
            corFuncao="text-nana-amarelo"
            corSobrenome="font-manteiga text-nana-amarelo"
            lado="esquerda"
            foto="/images/time/tata.jpeg"
        />


      {/* =========================================
          GUTO
      ========================================= */}

        <TimePessoa
            numero="02"
            nome="Guto"
            sobrenome="Corrêa"
            funcao="DJ / Curador"
            chamada={
                <>
                Música como energia,
                <br />
                descoberta e pista.
                </>
            }
            descricao="Guto traz uma pesquisa musical que passeia por diferentes ritmos e transforma referências inesperadas em movimento na pista."
            fundo="bg-nana-laranja"
            corFuncao="text-nana-marinho"
            corSobrenome="font-londrina-black text-nana-marinho"
            lado="direita"
            foto="/images/time/guto.jpeg"
        />


      {/* =========================================
          TIME POR TRÁS DA NÃNA
      ========================================= */}

      <TimeApoio />


      {/* =========================================
          ENCONTRO
      ========================================= */}

      <TimeEncontro />


      {/* =========================================
          FECHAMENTO
      ========================================= */}

      <TimeFechamento />

    </main>
  );
}
