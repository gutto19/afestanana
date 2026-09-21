import PlaylistCuradoria from "@/components/PlaylistCuradoria";
import TituloQuemFazOSom from "@/components/TituloQuemFazOSom";
import FotoRevelacao from "@/components/FotoRevelacao";
import FotoEntradaLateral from "@/components/FotoEntradaLateral";
import InfoDJ from "@/components/InfoDJ";
import TransformacaoMusical from "@/components/TransformacaoMusical";
import EsteticaVisual from "@/components/EsteticaVisual";

export default function SomEstetica() {
  return (
    <main className="min-h-screen bg-nana-creme text-nana-laranja font-vinila">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6 md:px-10">

        <a
          href="/"
          className="text-3xl sm:text-4xl"
        >
          NãNA
        </a>

        <div className="flex gap-5 text-xs uppercase sm:gap-8 sm:text-sm">

          <a
            href="/som-estetica"
            className="text-nana-azul"
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


      {/* =========================================
          MANIFESTO
      ========================================= */}

      <section className="flex min-h-[85vh] items-center px-10 py-32">

        <div className="mx-auto max-w-7xl 2xl:max-w-[1800px]">

          <p className="mb-10 text-sm uppercase tracking-[0.3em] text-nana-azul">
            Som & Estética
          </p>


          <h1 className="text-5xl uppercase leading-[1.05] sm:text-6xl md:text-7xl min-[900px]:text-9xl xl:text-[9rem] 2xl:text-[11rem]">

            O Brasil

            <br />

            <span className="font-londrina-black text-nana-azul">
              não cabe
            </span>

            <br />

            em uma

            <br />

            <span className="font-manteiga text-nana-laranja">
              playlist.
            </span>

          </h1>


          <div className="mt-16 max-w-xl">

            <p className="text-xl leading-relaxed">
              A NãNA nasce do encontro entre ritmos,
              gerações e estéticas. Uma curadoria que
              atravessa diferentes formas de viver
              a música brasileira.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          CURADORIA
      ========================================= */}

      <section className="bg-nana-marinho px-10 py-32 text-nana-creme">

        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">

          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-nana-amarelo">
            Curadoria
          </p>


          <h2 className="max-w-5xl text-5xl uppercase leading-[1.05] md:text-8xl">

            Do{" "}
            <span className="font-londrina-black text-nana-azul">
              pop
            </span>{" "}
            ao{" "}
            <span className="font-manteiga text-nana-amarelo">
              funk.
            </span>

            <br />

            Do{" "}
            <span className="font-jaro text-nana-laranja">
              axé
            </span>{" "}
            ao{" "}
            <span className="font-londrina-black text-nana-dourado">
              tecnobrega.
            </span>

            <br />

            Do{" "}
            <span className="font-londrina-light">
              forró
            </span>{" "}
            à{" "}
            <span className="font-manteiga text-nana-azul">
              MPB clássica.
            </span>

          </h2>


          <div className="mt-24 grid gap-12 md:grid-cols-2">

            <div>

              <p className="text-3xl leading-tight">
                Diferentes sons.
                <br />
                Diferentes momentos.
              </p>

            </div>


            <div>

              <p className="text-lg leading-relaxed opacity-80">
                A música não é estática. Ela se transforma
                ao longo da noite, criando encontros
                inesperados e mantendo a pista em movimento.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          QUEM FAZ O SOM
      ========================================= */}

      <section className="relative overflow-hidden bg-nana-creme px-5 py-32 text-nana-marinho sm:px-8 md:px-10">

        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">

          {/* TÍTULO */}

          <div className="mb-24">
            <TituloQuemFazOSom />
          </div>


          {/* =====================================
              DJS
          ===================================== */}

          <div className="grid gap-10 sm:gap-12 xl:grid-cols-2 xl:gap-16">


            {/* ===================================
                TATÁ
            =================================== */}

            <article className="group relative">

            <div className="relative min-h-[700px] overflow-hidden bg-nana-azul p-5 text-nana-creme sm:p-8 md:p-12">

                {/* FOTO */}

                <FotoRevelacao
                  src="/images/tata.jpeg"
                  alt="Tatá K-laça"
                />

                {/* INFORMAÇÕES */}

                <InfoDJ
                  numero="01"
                  nome="Tatá"
                  sobrenome="K-laça"
                  variante="tata"
                  estilos={["POP", "AXÉ", "MPB"]}
                />

            </div>

            {/* SPOTIFY */}
            <PlaylistCuradoria
              variante="tata"
              nome="Brasil em movimento"
              descricao="Uma seleção que atravessa diferentes momentos da música brasileira."
              spotifyUrl="https://open.spotify.com/playlist/37i9dQZF1E4lzRSQeaFgMd?si=f0bd138187e645d3"
            />

            </article>

            {/* ===================================
                GUTO
            =================================== */}

            <article className="group relative xl:mt-32">

            <div className="relative min-h-[700px] overflow-hidden bg-nana-laranja p-5 text-nana-creme sm:p-8 md:p-12">

                {/* FOTO */}

                <FotoEntradaLateral
                  src="/images/guto.jpeg"
                  alt="Guto Corrêa"
                />


                {/* INFORMAÇÕES */}

                <InfoDJ
                  numero="02"
                  nome="Guto"
                  sobrenome="Corrêa"
                  variante="guto"
                  estilos={["FUNK", "PISEIRO", "TECNOBREGA"]}
                />

            </div>


            {/* SPOTIFY */}
            <PlaylistCuradoria
              variante="guto"
              nome="Brasil em movimento"
              descricao="Uma seleção que atravessa diferentes ritmos e momentos da pista."
              spotifyUrl="#"
            />

            </article>

          </div>

        </div>

      </section>


      {/* =========================================
          TRANSFORMAÇÃO
      ========================================= */}

      <TransformacaoMusical />

      {/* =========================================
          ESTÉTICA
      ========================================= */}

      <EsteticaVisual />

      {/* =========================================
          FECHAMENTO
      ========================================= */}

      <section className="bg-nana-marinho px-10 py-40 text-center text-nana-creme">

        <p className="text-sm uppercase tracking-[0.3em] text-nana-amarelo">
          NãNA
        </p>

        <h2 className="mx-auto mt-8 max-w-5xl text-4xl uppercase leading-[0.85] sm:text-5xl md:text-7xl lg:text-9xl">

          Uma experiência

          <br />

          <span className="font-manteiga text-nana-laranja">
            100% brasileira.
          </span>

        </h2>

      </section>

    </main>
  );
}