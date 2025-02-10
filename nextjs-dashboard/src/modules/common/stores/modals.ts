import React from "react";
import { makeAutoObservable } from "mobx";

export type ModalProps = {
  open: boolean;
  title?: string;
  content?: React.ReactNode;
  persistent?: boolean;
  onClose?: () => void;
  labelOk?: string;
  onOk?: () => void;
};

class ModalContext {
  formModal: ModalProps = { open: false };
  systemModal: ModalProps = { open: false };

  private setFormModalOpen = (open: boolean) => {
    this.formModal.open = open;
  };
  private setSystemModalOpen = (open: boolean) => {
    this.systemModal.open = open;
  };
  private setFormModalProps = (props: Omit<ModalProps, "open">) => {
    this.formModal.title = props.title;
    this.formModal.content = props.content;
    this.formModal.persistent = props.persistent;
    this.formModal.onClose = props.onClose;
  };
  private setSystemModalProps = (props: Omit<ModalProps, "open">) => {
    this.systemModal.title = props.title;
    this.systemModal.content = props.content;
    this.systemModal.persistent = props.persistent;
    this.systemModal.onClose = props.onClose;
    this.systemModal.labelOk = props.labelOk;
    this.systemModal.onOk = props.onOk;
  };

  constructor() {
    makeAutoObservable(this);
  }

  showFormModal = (props?: Omit<ModalProps, "open">) => {
    if (props) {
      this.setFormModalProps(props);
    }
    this.setFormModalOpen(true);
  };

  showSystemModal = (props?: Omit<ModalProps, "open">) => {
    if (props) {
      this.setSystemModalProps(props);
    }
    this.setSystemModalOpen(true);
  };

  closeFormModal = () => {
    this.formModal.onClose?.();
    this.setFormModalOpen(false);
  };

  closeSystemModal = () => {
    this.systemModal.onClose?.();
    this.setSystemModalOpen(false);
  };

  closeSystemModalOnOk = () => {
    this.systemModal.onOk?.();
    this.setSystemModalOpen(false);
  };
}

export const modalContext = React.createContext(new ModalContext());
