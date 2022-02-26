import { IconButton, Grid } from "@mui/material/";
import makeStyles from '@mui/styles/makeStyles';
import { Instagram, WhatsApp } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: (props) => (props.type === "light" ? "#202020" : "white"),
    transition: theme.transitions.create("color", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    "&:hover": {
      color: (props) =>
        props.type === "light"
          ? theme.palette.primary.main
          : theme.palette.secondary.main,
    },
  },
}));

// Redes Sociales
export function RRSS(props) {
  const classes = useStyles(props);
  return (
    <Grid container justifyContent="flex-end">
      <Grid item>
        <IconButton
          color="primary"
          className={classes.icon}
          disableRipple
          aria-label="Cuenta de instagram"
          size="large">
          <Instagram />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          color="primary"
          className={classes.icon}
          disableRipple
          aria-label="Contacto por Whatsapp"
          size="large">
          <WhatsApp />
        </IconButton>
      </Grid>
    </Grid>
  );
}
