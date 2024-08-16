import { Box, FormControl, Stack, TextField } from "@mui/material";

export default function LoginForm() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <FormControl fullWidth>
          <TextField label="Username" variant="outlined" />
        </FormControl>

        <FormControl fullWidth>
          <TextField label="Password" variant="outlined" />
        </FormControl>
      </Stack>
    </Box>
  );
}
