import React from "react";
import { makeAutoObservable } from "mobx";

class NavMenuContext {
  currentPath: string = "";
  expandedPath: string | null = null;

  private setCurrentPath(path: string) {
    this.currentPath = path;
  }
  private setExpandedPath = (path: string | null) => {
    this.expandedPath = path;
  };

  constructor() {
    makeAutoObservable(this);
  }

  updateCurrentPath = (path: string) => {
    this.setCurrentPath(path);
  };

  updateExpandedPath = (path: string | null) => {
    this.setExpandedPath(path);
  };
}

export const navMenuContext = React.createContext(new NavMenuContext());
