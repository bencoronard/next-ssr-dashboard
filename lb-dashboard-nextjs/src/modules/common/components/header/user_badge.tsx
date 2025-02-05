import { Box, Typography } from "@mui/material";

export default function UserBadge() {
  console.log("UserBadge() was rendered here");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Box
        sx={{
          width: 32,
          height: 32,
          background: "#FFF",
          borderRadius: "50%",
          flexShrink: 0,
        }}
      ></Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography variant="body2" fontWeight={600}>
          Sorapong Chancai
        </Typography>
        <Typography variant="body2">6205216839 (เจ้าของบัตร)</Typography>
      </Box>
    </Box>
  );
}
