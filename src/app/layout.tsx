import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThumbNav from "@/components/ThumbNav";
import PopupCard from "@/components/PopupCard";
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
    // FIX: Added className="light" and style={{ colorScheme: "light" }}
    <Providers>
      <html lang="en" className={`${assignmentMontserrat.variable} light`} style={{ colorScheme: "light" }}>
        <body className="flex min-h-screen flex-col bg-slate-50 pb-16 md:pb-0 overflow-x-hidden">
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <ThumbNav />
          <PopupCard />
        </body>
      </html>
    </Providers>
  );
}
