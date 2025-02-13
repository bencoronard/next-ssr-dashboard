import { Box, Stack, Typography } from "@mui/material";

export default function UserBadge() {
  console.log("UserBadge() was rendered here");

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        sx={{
          width: 32,
          height: 32,
          background: "#FFF",
          borderRadius: "50%",
          flexShrink: 0,
        }}
      />
      <Stack spacing={1}>
        <Typography variant="body2" fontWeight={600}>
          Sorapong Chancai
        </Typography>

        <Typography variant="body2">6205216839 (เจ้าของบัตร)</Typography>
      </Stack>
    </Stack>
  );
}
