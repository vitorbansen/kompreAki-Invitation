import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kompreaki — Ofertas imperdíveis direto no seu WhatsApp",
  description:
    "Entre no grupo gratuito Kompreaki e receba ofertas exclusivas, promoções relâmpago e economia de verdade nas maiores lojas do Brasil. Sem spam.",
  keywords: [
    "promoções",
    "ofertas",
    "cupons de desconto",
    "grupo whatsapp",
    "kompreaki",
    "promoção relâmpago",
  ],
  openGraph: {
    title: "Kompreaki — Ofertas que valem a pena",
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
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-bg-primary font-sans antialiased text-text-primary">
        {children}
      </body>
    </html>
  );
}
