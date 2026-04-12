import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Crazy Penguin Wars",
  description: "Crazy Penguin Wars Revival is a fan-made project bringing back the legendary Facebook game. Explore the icy battlefield, collect weapons, fight other penguins, and relive the chaos of the classic multiplayer experience"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
