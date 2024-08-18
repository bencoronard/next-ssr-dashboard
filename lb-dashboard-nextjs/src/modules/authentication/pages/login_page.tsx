import Paper from "@mui/material/Paper";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import ResponsiveLogo from "@/assets/icons/logo";
import ThemeButton from "@/modules/common/components/buttons/button_toggle_theme";
import LoginForm from "../forms/login/login_form";

export default function LoginPage() {
  const theme = useTheme();
  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.vars.palette.primary.main,
      }}
    >
      <Paper
        elevation={24}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          padding: "50px",
          width: "500px",
          gap: "1em",
        }}
      >
        <Box sx={{ position: "relative", width: "10em", height: "10em" }}>
          <ResponsiveLogo />
        </Box>

        <Typography component="h1" variant="h2">
          Loxbit
        </Typography>

        <LoginForm />
      </Paper>

      <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
        <ThemeButton />
      </Box>
    </Box>
  );
}
