import React from "react";
import type { Metadata } from "next";
import MuiProvider from "@/modules/common/components/mui/provider_mui";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loxbit | Dashboard",
  description: "Dashboard template using NextJS",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  console.log("RootLayout() was rendered here");
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MuiProvider>
          <main>{children}</main>
        </MuiProvider>
      </body>
    </html>
  );
}
