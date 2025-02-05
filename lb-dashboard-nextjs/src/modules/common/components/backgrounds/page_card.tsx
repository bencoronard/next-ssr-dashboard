import { Paper } from "@mui/material";

type PageCardProps = Readonly<{
  children: React.ReactNode;
}>;

export default function PageCard({ children }: PageCardProps) {
  console.log("PageCard() was rendered here");
  return (
    <Paper elevation={3} sx={{ padding: "1.5em", borderRadius: "1em" }}>
      {children}
    </Paper>
  );
}
