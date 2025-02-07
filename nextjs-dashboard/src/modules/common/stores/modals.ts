class ModalContext {
  bigModalOpen: boolean = false;
  smallModalOpen: boolean = false;
  bigModal: { title: string | null; content: React.ReactNode | null } = {
    title: null,
    content: null,
  };
}
