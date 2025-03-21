import { Box } from "@mui/material";
import Image from "next/image";

interface ResponsiveLogoProps {
  variant?: "dark" | "light" | "neutral";
}

export default function ResponsiveLogo(props: ResponsiveLogoProps) {
  console.log("ResponsiveLogo() was rendered here");

  const { variant = "neutral" } = props;

  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      <Image src={source[variant]} alt="Logo" fill={true} priority />
    </Box>
  );
}

const source = {
  neutral: "/assets/images/logo/logo-neutral.svg",
  dark: "/assets/images/logo/logo-dark.svg",
  light: "/assets/images/logo/logo-light.svg",
};
