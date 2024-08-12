"use client";
import React from "react";
import { ThemeProvider } from "@mui/material";
import { MuiThemeMode, MuiThemeModeContextType } from "../types/mui_types";
import lightTheme from "@/themes/theme_light";
import darkTheme from "@/themes/theme_dark";

const ThemeModeContext = React.createContext<MuiThemeModeContextType>({
  mode: "light",
  switchTheme: () => {},
});

export function useThemeMode() {
  return React.useContext(ThemeModeContext);
}

export function ThemeModeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = React.useState<MuiThemeMode>("light");
  const theme = mode === "light" ? lightTheme : darkTheme;
  const switchTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };
  return (
    <ThemeModeContext.Provider value={{ mode, switchTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
