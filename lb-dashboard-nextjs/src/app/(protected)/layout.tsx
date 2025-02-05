"use client";
import React from "react";
import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import NavigationList from "@/modules/common/components/sidebar/navigation_list";
import MenuIcon from "@mui/icons-material/Menu";

type DashboardLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const drawerWidth = 240;

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const theme = useTheme();
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
        item
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          border: "1px dashed red",
        }}
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
          <NavigationList />
        </Drawer>
      </Grid>

      <Grid container direction="column">
        <AppBar component="div" position="relative">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid item sx={{ border: "1px dashed red" }}>
          <h1>Hello</h1>
        </Grid>

        <Grid item>{children}</Grid>
      </Grid>
    </Grid>
  );
}
