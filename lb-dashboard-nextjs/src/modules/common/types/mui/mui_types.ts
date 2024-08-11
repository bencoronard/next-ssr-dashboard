export type MuiThemeMode = "light" | "dark";

export type MuiThemeModeContextType = {
  mode: MuiThemeMode;
  toggleTheme: () => void;
};
