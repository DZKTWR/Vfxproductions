import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../public/fonts/clashdisplay-font/css/clash-display.css";
import '@fontsource/roboto';
import "./globals.css";
import Footer from "@/components/main/footer";
import { LanguageProvider } from '@/components/context/LanguageContext';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VFX Productions",
  description: "video editing courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-[#121315] overflow-y-scroll overflow-x-hidden'}
      >
        <LanguageProvider>
             {children}
             <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
