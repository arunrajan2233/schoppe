import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";
import FloatingContact from "./_components/layout/FloatingContact";
import { ConsentProvider } from "./_components/consent/ConsentProvider";
import CookieBanner from "./_components/consent/CookieBanner";
import GoogleAnalytics from "./_components/consent/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata = {
  title: "Schopp24 Gebäudemanagement",
  description: "Reinigung, Fassade, Garten, Hausmeister- und Handwerkerservice in Berlin & Brandenburg.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <ConsentProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContact />
          <CookieBanner />
          <GoogleAnalytics />
        </ConsentProvider>
      </body>
    </html>
  );
}
