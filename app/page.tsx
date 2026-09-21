import CurvaEnergia from "@/components/CurvaEnergia";

export default function Home() {
  return (
    <main className="min-h-screen bg-nana-creme text-nana-laranja font-vinila">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-6">
        <a href="/" className="text-4xl">
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
            className="transition-opacity hover:opacity-70"
          >
            Contato
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-5 py-16 text-center sm:px-8 md:px-10">

        <p className="mb-5 text-xs uppercase tracking-[0.2em] sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
          Muito prazer, somos a NãNA.
        </p>

        <h1 className="max-w-6xl text-5xl uppercase leading-[0.95] sm:text-6xl md:text-8xl md:leading-[1.05]">

          Mais que uma{" "}
          <span className="font-londrina-black text-nana-azul">
            pista
          </span>{" "}
          de dança,

          <br className="hidden md:block" />

          {" "}uma{" "}
          <span className="font-manteiga text-nana-azul">
            experiência
          </span>

          <br className="hidden md:block" />

          {" "}
          <span className="font-jaro">
            100%
          </span>{" "}
          brasileira.

        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed sm:mt-10 sm:text-xl">
          Do pop ao funk. Do{" "}
          <span className="text-nana-azul">
            axé
          </span>{" "}
          ao tecnobrega.
          <br className="hidden sm:block" />
          {" "}Do forró à{" "}
          <span className="text-nana-azul">
            MPB clássica.
          </span>
        </p>

        <a
          href="#sobre"
          className="mt-8 border-2 border-nana-laranja px-7 py-3 text-xs uppercase transition hover:bg-nana-laranja hover:text-nana-creme sm:mt-10 sm:px-8 sm:py-4 sm:text-sm"
        >
          Conheça a NãNA
        </a>

      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="min-h-screen bg-nana-laranja px-10 py-32 text-nana-creme"
      >
        <div className="mx-auto max-w-6xl">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-nana-azul">
            Sobre a NãNA
          </p>

          <h2 className="max-w-5xl text-5xl uppercase leading-[0.95] md:text-7xl">
            Uma celebração da cultura brasileira em toda a{" "}
            <span className="font-londrina-black text-nana-azul">
              multiplicidade.
            </span>
          </h2>

          <div className="mt-10 grid gap-10 md:mt-16 md:gap-12 md:grid-cols-2">

            <div>
              <p className="text-2xl leading-relaxed">
                A NãNA nasce do desejo de celebrar o Brasil através
                de seus ritmos, gerações e estéticas.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed">
                Um encontro entre diferentes sonoridades e formas de
                viver a música brasileira. Uma experiência inclusiva,
                irreverente e conectada com a complexidade de São Paulo.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PROJETO NÃNA */}
      <section
        id="projeto"
        className="min-h-screen bg-nana-marinho px-10 py-32 text-nana-creme"
      >
        <div className="mx-auto max-w-7xl">

          {/* TÍTULO */}

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-nana-amarelo">
            Projeto NãNA
          </p>

          <h2 className="max-w-5xl text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9]">

            A{" "}
            <span className="font-manteiga text-nana-amarelo">
              Metamorfose
            </span>

            <br />

            <span className="font-londrina-black text-nana-azul">
              Ambulante.
            </span>

          </h2>

          {/* INTRODUÇÃO */}

          <div className="mt-12 grid gap-10 md:mt-20 md:gap-16 md:grid-cols-2">

            <div>
              <p className="text-3xl leading-tight">
                A noite não começa no auge.
                <br />
                Ela se transforma.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed">
                Nossa comunicação e curadoria musical acompanham
                esse processo de maturação. Do começo da noite
                até as luzes se acenderem, construímos uma curva
                de energia pensada para manter a pista cheia
                e pulsante do início ao fim.
              </p>
            </div>

          </div>

          {/* CURVA DE ENERGIA */}

          <div className="mt-32">

            <div className="mb-10 flex items-end justify-between">

              <p className="text-sm uppercase tracking-[0.3em] text-nana-amarelo">
                Curva de energia
              </p>

              <p className="hidden text-sm uppercase tracking-[0.2em] md:block">
                A noite em transformação
              </p>

            </div>

            {/* COMPOSIÇÃO SONORA */}

            <CurvaEnergia />

            {/* ETAPAS */}

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">

              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-nana-amarelo">
                  01
                </p>

                <h3 className="text-2xl uppercase">
                  Chegar
                </h3>

                <p className="mt-3 text-sm leading-relaxed opacity-70">
                  A noite começa.
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-nana-amarelo">
                  02
                </p>

                <h3 className="text-2xl uppercase">
                  Se entregar
                </h3>

                <p className="mt-3 text-sm leading-relaxed opacity-70">
                  A pista começa a responder.
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-nana-amarelo">
                  03
                </p>

                <h3 className="text-2xl uppercase">
                  Viver
                </h3>

                <p className="mt-3 text-sm leading-relaxed opacity-70">
                  Tudo se encontra. A pista pulsa.
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-nana-amarelo">
                  04
                </p>

                <h3 className="text-2xl uppercase">
                  Querer mais
                </h3>

                <p className="mt-3 text-sm leading-relaxed opacity-70">
                  A noite termina, mas a energia fica.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}