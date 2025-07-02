import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Harsh Creatives",
  description: "Harsh creatives is personal project for portfolio",
  icons: {
    icon: "logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-[url("/background.png")] bg-cover bg-no-repeat overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
