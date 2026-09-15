import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const audioPath = path.join(process.cwd(), "public", "audio");

    const djs = ["tata", "guto"];

    const resultado: Record<
      string,
      {
        titulo: string;
        artista: string;
        arquivo: string;
        ordem: number;
      }[]
    > = {};

    for (const dj of djs) {
      const pastaDj = path.join(audioPath, dj);

      const arquivos = fs
        .readdirSync(pastaDj)
        .filter((arquivo) => arquivo.toLowerCase().endsWith(".mp3"));

      const musicas = arquivos
        .map((arquivo) => {
          const nomeSemExtensao = arquivo.replace(/\.mp3$/i, "");

          const partes = nomeSemExtensao.split(" - ");

          const ordem = Number(partes[0]);

          const titulo = partes[1] ?? "Título desconhecido";
          const artista = partes.slice(2).join(" - ") || "Artista desconhecido";

          return {
            titulo,
            artista,
            arquivo: `/audio/${dj}/${arquivo}`,
            capa: `/audio/${dj}/${nomeSemExtensao}.jpg`,
            ordem,
          };
        })
        .sort((a, b) => a.ordem - b.ordem);

      resultado[dj] = musicas;
    }

    return NextResponse.json(resultado);
  } catch (erro) {
    console.error("Erro ao carregar músicas:", erro);

    return NextResponse.json(
      { erro: "Não foi possível carregar as músicas." },
      { status: 500 }
    );
  }
}