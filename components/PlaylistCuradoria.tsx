"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PlaylistCuradoriaProps = {
  nome: string;
  descricao: string;
  spotifyUrl: string;
  variante: "tata" | "guto";
};

type Musica = {
  titulo: string;
  artista: string;
  arquivo: string;
  capa: string;
};

export default function PlaylistCuradoria({
  nome,
  descricao,
  spotifyUrl,
  variante,
}: PlaylistCuradoriaProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // ESTADOS DO PLAYER
  const [tocando, setTocando] = useState(false);
  const [progresso, setProgresso] = useState(0);
  const [musicaAtual, setMusicaAtual] = useState(0);
  const [duracao, setDuracao] = useState(0);
  const [tempoAtual, setTempoAtual] = useState(0);
  const [musicas, setMusicas] = useState<Musica[]>([]);
  const [volume, setVolume] = useState(1);
  const [aleatorio, setAleatorio] = useState(false);
  const [historico, setHistorico] = useState<number[]>([]);
  const [repetir, setRepetir] = useState<
    "desligado" | "playlist" | "musica"
  >("desligado");
  
  // VARIANTE DA CURADORIA
  const isTata = variante === "tata";
  
  // CARREGA AS MÚSICAS DA API
  useEffect(() => {
    const carregarMusicas = async () => {
      try {
        const resposta = await fetch("/api/musicas");

        if (!resposta.ok) {
          throw new Error("Erro ao carregar músicas.");
        }

        const dados = await resposta.json();

        const musicasDoDj = isTata ? dados.tata : dados.guto;

        setMusicas(musicasDoDj);
      } catch (erro) {
        console.error("Erro ao carregar músicas:", erro);
      }
    };

    carregarMusicas();
  }, [isTata]);

  const musica = musicas[musicaAtual];

  if (!musica) {
    return null;
  }

  const tocarPausar = async () => {
    if (!audioRef.current) return;

    if (tocando) {
      audioRef.current.pause();
      setTocando(false);
    } else {
      try {
        await audioRef.current.play();
        setTocando(true);
      } catch (erro) {
        console.error("Erro ao reproduzir a música:", erro);
        setTocando(false);
      }
    }
  };

  const trocarMusica = (
    indice: number,
    adicionarHistorico = true
  ) => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    // Se estiver usando shuffle, registra a música atual no histórico
    if (aleatorio && adicionarHistorico && indice !== musicaAtual) {
      setHistorico((atual) => [...atual, musicaAtual]);
    }

    // Para a música atual
    audio.pause();

    // Atualiza a interface
    setMusicaAtual(indice);
    setProgresso(0);
    setTempoAtual(0);
    setDuracao(0);
    setTocando(true);

    // Carrega a nova música
    audio.src = musicas[indice].arquivo;
    audio.load();

    // Toca quando estiver pronta
    audio.oncanplay = async () => {
      try {
        await audio.play();
        setTocando(true);
      } catch (erro) {
        console.error("Erro ao reproduzir a música:", erro);
        setTocando(false);
      }
    };
  };

  const proximaMusica = () => {
    if (musicas.length <= 1) return;

    if (aleatorio) {
      let proxima = musicaAtual;

      while (proxima === musicaAtual) {
        proxima = Math.floor(Math.random() * musicas.length);
      }

      trocarMusica(proxima);
      return;
    }

    // Se estiver na última música
    if (musicaAtual === musicas.length - 1) {
      // Repeat playlist ligado → volta para a primeira
      if (repetir === "playlist") {
        trocarMusica(0);
      } else {
        // Repeat desligado → para no final
        setTocando(false);
      }

      return;
    }

    // Continua normalmente para a próxima música
    const proxima = musicaAtual + 1;

    trocarMusica(proxima);
  };

  const musicaAnterior = () => {
    // No shuffle, comportamento normal
    if (!aleatorio) {
      const anterior =
        (musicaAtual - 1 + musicas.length) % musicas.length;

      trocarMusica(anterior);
      return;
    }

    // No shuffle, volta pelo histórico
    if (historico.length > 0) {
      const novoHistorico = [...historico];
      const anterior = novoHistorico.pop();

      if (anterior !== undefined) {
        setHistorico(novoHistorico);
        trocarMusica(anterior, false);
      }

      return;
    }

    // Caso não exista histórico, permanece na música atual
    trocarMusica(musicaAtual, false);
  };

  const atualizarProgresso = () => {
    if (!audioRef.current) return;

    const atual = audioRef.current.currentTime;
    const duracaoAtual = audioRef.current.duration;

    setTempoAtual(atual);

    if (duracaoAtual) {
      setDuracao(duracaoAtual);
      setProgresso((atual / duracaoAtual) * 100);
    }
  };

  const formatarTempo = (tempo: number) => {
    if (!tempo || isNaN(tempo)) return "00:00";

    const minutos = Math.floor(tempo / 60);
    const segundos = Math.floor(tempo % 60);

    return `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(
      2,
      "0"
    )}`;
  };

  const mudarProgresso = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!audioRef.current) return;

    const novoProgresso = Number(event.target.value);

    audioRef.current.currentTime =
      (novoProgresso / 100) * audioRef.current.duration;

    setProgresso(novoProgresso);
  };

  const mudarVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;

    const novoVolume = Number(event.target.value);

    audioRef.current.volume = novoVolume;
    setVolume(novoVolume);
  };

  const musicaTerminou = () => {
    if (repetir === "musica") {
      trocarMusica(musicaAtual, false);
      return;
    }

    proximaMusica();
  };

  const alternarRepeticao = () => {
    setRepetir((atual) => {
      if (atual === "desligado") {
        return "playlist";
      }

      if (atual === "playlist") {
        return "musica";
      }

      return "desligado";
    });
  };

  return (
    <div
      className={
        isTata
          ? "bg-nana-amarelo text-nana-marinho"
          : "bg-nana-marinho text-nana-creme"
      }
    >
      {/* ÁUDIO */}

      <audio
        ref={audioRef}
        src={musica.arquivo}
        onTimeUpdate={atualizarProgresso}
        onEnded={musicaTerminou}
      />


      <div className="p-8 md:p-10">

        {/* CABEÇALHO */}

        <div className="flex items-start justify-between gap-6">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] opacity-60">
              Curadoria
            </p>

            <h4 className="mt-3 text-4xl uppercase leading-none">
              {nome}
            </h4>

            <p className="mt-3 max-w-md text-sm leading-relaxed opacity-60">
              {descricao}
            </p>

          </div>


          {/* PLAYLIST */}

          <div
            className={
              isTata
                ? "flex h-20 w-20 shrink-0 items-center justify-center bg-nana-azul text-nana-creme"
                : "flex h-20 w-20 shrink-0 items-center justify-center bg-nana-laranja text-nana-creme"
            }
          >

            <span className="font-londrina-black text-2xl">
              NãNA
            </span>

          </div>

        </div>


        {/* MÚSICA ATUAL */}

        <div className="mt-10 flex items-center gap-5">

          {/* CAPA */}

          <div className="relative h-24 w-24 shrink-0 overflow-hidden">
            <Image
              src={musica.capa}
              alt={`Capa de ${musica.titulo}`}
              fill
              className="object-cover"
            />
          </div>


          {/* INFORMAÇÕES */}

          <div>

            <p className="text-xs uppercase tracking-[0.2em] opacity-50">
              Tocando agora
            </p>

            <div className="mt-2">

              <p className="text-xl uppercase">
                {musica.titulo}
              </p>

              <p className="text-sm opacity-50">
                {musica.artista}
              </p>

            </div>

          </div>

        </div>


        {/* CONTROLES */}

        <div className="mt-8">

          {/* BARRA */}

          <div className="flex items-center gap-4">

            <span className="w-12 text-xs tabular-nums opacity-60">
              {formatarTempo(tempoAtual)}
            </span>

            <input
              type="range"
              min="0"
              max="100"
              value={progresso}
              onChange={mudarProgresso}
              className="w-full cursor-pointer"
            />

            <span className="w-12 text-right text-xs tabular-nums opacity-60">
              {formatarTempo(duracao)}
            </span>

          </div>

          {/* VOLUME */}

          <div className="mt-6 flex items-center gap-4">

            <span className="text-sm">
              🔊
            </span>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={mudarVolume}
              className="w-32 cursor-pointer"
            />

          </div>

          {/* BOTÕES */}

          <div className="mt-5 flex items-center justify-between">

            <button
              type="button"
              onClick={musicaAnterior}
              className={
                isTata
                  ? "group flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-nana-marinho/50 transition-all hover:text-nana-marinho"
                  : "group flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-nana-creme/50 transition-all hover:text-nana-creme"
              }
            >
              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              <span>
                Anterior
              </span>
            </button>

            <button
              type="button"
              onClick={() => setAleatorio(!aleatorio)}
              aria-label="Ativar modo aleatório"
              className={
                aleatorio
                  ? isTata
                    ? "flex h-10 w-10 items-center justify-center rounded-full bg-nana-marinho text-lg text-nana-amarelo transition-all duration-300 hover:scale-110"
                    : "flex h-10 w-10 items-center justify-center rounded-full bg-nana-creme text-lg text-nana-marinho transition-all duration-300 hover:scale-110"
                  : isTata
                    ? "flex h-10 w-10 items-center justify-center rounded-full text-lg text-nana-marinho/40 transition-all duration-300 hover:bg-nana-marinho/10 hover:text-nana-marinho"
                    : "flex h-10 w-10 items-center justify-center rounded-full text-lg text-nana-creme/40 transition-all duration-300 hover:bg-nana-creme/10 hover:text-nana-creme"
              }
            >
              🔀
            </button>

            <button
              type="button"
              onClick={tocarPausar}
              className={
                isTata
                  ? "flex h-14 w-14 items-center justify-center rounded-full bg-nana-marinho text-nana-amarelo transition-transform duration-300 hover:scale-110"
                  : "flex h-14 w-14 items-center justify-center rounded-full bg-nana-creme text-nana-marinho transition-transform duration-300 hover:scale-110"
              }
            >
              {tocando ? "Ⅱ" : "▶"}
            </button>

            <button
              type="button"
              onClick={alternarRepeticao}
              aria-label="Modo de repetição"
              title={
                repetir === "desligado"
                  ? "Repetição desligada"
                  : repetir === "playlist"
                    ? "Repetir playlist"
                    : "Repetir música"
              }
              className={
                repetir !== "desligado"
                  ? isTata
                    ? "flex h-10 w-10 items-center justify-center rounded-full bg-nana-marinho text-lg text-nana-amarelo transition-all duration-300 hover:scale-110"
                    : "flex h-10 w-10 items-center justify-center rounded-full bg-nana-creme text-lg text-nana-marinho transition-all duration-300 hover:scale-110"
                  : isTata
                    ? "flex h-10 w-10 items-center justify-center rounded-full text-lg text-nana-marinho/40 transition-all duration-300 hover:bg-nana-marinho/10 hover:text-nana-marinho"
                    : "flex h-10 w-10 items-center justify-center rounded-full text-lg text-nana-creme/40 transition-all duration-300 hover:bg-nana-creme/10 hover:text-nana-creme"
              }
            >
              {repetir === "musica" ? "🔂" : "🔁"}
            </button>

            <button
              type="button"
              onClick={proximaMusica}
              className={
                isTata
                  ? "group flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-nana-marinho/50 transition-all hover:text-nana-marinho"
                  : "group flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-nana-creme/50 transition-all hover:text-nana-creme"
              }
            >
              <span>
                Próxima
              </span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

        </div>


        {/* SPOTIFY */}

        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-xs uppercase tracking-[0.2em] underline underline-offset-4"
        >
          Abrir no Spotify →
        </a>

      </div>

    </div>
  );
}