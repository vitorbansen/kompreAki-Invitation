import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ninja da Promo — Ofertas relâmpago direto no seu WhatsApp",
  description:
    "Entre no grupo gratuito Ninja da Promo e receba ofertas exclusivas, promoções relâmpago e economia de verdade nas maiores lojas do Brasil. Sem spam.",
  keywords: [
    "promoções",
    "ofertas",
    "cupons de desconto",
    "grupo whatsapp",
    "ninja da promo",
    "promoção relâmpago",
  ],
  openGraph: {
    title: "Ninja da Promo — Ofertas que valem a pena",
    description:
      "Promoções relâmpago, ofertas exclusivas e economia de verdade direto no WhatsApp.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${bebas.variable} scroll-smooth`}
    >
      <body className="bg-ninja-black font-sans antialiased text-zinc-100">
        {children}
      </body>
    </html>
  );
}
