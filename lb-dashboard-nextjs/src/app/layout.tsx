import type { Metadata } from "next";
import MuiProvider from "@/modules/common/components/mui/mui_provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loxbit | Dashboard",
  description: "Dashboard template using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}
