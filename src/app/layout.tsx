import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastProvider } from "@/components/Toast";
import { AuthProvider } from "@/components/Auth";
import { ThemeProvider } from "@/components/ThemeContext";
import { DataProvider } from "@/components/DataContext";
import { CommandPalette } from "@/components/CommandPalette";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Craftly Internet",
  description: "A professional platform for builders and developers to showcase their experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${pacifico.variable} antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <AuthProvider>
            <DataProvider>
              <ToastProvider>
                <Navbar />
                <CommandPalette />
                {children}
              </ToastProvider>
            </DataProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
