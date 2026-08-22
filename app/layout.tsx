import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vitória Transportes de Veículos | Segurança em Cada Rota",
  description: "Transporte de veículos leves, dedicado, compartilhado e movimentação de frotas com segurança, tecnologia e atendimento próximo.",
  openGraph: {
    title: "Vitória Transportes de Veículos",
    description: "Seu veículo em boas mãos, do início ao destino.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vitória Transportes de Veículos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitória Transportes de Veículos",
    description: "Seu veículo em boas mãos, do início ao destino.",
    images: ["/og.png"],
  },
  icons: { icon: "/vitoria-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
