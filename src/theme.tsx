import { createTheme, Theme } from "@material-ui/core";

// Create a theme instance.
export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#fff",
    },
  },
  spacing: 8,
});
