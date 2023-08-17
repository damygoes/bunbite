import AuthProvider from "@/components/shared/SessionProvider";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bunbite",
  description: "Best burger in town",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="p-4 max-w-7xl m-auto min-w-[300px]">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
