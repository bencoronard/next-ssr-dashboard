"use client";
import React from "react";
import { Observer } from "mobx-react-lite";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  forgotPasswordFormInitValue,
  forgotPasswordFormValidation,
} from "../schemas/schema_forgot";
import NextLink from "next/link";
import { forgotContext } from "../stores/context_forgot";

export default function ForgotForm() {
  console.log("ForgotForm() was rendered here");

  const theme = useTheme();
  const context = React.useContext(forgotContext);

  const form = useFormik({
    initialValues: forgotPasswordFormInitValue,
    validationSchema: forgotPasswordFormValidation,
    onSubmit: async (values, { resetForm }) => {
      await context.forgot(values.username);
      resetForm();
    },
    validateOnChange: false,
  });

  return (
    <Observer>
      {() => (
        <Box sx={{ width: "100%" }}>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Typography component="h2" variant="body1">
                Username
              </Typography>
              <FormControl fullWidth>
                <TextField
                  placeholder="Enter username"
                  variant="outlined"
                  value={form.values.username}
                  onChange={(e) => {
                    form.setFieldValue("username", e.target.value);
                  }}
                  error={!!form.errors.username}
                  helperText={form.errors.username}
                />
              </FormControl>
            </Stack>

            <FormControl fullWidth>
              <Button
                variant="contained"
                type="submit"
                onClick={form.submitForm}
              >
                Submit
              </Button>
            </FormControl>

            <Divider />

            <NextLink
              href="/login"
              passHref
              style={{ width: "fit-content", marginInline: "auto" }}
            >
              <Link
                component={IconButton}
                underline="none"
                textAlign="center"
                sx={{
                  borderRadius: theme.vars.shape.borderRadius,
                }}
              >
                Back to sign-in
              </Link>
            </NextLink>
          </Stack>
        </Box>
      )}
    </Observer>
  );
}
