"use client";
import React from "react";
import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { resourceContext } from "../stores/resource";
import { useFormik } from "formik";
import {
  createResourceFormInitValue,
  createResourceFormValidation,
} from "../schemas/resource";
import { Observer } from "mobx-react-lite";
import { modalContext } from "@/modules/common/stores/modals";

export default function CreateResourceForm() {
  console.log("CreateResourceForm() was rendered here");

  const context = React.useContext(resourceContext);
  const modal = React.useContext(modalContext);

  const form = useFormik({
    initialValues: createResourceFormInitValue,
    validationSchema: createResourceFormValidation,
    onSubmit: (values) => {
      modal.showSystemModal({
        title: "Create new resource",
        content: "Proceed to create a new resource?",
        labelOk: "Proceed",
        onOk: async () => {
          modal.closeSystemModal();
          try {
            await context.createResource(
              values.field1,
              values.field2,
              values.field3
            );
            modal.showSystemModal({
              title: "Successful",
              content: "A new resource created successfully",
              labelOk: "Okay",
              onClose: () => {
                modal.closeFormModal();
                context.listResources();
              },
              onOk: () => {
                modal.closeFormModal();
                context.listResources();
              },
            });
          } catch (error) {
            modal.showSystemModal({
              title: "Failed",
              content: "An error occurred during resource creation",
            });
          }
        },
      });
    },
    validateOnChange: false,
  });

  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <Typography component="h2" variant="body1">
          Field 1
        </Typography>
        <FormControl fullWidth>
          <TextField
            placeholder="Enter field1"
            variant="outlined"
            value={form.values.field1}
            onChange={(e) => {
              form.setFieldValue("field1", e.target.value);
            }}
            error={!!form.errors.field1}
            helperText={form.errors.field1}
          />
        </FormControl>
      </Stack>

      <Stack spacing={1}>
        <Typography component="h2" variant="body1">
          Field 2
        </Typography>
        <FormControl fullWidth>
          <TextField
            placeholder="Enter field2"
            variant="outlined"
            value={form.values.field2}
            onChange={(e) => {
              form.setFieldValue("field2", e.target.value);
            }}
            error={!!form.errors.field2}
            helperText={form.errors.field2}
          />
        </FormControl>
      </Stack>

      <Stack spacing={1}>
        <Typography component="h2" variant="body1">
          Field 3
        </Typography>
        <FormControl fullWidth>
          <TextField
            placeholder="Enter field3"
            variant="outlined"
            value={form.values.field3}
            onChange={(e) => {
              form.setFieldValue("field3", e.target.value);
            }}
            error={!!form.errors.field3}
            helperText={form.errors.field3}
          />
        </FormControl>
      </Stack>

      <Observer>
        {() => (
          <FormControl fullWidth>
            <Button
              variant="contained"
              type="submit"
              onClick={form.submitForm}
              loading={context.isLoading.create}
            >
              Submit
            </Button>
          </FormControl>
        )}
      </Observer>
    </Stack>
  );
}
