"use client";
import { createTheme } from "@mui/material/styles";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1B3280",
    },
    secondary: {
      main: "#E49F24",
    },
  },
  typography: {
    fontFamily: "Kanit",
    h1: {
      fontWeight: 900,
      fontSize: "3em",
      lineHeight: 1,
      letterSpacing: "0em",
      textTransform: "uppercase",
    },
    h2: {
      fontWeight: 800,
      fontSize: "2.5em",
      lineHeight: 1,
      letterSpacing: "0em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.5em",
      lineHeight: 1,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 600,
      fontSize: "2em",
      lineHeight: 1,
      letterSpacing: "0em",
    },
    h5: {
      fontWeight: 500,
      fontSize: "2em",
      lineHeight: 1,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 400,
      fontSize: "1.5em",
      lineHeight: 1,
      letterSpacing: "0em",
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: "1em",
      lineHeight: 1,
      letterSpacing: "0em",
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: "0.875em",
      lineHeight: 1,
      letterSpacing: "0em",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1em",
      lineHeight: 1,
      letterSpacing: "0em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875em",
      lineHeight: 1,
      letterSpacing: "0em",
    },
    button: {
      fontWeight: 500,
      fontSize: "0.875em",
      lineHeight: 2,
      letterSpacing: "0em",
      textTransform: "uppercase",
    },
    caption: {
      fontWeight: 300,
      fontSize: "0.75em",
      lineHeight: 1,
      letterSpacing: "0em",
    },
    overline: {
      fontWeight: 400,
      fontSize: "1.125em",
      lineHeight: 1,
      letterSpacing: "0em",
    },
  },
});

export default theme;
