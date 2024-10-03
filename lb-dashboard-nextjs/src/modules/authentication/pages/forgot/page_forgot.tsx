import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ResponsiveLogo from "@/assets/icons/logo";
import ForgotForm from "../../forms/forgot/form_forgot";

export default function ForgotPage() {

  console.log("ForgotPage() was rendered here");

  return (
    <Stack spacing={3} alignItems="center">
      <Box
        sx={{
          width: "10em",
          height: "10em",
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <ResponsiveLogo />
      </Box>

      <Stack spacing={1}>
        <Typography component="h1" variant="h3" textAlign="center">
          Account Recovery
        </Typography>

        <Typography component="h2" variant="subtitle1" textAlign="center">
          Please provide your registered username
        </Typography>
      </Stack>

      <ForgotForm />
    </Stack>
  );
}
