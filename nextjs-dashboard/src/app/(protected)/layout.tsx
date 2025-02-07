"use client";
import React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid2 as Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavigationList from "@/modules/common/components/sidebar/navigation_list";
import MenuIcon from "@mui/icons-material/Menu";
import UserBadge from "@/modules/common/components/header/user_badge";
import ResponsiveLogo from "@/assets/icons/logo";

type DashboardLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const drawerWidth = 240;

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Grid container sx={{ height: "100vh", flexWrap: "nowrap" }}>
      <Grid
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            position: "relative",
            "& .MuiDrawer-paper": {
              position: "relative",
              boxSizing: "border-box",
              width: "100%",
              height: "100%",
            },
          }}
          open
        >
          <Toolbar sx={{ display: "flex", gap: "1em" }}>
            <Box sx={{ width: "3em", height: "3em" }}>
              <ResponsiveLogo variant="neutral" />
            </Box>

            <Typography variant="h6">Loxbit Portal</Typography>
          </Toolbar>

          <Divider />

          <NavigationList />
        </Drawer>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Toolbar sx={{ display: "flex", gap: "1em" }}>
            <Box sx={{ width: "3em", height: "3em" }}>
              <ResponsiveLogo variant="neutral" />
            </Box>

            <Typography variant="h6">Loxbit Portal</Typography>
          </Toolbar>

          <Divider />

          <NavigationList />
        </Drawer>
      </Grid>

      <Grid container direction="column">
        <AppBar component="div" position="relative">
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ marginLeft: "auto" }}>
              <UserBadge />
            </Box>
          </Toolbar>
        </AppBar>

        <Grid
          direction="column"
          sx={{
            overflow: "scroll",
            display: "flex",
            flex: 1,
            padding: "1.5em",
            gap: "1em",
            backgroundColor: "#D3D3D3",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}
