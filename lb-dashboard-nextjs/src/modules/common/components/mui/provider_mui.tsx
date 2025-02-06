import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import type {} from "@mui/material/themeCssVarsAugmentation";
import theme from "@/themes/theme";

export default function MuiProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  console.log("MuiProvider() was rendered here");

  return (
    <AppRouterCacheProvider options={{ key: "x-css", enableCssLayer: true }}>
      <CssVarsProvider
        theme={theme}
        defaultMode="system"
        modeStorageKey="lb-dashboard-color-mode"
      >
        <CssBaseline />
        <InitColorSchemeScript defaultMode="system" />
        {children}
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
}
