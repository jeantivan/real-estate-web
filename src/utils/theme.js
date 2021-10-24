import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
const theme = createTheme({
  palette: {
    primary: blue,
    secondary: {
      main: "#FA4400",
    },
/*     background: {
      default: "#fff",
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
