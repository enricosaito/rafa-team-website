import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silva Team — A melhor consultoria online está de volta",
  description:
    "Dieta e treino individualizados, atualizações semanais e acompanhamento direto com o Rafa Silva. O Silva Team está de volta.",
  openGraph: {
    title: "Silva Team está de volta",
    description:
      "Treino. Nutrição. Estratégia. Acompanhamento. Mais de 3.000 vidas transformadas pelo método do Rafa.",
    images: ["/images/rafa-portrait.png"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0708",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
