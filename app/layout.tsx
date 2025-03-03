import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

import { IM_Fell_DW_Pica } from "next/font/google";

const paragraphFont = IM_Fell_DW_Pica({ subsets: ["latin"], weight: "400" });

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
      <body className={cn("min-h-screen bg-background overflow-y-scroll text-xl", paragraphFont.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="font-normal">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
