import React from "react";
import { makeAutoObservable } from "mobx";

class SidebarContext {
  open: boolean = true;
  mobileOpen: boolean = false;
  isClosing: boolean = false;

  private setMobileOpen = (open: boolean) => {
    this.mobileOpen = open;
  };

  private setClosing = (closing: boolean) => {
    this.isClosing = closing;
  };

  constructor() {
    makeAutoObservable(this);
  }

  closeDrawer = () => {
    this.setClosing(true);
    this.setMobileOpen(false);
  };

  toggleDrawer = () => {
    if (!this.isClosing) {
      this.setMobileOpen(!this.mobileOpen);
    }
  };

  handleDrawerTransitionEnd = () => {
    this.setClosing(false);
  };
}

export const sidebarContext = React.createContext(new SidebarContext());
