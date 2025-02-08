import React from "react";
import { makeAutoObservable } from "mobx";

class ModalContext {
  bigModal: {
    open: boolean;
    title?: string;
    content?: React.ReactNode;
    actions?: React.ReactNode;
  } = { open: false };
  smallModal: {
    open: boolean;
    title?: string;
    content?: React.ReactNode;
    actions?: React.ReactNode;
  } = { open: false };

  setOpenBigModal(open: boolean) {
    this.bigModal.open = open;
  }
  setOpenSmallModal(open: boolean) {
    this.smallModal.open = open;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const modalContext = React.createContext(new ModalContext());
