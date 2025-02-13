"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ModalProps } from "../../stores/modals";
import CloseIcon from "@mui/icons-material/Close";

export default function FormDialog(props: ModalProps) {
  return (
    <Dialog
      open={props.open}
      onClose={(_event, reason) => {
        if (
          props.persistent &&
          ["backdropClick", "escapeKeyDown"].includes(reason)
        ) {
          return;
        }

        props.onClose?.();
      }}
      disableEscapeKeyDown={props.persistent}
      sx={{ padding: "1em" }}
    >
      <DialogTitle>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>{props.title}</Typography>

          <IconButton onClick={props.onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>{props.content}</DialogContent>
    </Dialog>
  );
}
