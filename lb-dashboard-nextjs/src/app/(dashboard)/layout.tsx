import { useTheme } from "@mui/material";

type DashboardLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function DashboardLayout({children}: DashboardLayoutProps) {
  console.log("DashboardLayout() was rendered here");
  const theme = useTheme;
  return <></>
}