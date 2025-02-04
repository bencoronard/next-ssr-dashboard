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
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { loginContext } from "../stores/context_login";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  loginFormInitValue,
  loginFormValidation,
} from "../schemas/schema_login";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import NextLink from "next/link";

const iconStyle = { width: "1.5em", height: "1.5em" };
const icons = [
  { component: FacebookIcon, onClick: () => alert("Facebook clicked") },
  { component: GoogleIcon, onClick: () => alert("Google clicked") },
  { component: MicrosoftIcon, onClick: () => alert("Microsoft clicked") },
  { component: AppleIcon, onClick: () => alert("Apple clicked") },
];

export default function LoginForm() {
  console.log("LoginForm() was rendered here");

  const theme = useTheme();
  const context = React.useContext(loginContext);

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const form = useFormik({
    initialValues: loginFormInitValue,
    validationSchema: loginFormValidation,
    onSubmit: async (values, { resetForm }) => {
      await context.login(values.username, values.password);
      resetForm();
    },
    validateOnChange: false,
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);

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
                  type={showPassword ? "text" : "password"}
                  value={form.values.password}
                  onChange={(e) => {
                    form.setFieldValue("password", e.target.value);
                  }}
                  error={!!form.errors.password}
                  helperText={form.errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Stack>

            <FormControl fullWidth>
              <Button
                variant="contained"
                type="submit"
                onClick={form.submitForm}
              >
                {context.isLoading ? "Loading" : "Submit"}
              </Button>
            </FormControl>

            <Divider>or</Divider>

            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 3 }}
              justifyContent="center"
            >
              {icons.map((icon, index) => {
                const IconComponent = icon.component;
                return (
                  <IconButton key={index} onClick={icon.onClick}>
                    <IconComponent sx={iconStyle} />
                  </IconButton>
                );
              })}
            </Stack>

            <Divider />

            <NextLink
              href="/forgot"
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
                Forgot password?
              </Link>
            </NextLink>
          </Stack>
        </Box>
      )}
    </Observer>
  );
}
