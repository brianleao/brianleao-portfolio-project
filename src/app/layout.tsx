import { Geist, Geist_Mono, Poppins, Fira_Code } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'],
  variable: '--font-poppins',
});

const fira_code = Fira_Code({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-fire-code',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/png" href="/my-favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/my-favicon/favicon.svg" />
        <link rel="shortcut icon" href="/my-favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/my-favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/my-favicon/site.webmanifest" />

        {/* SEO */}
        <title>Brian Leão</title>
        <meta name="description" content="Olá! Sou o Brian, desenvolvedor full-stack apaixonado por tecnologia. Conheça mais sobre mim, as ferramentas que utilizo e como entrar em contato." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brian Leão" />
        <meta name="keywords" content="Desenvolvedor Full Stack, Portfólio, Front-end, Back-end, React.js, Next.js Node.js, Brian Leão" />

        {/* Open Graph (redes sociais) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Brian Leão" />
        <meta property="og:description" content="Olá! Sou o Brian, desenvolvedor full-stack apaixonado por tecnologia. Conheça mais sobre mim, as ferramentas que utilizo e como entrar em contato."/>
        <meta property="og:image" content="/capaBrian.png" />
        <meta property="og:url" content="https://brianleao.dev" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${fira_code.variable} antialiased`}>
        {children}
        <Analytics/>
        <SpeedInsights/>
        
      </body>
    </html>
  );
}
