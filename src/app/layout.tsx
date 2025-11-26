import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Lexon Appliances",
  description: "Premium kitchen and home appliances at pocket-friendly prices.",
  icons: {
    icon: "/lexon_logo.png",
  },
  keywords: [
    "Lexon",
    "appliances",
    "kitchen",
    "home",
    "premium",
    "affordable",
    "cheap appliances",
    "Nigeria appliances",
    "affordable appliances in Nigeria",
    "Lexon appliances in Nigeria",
    "Lexon appliances in Lagos",
    "Lexon appliances in Abuja",
    "Lexon appliances in Port Harcourt"
  ],
  authors: [
    {
      name: "Lexon",
      url: "https://www.lexonappliances.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
