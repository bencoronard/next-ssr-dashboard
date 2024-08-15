import Paper from "@mui/material/Paper";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import ResponsiveLogo from "@/assets/icons/logo";
import ThemeButton from "@/modules/common/components/buttons/button_toggle_theme";

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

        <FormControl fullWidth>
          <InputLabel id="select-country">เลือกประเทศ</InputLabel>
          <Select
            labelId="select-country"
            name="country"
            value={country}
            label="เลือกประเทศ"
            onChange={handleCountryChange}
          >
            <MenuItem value={"TH"}>ไทย</MenuItem>
            <MenuItem value={"SE"}>สวีเด็น</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="select-machine">เลือกเครื่อง</InputLabel>
          <Select
            labelId="select-machine"
            name="machine"
            value={machine}
            label="เลือกเครื่อง"
            onChange={handleMachineChange}
          >
            <MenuItem value={"SGT800-001"}>SGT800-001</MenuItem>
            <MenuItem value={"SGT800-002"}>SGT800-002</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <ThemeButton />
        </FormControl>
      </Paper>
    </Box>
  );
}
