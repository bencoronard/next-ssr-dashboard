import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { loginContext } from "../../stores/login_context";
import React from "react";
import { Observer } from "mobx-react-lite";
import { useFormik } from "formik";
import { loginFormInitValue, loginFormValidation } from "./login_schema";

export default function LoginForm() {
  const context = React.useContext(loginContext);

  const form = useFormik({
    initialValues: loginFormInitValue,
    validationSchema: loginFormValidation,
    onSubmit: async (values, { resetForm }) => {
      await context.onLogin(values.username, values.password);
      context.showContext();
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

            <Stack spacing={1}>
              <Typography component="h2" variant="body1">
                Password
              </Typography>
              <FormControl fullWidth>
                <TextField
                  placeholder="Enter password"
                  variant="outlined"
                  value={form.values.password}
                  onChange={(e) => {
                    form.setFieldValue("password", e.target.value);
                  }}
                  error={!!form.errors.password}
                  helperText={form.errors.password}
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
