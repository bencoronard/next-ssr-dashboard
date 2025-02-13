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
import { Resource } from "../models/types";
import { modalContext } from "@/modules/common/stores/modals";

type UpdateResourceFormProps = {
  data?: Resource;
};

export default function UpdateResourceForm(props: UpdateResourceFormProps) {
  console.log("UpdateResourceForm() was rendered here");

  const context = React.useContext(resourceContext);
  const modal = React.useContext(modalContext);

  const form = useFormik({
    initialValues: props.data || createResourceFormInitValue,
    validationSchema: createResourceFormValidation,
    onSubmit: async (values) => {
      modal.showSystemModal({
        title: "Update resource",
        content: `Proceed to update resource ${props.data?.id}`,
        labelOk: "Proceed",
        onOk: async () => {
          modal.closeSystemModal();
          try {
            if (!props.data) {
              throw new Error();
            }
            await context.updateResource(
              props.data.id,
              values.field1,
              values.field2,
              values.field3
            );
            modal.showSystemModal({
              title: "Successful",
              content: `Resource ${props.data.id} updated`,
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
              content: "An error occurred during resource update",
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
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <FormControl fullWidth>
              <Button
                variant="outlined"
                type="button"
                onClick={() => form.resetForm()}
                disabled={context.isLoading.update}
              >
                Reset
              </Button>
            </FormControl>

            <FormControl fullWidth>
              <Button
                variant="contained"
                type="button"
                onClick={form.submitForm}
                loading={context.isLoading.update}
              >
                Submit
              </Button>
            </FormControl>
          </Stack>
        )}
      </Observer>
    </Stack>
  );
}
