import { IconButton, Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

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
const RRSS = (props) => {
  const classes = useStyles(props);
  return (
    <Grid container spacing={2} justify="flex-end">
      <Grid item>
        <IconButton
          color="primary"
          className={classes.icon}
          disableRipple
          aria-label="Cuenta de instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          color="primary"
          className={classes.icon}
          disableRipple
          aria-label="Cuenta de facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          color="primary"
          className={classes.icon}
          disableRipple
          aria-label="Cuenta de facebook"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default RRSS;
