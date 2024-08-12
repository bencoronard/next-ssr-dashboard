import { Button } from "@mui/material";
import { useThemeMode } from "../../stores/mui_theme_mode_context";

export default function ThemeButton() {
  const context = useThemeMode();
  return (
    <Button variant="contained" onClick={context.switchTheme}>
      {`Switch to ${context.mode === "light" ? "dark" : "light"} mode`}
    </Button>
  );
}
