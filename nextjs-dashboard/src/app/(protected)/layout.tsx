"use client";
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
import React from "react";
import { modalContext } from "@/modules/common/stores/modals";
import { Observer } from "mobx-react";
import { sidebarContext } from "@/modules/common/stores/sidebar";
import FormDialog from "@/modules/common/components/modals/dialog_form";
import SystemDialog from "@/modules/common/components/modals/dialog_system";
import NavigationAccordion from "@/modules/common/components/sidebar/navigation_accordion";
import { Permission, View } from "@/modules/permissions/models/types";
import { navMenuItems } from "@/modules/common/components/sidebar/types";

type DashboardLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const drawerWidth = 240;

const mockNavItems: View[] = [
  {
    permissionId: Permission.VIEW_CONSENT,
    path: "/consent",
    label: "Consent Management",
  },
  {
    permissionId: Permission.VIEW_NOTIFICATION,
    path: "/notification",
    label: "Notification Center",
  },
  {
    permissionId: Permission.VIEW_INSURANCE,
    path: "/insurance",
    label: "Insurance Management",
  },
  {
    permissionId: Permission.VIEW_AUCTION,
    path: "/auction",
    label: "Auction Center",
  },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  console.log("DashboardLayout() was rendered here");

  const modal = React.useContext(modalContext);
  const sidebar = React.useContext(sidebarContext);

  return (
    <>
      <Grid container sx={{ height: "100vh", flexWrap: "nowrap" }}>
        <Grid
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Observer>
            {() => (
              <>
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
                  open={sidebar.open}
                >
                  <Toolbar sx={{ display: "flex", gap: "1em" }}>
                    <Box sx={{ width: "3em", height: "3em" }}>
                      <ResponsiveLogo variant="neutral" />
                    </Box>

                    <Typography variant="h6">Loxbit Portal</Typography>
                  </Toolbar>

                  <Divider />

                  <NavigationAccordion items={navMenuItems} />
                </Drawer>

                <Drawer
                  variant="temporary"
                  open={sidebar.mobileOpen}
                  onTransitionEnd={sidebar.handleDrawerTransitionEnd}
                  onClose={sidebar.closeDrawer}
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

                  <NavigationAccordion items={navMenuItems} />
                </Drawer>
              </>
            )}
          </Observer>
        </Grid>

        <Grid container direction="column" flexGrow={1}>
          <AppBar component="div" position="relative">
            <Toolbar>
              <IconButton
                color="inherit"
                edge="start"
                onClick={sidebar.toggleDrawer}
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
            sx={{
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
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

      <Observer>
        {() => (
          <FormDialog
            open={modal.formModal.open}
            title={modal.formModal.title}
            content={modal.formModal.content}
            persistent={modal.formModal.persistent}
            onClose={modal.closeFormModal}
          />
        )}
      </Observer>

      <Observer>
        {() => (
          <SystemDialog
            open={modal.systemModal.open}
            title={modal.systemModal.title}
            content={modal.systemModal.content}
            persistent={modal.systemModal.persistent}
            labelOk={modal.systemModal.labelOk}
            onOk={modal.closeSystemModalOnOk}
            onClose={modal.closeSystemModal}
          />
        )}
      </Observer>
    </>
  );
}
