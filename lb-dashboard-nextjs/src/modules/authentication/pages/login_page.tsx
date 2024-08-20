import { Box, Grid, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import ResponsiveLogo from "@/assets/icons/logo";
import ThemeButton from "@/modules/common/components/buttons/button_toggle_theme";
import LoginForm from "../forms/login/login_form";

export default function LoginPage() {
  const theme = useTheme();
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        sx={{
          position: "relative",
          flex: 1.5,
          alignContent: "center",
          backgroundColor: theme.vars.palette.primary.main,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Box
          sx={{
            width: "15em",
            height: "15em",
            margin: "0 auto",
          }}
        >
          <ResponsiveLogo variant="light" />
        </Box>

        <Box sx={{ position: "absolute", bottom: 0, left: 0 }}>
          <ThemeButton />
        </Box>
      </Grid>

      <Grid
        item
        component={Paper}
        elevation={12}
        square
        sx={{ flex: 1, paddingX: theme.spacing(6), alignContent: "center" }}
      >
        <Stack spacing={3} alignItems="center">
          <Box
            sx={{
              width: "10em",
              height: "10em",
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <ResponsiveLogo />
          </Box>

          <Stack spacing={1}>
            <Typography component="h1" variant="h3" textAlign="center">
              Loxbit Portal
            </Typography>

            <Typography component="h2" variant="subtitle1" textAlign="center">
              Please provide your credentials
            </Typography>
          </Stack>

          <LoginForm />
        </Stack>
      </Grid>
    </Grid>
  );
}
