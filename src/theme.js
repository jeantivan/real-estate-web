import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2582A5",
    },
    background: {
      default: "#fff",
    },
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

export default theme;
