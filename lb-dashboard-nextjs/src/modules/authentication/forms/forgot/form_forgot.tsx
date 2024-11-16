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
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import {
  forgotPasswordFormInitValue,
  forgotPasswordFormValidation,
} from "./schema_forgot";
import NextLink from "next/link";

const iconStyle = { width: "1.5em", height: "1.5em" };
const icons = [
  { component: FacebookIcon, onClick: () => alert("Facebook clicked") },
  { component: GoogleIcon, onClick: () => alert("Google clicked") },
  { component: MicrosoftIcon, onClick: () => alert("Microsoft clicked") },
  { component: AppleIcon, onClick: () => alert("Apple clicked") },
];

export default function ForgotForm() {
  console.log("ForgotForm() was rendered here");

  const theme = useTheme();

  const form = useFormik({
    initialValues: forgotPasswordFormInitValue,
    validationSchema: forgotPasswordFormValidation,
    onSubmit: async (_values, { resetForm }) => {
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
