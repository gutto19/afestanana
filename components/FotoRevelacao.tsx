"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type FotoRevelacaoProps = {
  src: string;
  alt: string;
};

export default function FotoRevelacao({
  src,
  alt,
}: FotoRevelacaoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const atualizar = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const altura = window.innerHeight;

      const inicio = altura * 0.9;
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

  return (
    <div
      ref={containerRef}
      className="relative h-[500px] w-full overflow-hidden"
    >

      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(${100 - progress * 100}% 0 0 0)`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        />

        <div className="absolute inset-0 bg-nana-azul/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
      </div>

    </div>
  );
}