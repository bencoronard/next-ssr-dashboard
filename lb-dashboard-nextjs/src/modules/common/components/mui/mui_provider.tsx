import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeModeProvider } from "../../stores/mui_theme_mode_context";
import { CssBaseline } from "@mui/material";

export default function MuiProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppRouterCacheProvider options={{ key: "x-css", enableCssLayer: true }}>
      <ThemeModeProvider>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeModeProvider>
    </AppRouterCacheProvider>
  );
}
