import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Schopp24 Gebäudemanagement",
  description: "Reinigung, Fassade, Garten, Hausmeister- und Handwerkerservice in Berlin & Brandenburg.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
