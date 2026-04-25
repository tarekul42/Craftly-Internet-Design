'use client';

import { Inter, JetBrains_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/Auth";
import { DataProvider } from "@/components/DataContext";
import { ThemeProvider } from "@/components/ThemeContext";
import Navbar from "@/components/Navbar";
import { ToastProvider } from "@/components/Toast";
import { CommandPalette } from "@/components/CommandPalette";
import { usePathname } from "next/navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${pacifico.variable} antialiased`}
      >
        <AuthProvider>
          <DataProvider>
            <ThemeProvider>
              <ToastProvider>
                <Navbar />
                <main key={pathname} className="page-transition-wrapper">
                  {children}
                </main>
                <CommandPalette />
              </ToastProvider>
            </ThemeProvider>
          </DataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
