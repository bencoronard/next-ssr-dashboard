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

export default function CreateResourceForm() {
  console.log("CreateResourceForm() was rendered here");

  const context = React.useContext(resourceContext);

  const form = useFormik({
    initialValues: createResourceFormInitValue,
    validationSchema: createResourceFormValidation,
    onSubmit: async (_values, { resetForm }) => {
      resetForm();
    },
    validateOnChange: false,
  });

  return (
    <Stack spacing={3}>
      <Typography variant="h6" component="h1">
        Create Resource
      </Typography>

      <Observer>
        {() => (
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

            <FormControl fullWidth>
              <Button
                variant="contained"
                type="submit"
                onClick={form.submitForm}
              >
                {context.isLoading.create ? "Loading" : "Submit"}
              </Button>
            </FormControl>
          </Stack>
        )}
      </Observer>
    </Stack>
  );
}
