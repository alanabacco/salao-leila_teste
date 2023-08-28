import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "./components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabeleleila Leila",
  description:
    "Salão de beleiza da cabeleleila Leila: cabelos, unhas, hidratação e unha.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pr-BR">
      <body className={openSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
