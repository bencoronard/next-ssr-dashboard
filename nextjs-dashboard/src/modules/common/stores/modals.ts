import React from "react";
import { makeAutoObservable } from "mobx";

export type ModalProps = {
  open: boolean;
  title?: string;
  content?: React.ReactNode;
  onClose?: () => void;
};

class ModalContext {
  formModal: ModalProps = { open: false };

  private setFormModalOpen = (open: boolean) => {
    this.formModal.open = open;
  };
  private setFormModalProps = (props: Omit<ModalProps, "open">) => {
    this.formModal.title = props.title;
    this.formModal.content = props.content;
    this.formModal.onClose = props.onClose;
  };

  constructor() {
    makeAutoObservable(this);
  }

  showFormModal = (props?: ModalProps) => {
    if (props) {
      this.setFormModalProps(props);
    }
    this.setFormModalOpen(true);
  };

  closeFormModal = (reset?: boolean) => {
    if (reset) {
      this.setFormModalProps({});
    }
    this.setFormModalOpen(false);
  };
}

export const modalContext = React.createContext(new ModalContext());
