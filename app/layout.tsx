import type { Metadata } from "next";
import { IM_Fell_DW_Pica } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const sumerianFont = IM_Fell_DW_Pica({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ea Nasir - $COPPER",
  description: "Buy $COPPER now from Ea Nasir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", sumerianFont.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
