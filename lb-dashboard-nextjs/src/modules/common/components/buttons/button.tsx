import { Button } from "@mui/material";
import { useThemeMode } from "../../store/mui/mui_theme_mode_context";

export default function ThemeButton() {
  const context = useThemeMode();
  return (
    <Button variant="contained" onClick={context.toggleTheme}>
      Toggle Theme
    </Button>
  );
}
