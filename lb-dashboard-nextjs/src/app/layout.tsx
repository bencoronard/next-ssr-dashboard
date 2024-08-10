import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import lightTheme from "@/themes/theme_light";
import darkTheme from "@/themes/theme_dark";
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
        <AppRouterCacheProvider
          options={{ key: "x-css", enableCssLayer: true }}
        >
          <ThemeProvider theme={lightTheme}>
            <CssBaseline enableColorScheme />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
