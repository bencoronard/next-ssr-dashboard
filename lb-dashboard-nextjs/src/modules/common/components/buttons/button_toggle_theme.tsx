"use client";
import React from "react";
import { Button } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeButton() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="contained"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
    >
      {`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    </Button>
  );
}
