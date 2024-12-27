import ResponsiveLogo from "@/assets/icons/logo";
import ThemeButton from "@/modules/common/components/buttons/button_toggle_theme";
import { Box, Grid, Paper, useTheme } from "@mui/material";

type DashboardLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  console.log("DashboardLayout() was rendered here");
  const theme = useTheme();
  return (
    <Grid container sx={{ height: "100vh", flexWrap: "nowrap" }}>
      <Grid
        item
        sx={{
          position: "relative",
          flex: 0.5,
          alignContent: "center",
          backgroundColor: theme.vars.palette.primary.main,
          display: { xs: "none", sm: "block" },
        }}
      ></Grid>
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
