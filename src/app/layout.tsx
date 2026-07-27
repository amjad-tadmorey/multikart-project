import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThumbNav from "@/components/ThumbNav";
import PopupCard from "@/components/PopupCard";
import ScrollToTop from "@/components/ScrollToTop"; // Import the client button safely
import Providers from "./providers";

const assignmentMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "My Next.js App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en" className={`${assignmentMontserrat.variable} light`} style={{ colorScheme: "light" }}>
        <body className="flex min-h-screen flex-col pb-16 md:pb-0 overflow-x-hidden relative">
          <Header />
          <main className="flex-1 w-full bg-white">
            {children}
          </main>
          <Footer />
          <ThumbNav />
          <PopupCard />

          {/* Renders the client-side interactive component safely */}
          <ScrollToTop />
        </body>
      </html>
    </Providers>
  );
}
