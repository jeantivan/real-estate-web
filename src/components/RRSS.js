import { IconButton, Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { Instagram, WhatsApp } from "@material-ui/icons";

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
        >
          <Instagram />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          color="primary"
          className={classes.icon}
          disableRipple
          aria-label="Contacto por Whatsapp"
        >
          <WhatsApp />
        </IconButton>
      </Grid>
    </Grid>
  );
}
