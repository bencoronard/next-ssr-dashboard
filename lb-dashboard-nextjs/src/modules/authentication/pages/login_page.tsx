import Paper from "@mui/material/Paper";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import ResponsiveLogo from "@/assets/icons/logo";
import ThemeButton from "@/modules/common/components/buttons/button_toggle_theme";
import LoginForm from "../forms/login/login_form";

export default function LoginPage() {
  const [country, setCountry] = React.useState("");
  const [machine, setMachine] = React.useState("");

  const theme = useTheme();

  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };
  const handleMachineChange = (event: SelectChangeEvent) => {
    setMachine(event.target.value as string);
  };

  return (
    <Box
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.vars.palette.primary.main,
      }}
    >
      <Paper
        elevation={24}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          padding: "50px",
          width: "500px",
          gap: "1em",
        }}
      >
        <div style={{ position: "relative", width: "10em", height: "10em" }}>
          <ResponsiveLogo />
        </div>

        <Typography component="h1" variant="h1">
          Loxbit
        </Typography>

        <LoginForm />

        <FormControl fullWidth>
          <ThemeButton />
        </FormControl>
      </Paper>
    </Box>
  );
}
