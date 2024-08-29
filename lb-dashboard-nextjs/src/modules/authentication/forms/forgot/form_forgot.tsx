import React from "react";
import { Observer } from "mobx-react-lite";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
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

const iconStyle = { width: "1.5em", height: "1.5em" };
const icons = [
  { component: FacebookIcon, onClick: () => alert("Facebook clicked") },
  { component: GoogleIcon, onClick: () => alert("Google clicked") },
  { component: MicrosoftIcon, onClick: () => alert("Microsoft clicked") },
  { component: AppleIcon, onClick: () => alert("Apple clicked") },
];

export default function ForgotForm() {
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
                onClick={() => form.submitForm()}
              >
                Submit
              </Button>
            </FormControl>
          </Stack>
        </Box>
      )}
    </Observer>
  );
}
