import Image from "next/image";
import CurvaEnergia from "@/components/CurvaEnergia";

export default function Home() {
  return (
    <main className="min-h-screen bg-nana-creme text-nana-laranja font-vinila">

      {/* HERO + NAVBAR */}
      <div className="relative overflow-hidden">

        {/* IMAGEM DE FUNDO */}
        <Image
          src="/images/templetes/teste.jpg"
          alt=""
          fill
          priority
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* NAVBAR */}
        <nav className="relative z-10 flex items-center justify-between px-5 py-5 text-nana-creme sm:px-8 sm:py-6 md:px-10">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logominiprincipal.svg"
              alt="NãNA"
              width={50}
              height={50}
              className="h-auto w-8 sm:w-10 md:w-12"
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
        <section className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-5 py-16 text-center text-nana-creme sm:px-8 md:px-10">

          <div className="mb-8 shrink-0 sm:mb-10 md:mb-12">
            <Image
              src="/images/logonana-hero.svg"
              alt="Logo NãNA"
              width={280}
              height={280}
              className="h-auto w-40 sm:w-48 md:w-56 lg:w-64"
            />
          </div>

          <h1 className="max-w-5xl font-bold text-5xl uppercase leading-[0.95] sm:text-6xl md:text-8xl md:leading-[1.05]">
            Onde a{" "}
            <span className="font-manteiga">
              brasilidade
            </span>
            <br />
            perde a casca.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-tight sm:mt-8 sm:text-xl">
            Do pop ao funk. Do axé ao technobrega.{" "}
            Do forró à MPB clássica.{" "}
            A Nãna é uma experiência sonora e visual <span className="font-bold">100% brasileira</span>,
            feita para movimentar a pista de São Paulo.
          </p>

        </section>

      </div>

      {/* SOBRE */}
      <section
        id="sobre"
        className="min-h-screen bg-nana-creme px-10 py-32 text-nana-creme"
      >
        <div className="mx-auto max-w-6xl">

          <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1fr)_220px]">

            {/* TEXTO */}
            <div>

              <h2 className="mb-6 text-base tracking-[0.3em] text-nana-laranja sm:text-lg">
                SOBRE A NãNA
              </h2>

              <h2 className="mb-10 max-w-5xl text-5xl uppercase leading-[0.95] text-nana-oliva md:text-7xl">
                Uma celebração da cultura brasileira em toda a{" "}
                <span className="font-londrina-black text-nana-laranja">
                  multiplicidade.
                </span>
              </h2>

              <div className="max-w-3xl text-nana-oliva">
                <p className="text-2xl leading-relaxed">
                  A NãNA nasce do desejo de celebrar o Brasil através
                  de seus ritmos, gerações e estéticas.
                  Um encontro entre diferentes sonoridades e formas de viver a música brasileira.
                  <br />
                  Uma curadoria plural, irreverente e conectada às diferentes fases, ritmos e referências
                  que fazem a música brasileira pulsar em São Paulo.
                </p>
              </div>

            </div>

            {/* ELEMENTOS GRÁFICOS */}
            <div className="flex flex-col items-end gap-4">

            <Image
              src="/images/templetes/home/sobre/anima1.svg"
              alt=""
              width={180}
              height={180}
              className="h-auto w-28 origin-center sm:w-36 md:w-44"
              style={{
                animation: "nana-balançar 2s ease-in-out infinite",
              }}
            />

            <Image
              src="/images/templetes/home/sobre/anima3.svg"
              alt=""
              width={180}
              height={180}
              className="h-auto w-28 origin-center sm:w-36 md:w-44"
              style={{
                animation: "nana-balançar-inverso 2.3s ease-in-out infinite",
              }}
            />

            </div>

          </div>

        </div>
      </section>

      {/* PROJETO NÃNA */}
      <section
        id="projeto"
        className="relative min-h-screen overflow-hidden bg-nana-marinho px-10 py-32 text-nana-creme"
      >

      {/* ELEMENTO MUSICAL + QR CODE */}
        {/* ORELHÃO + QR CODE */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-10">

          {/* ORELHÃO */}
          <Image
            src="/images/templetes/home/metamorfose/orelhao_fundo2.svg"
            alt=""
            width={480}
            height={480}
            className="h-auto w-56 sm:w-72 md:w-80 lg:w-[30rem]"
          />

          {/* QR CODE */}
          <a
            href="https://open.spotify.com/playlist/3gHwb9c1zBqUhfa2AJmBUb?si=gSBCLX0FTICERxIzGVAjKw&utm_source=copy-link&pi=AAEN27MVRtGkT"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto absolute left-[39%] top-[38%] -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/images/templetes/home/metamorfose/qr.png"
              alt="Acesse a NãNA no Spotify"
              width={180}
              height={180}
              className="h-auto w-35 sm:w-36 md:w-80 lg:w-80"
            />
          </a>

        </div>

        {/* CONTEÚDO DA METAMORFOSE */}

        <div className="mx-auto max-w-7xl">

          <div className="max-w-6xl">

            {/* TÍTULO */}

            <h2 className="mb-6 text-base uppercase tracking-[0.3em] text-nana-amarelo sm:text-lg">
              A Metamorfose Ambulante
            </h2>

            <h2 className="max-w-6xl text-4xl uppercase leading-[0.9] sm:text-5xl md:text-7xl lg:text-8xl">
              O Brasil está sempre{" "}
              <br />
              <span className="font-londrina-black">
                em movimento
              </span>.
            </h2>

            {/* INTRODUÇÃO */}

            <div className="mt-12 flex items-start gap-5 md:mt-20 md:gap-8">

              <div className="shrink-0 pt-1">
                <Image
                  src="/images/templetes/home/metamorfose/tue.png"
                  alt=""
                  width={180}
                  height={180}
                  className="h-auto w-24 sm:w-28 md:w-40"
                />
              </div>

              <div className="max-w-[650px]">
                <p className="font-vinila text-2xl leading-relaxed">
                  A NãNA nasceu para celebrar a música brasileira em sua totalidade.
                  A banana é nosso símbolo: da maturação ao ponto
                  de fervo, ela se transforma, assim como a nossa pista. Do começo
                  da noite às luzes se acenderem, construímos uma curva de energia
                  que mantém o corpo em movimento e a mente livre de carão.
                </p>
              </div>

            </div>

          </div>

        </div>
        </section> 

        {/* CURVA DE ENERGIA */}
        <section
          id="curva"
          className="min-h-screen bg-nana-oliva px-10 py-32 text-nana-creme"
        >
          <div className="mx-auto max-w-7xl">

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
        </section>

    </main>
  );
}