"use client";
import React from "react";
import { Box, Grid, Paper, useTheme } from "@mui/material";
import ResponsiveLogo from "@/assets/icons/logo";
import ThemeButton from "@/modules/common/components/buttons/button_toggle_theme";

type SplitLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function SplitLayout({ children }: SplitLayoutProps) {
  console.log("SplitLayout() was rendered here");
  const theme = useTheme();
  return (
    <Grid container sx={{ height: "100vh", flexWrap: "nowrap" }}>
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
        {children}
      </Grid>
    </Grid>
  );
}
