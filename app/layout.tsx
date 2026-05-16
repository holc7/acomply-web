import type { Metadata, Viewport } from "next";
import { Sora, Nunito } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acomply.co"),
  title: "Acomply — Tu negocio, siempre acompañado.",
  description:
    "Acomply acompaña tu operación diaria: reservas, clientes, pagos, WhatsApp e IA en una sola plataforma para negocios de servicio.",
  openGraph: {
    title: "Acomply — Tu negocio, siempre acompañado.",
    description:
      "Reservas, clientes, pagos, WhatsApp e IA en una sola plataforma para negocios de servicio.",
    locale: "es_CO",
    type: "website",
    siteName: "Acomply",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acomply — Tu negocio, siempre acompañado.",
    description:
      "Reservas, clientes, pagos, WhatsApp e IA en una sola plataforma.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F3EC",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO" className={`${sora.variable} ${nunito.variable}`}>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
