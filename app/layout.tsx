import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vitoria-transportes-veiculos.patriciavolt9.chatgpt.site"),
  title: { default: "Vitória Transportes de Veículos | Segurança em Cada Rota", template: "%s | Vitória Transportes de Veículos" },
  description: "Transporte de veículos leves, dedicado, compartilhado e movimentação de frotas com segurança, tecnologia e atendimento próximo.",
  keywords: ["transporte de veículos", "transporte de carros", "logística de veículos", "transporte de frotas", "Ilhéus", "Bahia", "Brasil"],
  authors: [{ name: "Vitória Transportes de Veículos" }],
  creator: "Vitória Transportes de Veículos",
  publisher: "Vitória Transportes de Veículos",
  category: "Transporte e logística",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    title: "Vitória Transportes de Veículos",
    description: "Transporte de veículos e frotas em todo o Brasil, com segurança, planejamento e acompanhamento próximo.",
    type: "website",
    url: "/",
    siteName: "Vitória Transportes de Veículos",
    locale: "pt_BR",
    images: [{ url: "/og.webp", width: 1200, height: 630, alt: "Vitória Transportes de Veículos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitória Transportes de Veículos",
    description: "Transporte de veículos e frotas em todo o Brasil, com segurança, planejamento e acompanhamento próximo.",
    images: ["/og.webp"],
  },
  icons: { icon: "/vitoria-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><head><link rel="preload" as="image" href="/vitoria-hero.webp" fetchPriority="high" /></head><body>{children}</body></html>;
}
