import { Geist, Geist_Mono, Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

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
        <link rel="icon" href="./icon.png" sizes="48x48" type="image/png"></link>
        <title>Brian Leão</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${fira_code.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
