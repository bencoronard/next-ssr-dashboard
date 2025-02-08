"use client";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

type FormDialogProps = {
  open: boolean;
  title?: string;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  onClose?: () => void;
};

export default function FormDialog(props: FormDialogProps) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{props.content}</DialogContent>
      <DialogActions>{props.actions}</DialogActions>
    </Dialog>
  );
}
