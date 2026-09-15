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
  title: "NãNA",
  description: "Uma experiência 100% brasileira.",
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