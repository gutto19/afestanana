"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type FotoEntradaLateralProps = {
  src: string;
  alt: string;
};

export default function FotoEntradaLateral({
  src,
  alt,
}: FotoEntradaLateralProps) {
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
      className="relative h-[360px] w-full overflow-hidden sm:h-[420px] md:aspect-[1.2] md:h-auto xl:aspect-auto xl:h-[500px] 2xl:aspect-[1.2] 2xl:h-auto"
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translateX(${100 - progress * 100}%)`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-[20%_center] grayscale transition-all duration-500 group-hover:grayscale-0"  
        />

        <div className="absolute inset-0 bg-nana-laranja/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
      </div>
    </div>
  );
}