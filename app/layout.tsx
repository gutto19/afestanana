import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vinila = localFont({
  src: "./../public/fonts/VinilaVariable.ttf",
  variable: "--font-vinila",
});

const manteigaGorda = localFont({
  src: "./../public/fonts/Manteiga-Gorda.otf",
  variable: "--font-manteiga",
});

const londrinaThin = localFont({
  src: "./../public/fonts/LondrinaSolid-Thin.ttf",
  variable: "--font-londrina-thin",
});

const londrinaLight = localFont({
  src: "./../public/fonts/LondrinaSolid-Light.ttf",
  variable: "--font-londrina-light",
});

const londrinaRegular = localFont({
  src: "./../public/fonts/LondrinaSolid-Regular.ttf",
  variable: "--font-londrina-regular",
});

const londrinaBlack = localFont({
  src: "./../public/fonts/LondrinaSolid-Black.ttf",
  variable: "--font-londrina-black",
});

const londrinaShadow = localFont({
  src: "./../public/fonts/LondrinaShadow-Regular.ttf",
  variable: "--font-londrina-shadow",
});

const jaro = localFont({
  src: "./../public/fonts/Jaro-Regular-VariableFont.ttf",
  variable: "--font-jaro",
});

const jainiPurva = localFont({
  src: "./../public/fonts/JainiPurva-Regular.ttf",
  variable: "--font-jaini",
});

export const metadata: Metadata = {
  title: {
    default: "Nãna | Festa de Brasilidades & Música Pop em São Paulo",
    template: "%s | Nãna",
  },

  description:
    "A Nãna é uma festa 100% brasileira em São Paulo. Do pop ao technobrega, do axé à MPB. Uma pista inclusiva, vibrante e cíclica. Ingressos na Shotgun.",

  keywords: [
    "festa de brasilidades SP",
    "festa música brasileira São Paulo",
    "rolê inclusivo SP",
    "festa pop e technobrega SP",
    "eventos cultural SP",
    "Nãna festa Shotgun",
  ],

  openGraph: {
    title: "Nãna. Onde a brasilidade perde a casca.",
    description:
      "Do pop ao funk, do axé ao technobrega. Conheça a Nãna e garanta sua entrada no fervo.",
    type: "website",
    locale: "pt_BR",

    images: [
      {
        url: "/images/logonana-hero.svg",
        width: 1200,
        height: 630,
        alt: "Nãna — festa de brasilidades e música brasileira em São Paulo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${vinila.variable}
          ${manteigaGorda.variable}
          ${londrinaThin.variable}
          ${londrinaLight.variable}
          ${londrinaRegular.variable}
          ${londrinaBlack.variable}
          ${londrinaShadow.variable}
          ${jaro.variable}
          ${jainiPurva.variable}
          min-h-full
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}