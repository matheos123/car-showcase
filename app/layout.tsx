import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Showcase",
  description: "Discover the best cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
