import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import type {} from "@mui/material/themeCssVarsAugmentation";
import theme from "@/themes/theme";

export default function MuiProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  console.log("MuiProvider() was rendered here");

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <InitColorSchemeScript attribute="class" />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
