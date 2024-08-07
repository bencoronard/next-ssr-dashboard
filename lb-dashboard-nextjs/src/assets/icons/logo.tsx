import Image from "next/image";

interface ResponsiveLogoProps {
  variant?: "dark" | "light" | "neutral";
}

export default function ResponsiveLogo(props: ResponsiveLogoProps) {
  const { variant = "neutral" } = props;
  return <Image src={source[variant]} alt="Logo" fill={true} priority />;
}

const source = {
  neutral: "/assets/images/logo/logo-neutral.svg",
  dark: "/assets/images/logo/logo-dark.svg",
  light: "/assets/images/logo/logo-light.svg",
};
