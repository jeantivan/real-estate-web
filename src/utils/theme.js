import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: blue,
    secondary: {
      main: "#FA4400",
    },
    /*   background: {
      default: "#fafafa",
  }, */
  },
  typography: {
    fontFamily: [
      '"Montserrat"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default responsiveFontSizes(theme);
