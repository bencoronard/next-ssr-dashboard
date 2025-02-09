"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
} from "@mui/material";
import { modalContext, ModalProps } from "../../stores/modals";

export default function FormDialogue(props: ModalProps) {
  const modal = React.useContext(modalContext);
  return (
    <Dialog open={props.open} onClose={props.onClose} sx={{ padding: "1em" }}>
      <DialogTitle>{props.title || "Hello, world!"}</DialogTitle>
      <DialogContent>
        {props.content}

        <FormControl>
          <Button
            variant="contained"
            type="button"
            onClick={() => modal.closeFormModal()}
          >
            Close
          </Button>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
}
