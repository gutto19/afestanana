"use client";

import { useEffect, useRef, useState } from "react";

export default function CurvaEnergia() {
  const curvaRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!curvaRef.current) return;

      const rect = curvaRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      /*
       * A animação começa quando a curva
       * entra na parte inferior da tela.
       */

      const start = windowHeight * 0.85;

      /*
       * A animação termina quando a curva
       * chega aproximadamente ao meio da tela.
       */

      const end = windowHeight * 0.35;

      const total = start - end;

      const current = start - rect.top;

      const calculatedProgress = Math.min(
        Math.max(current / total, 0),
        1
      );

      setProgress(calculatedProgress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={curvaRef}
      className="relative"
    >

      <svg
        viewBox="0 0 1200 420"
        className="w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* =========================================
            LINHA PRINCIPAL — TERRA
        ========================================= */}

        <path
          d="
            M 20 350
            C 120 350, 150 330, 230 300
            C 320 265, 350 190, 450 180
            C 540 170, 570 105, 680 95
            C 780 85, 820 90, 900 105
            C 1010 125, 1060 190, 1120 245
            C 1150 270, 1170 285, 1190 290
          "
          pathLength="1"
          stroke="var(--nana-terra)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="1"
          strokeDashoffset={1 - progress}
          style={{
            transition: "stroke-dashoffset 0.08s linear",
          }}
        />


        {/* =========================================
            LINHA TRACEJADA — AZUL
        ========================================= */}

        <path
          d="
            M 20 370
            C 150 370, 190 350, 270 325
            C 360 295, 400 225, 480 215
            C 570 205, 610 145, 690 135
            C 790 120, 850 125, 930 145
            C 1030 170, 1080 220, 1190 275
          "
          pathLength="1"
          stroke="var(--nana-azul)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="0.006 0.012"
          strokeDashoffset={1 - progress}
          opacity="0.8"
        />


        {/* =========================================
            01 — CHEGAR
        ========================================= */}

        <g
          style={{
            opacity: progress >= 0.18 ? 1 : 0,
            transform:
              progress >= 0.18
                ? "translateY(0)"
                : "translateY(8px)",
            transition:
              "opacity 0.5s ease, transform 0.5s ease",
          }}
        >

          <circle
            cx="230"
            cy="300"
            r="9"
            fill="var(--nana-oliva)"
          />

          <text
            x="180"
            y="250"
            fill="var(--nana-oliva)"
            fontSize="42"
            fontFamily="var(--font-jaro)"
          >
            𝅝
          </text>

        </g>


        {/* =========================================
            02 — SE ENTREGAR
        ========================================= */}

        <g
          style={{
            opacity: progress >= 0.38 ? 1 : 0,
            transform:
              progress >= 0.38
                ? "translateY(0)"
                : "translateY(8px)",
            transition:
              "opacity 0.5s ease, transform 0.5s ease",
          }}
        >

          <circle
            cx="450"
            cy="180"
            r="10"
            fill="var(--nana-baunilha)"
          />

          <text
            x="390"
            y="145"
            fill="var(--nana-baunilha)"
            fontSize="52"
            fontFamily="var(--font-jaro)"
          >
            𝅗𝅥
          </text>

        </g>


        {/* =========================================
            03 — VIVER / AUGE
        ========================================= */}

        <g
        style={{
            opacity: progress >= 0.58 ? 1 : 0,
            transform:
            progress >= 0.58
                ? "translateY(0)"
                : "translateY(8px)",
            transition:
            "opacity 0.5s ease, transform 0.5s ease",
        }}
        >
        <circle
            cx="750"
            cy="90"
            r="13"
            fill="var(--nana-laranja)"
        />

        <text
            x="720"
            y="55"
            fill="var(--nana-laranja)"
            fontSize="68"
            fontFamily="var(--font-jaro)"
        >
            𝅘𝅥𝅱
        </text>
        </g>


        {/* =========================================
            04 — QUERER MAIS
        ========================================= */}

        <g
        style={{
            opacity: progress >= 0.85 ? 1 : 0,
            transform:
            progress >= 0.85
                ? "translateY(0)"
                : "translateY(8px)",
            transition:
            "opacity 0.5s ease, transform 0.5s ease",
        }}
        >
        <circle
            cx="1120"
            cy="245"
            r="9"
            fill="var(--nana-dourado)"
        />

        <text
            x="1120"
            y="205"
            fill="var(--nana-dourado)"
            fontSize="44"
            fontFamily="var(--font-jaro)"
        >
            𝅘𝅥𝅯
        </text>
        </g>

      </svg>

    </div>
  );
}