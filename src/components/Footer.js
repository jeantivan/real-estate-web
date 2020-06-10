import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Typography, Link, Grid } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(6),
    backgroundColor: "#0a0130",
    color: "white",
  },
  container: {
    maxWidth: 1920,
    width: "100%",
    padding: theme.spacing(3, 2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3, 4),
    },
    [theme.breakpoints.up("xl")]: {
      padding: theme.spacing(3, 10),
    },
  },
  icon: {
    color: "white",
    transition: theme.transitions.create("color", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  me: {
    ...theme.typography.body2,
    paddingBottom: theme.spacing(2),
  },
  heart: {
    color: "#f44336",
    animation: "$pulse 1s ease-in-out infinite",
  },
  "@keyframes pulse": {
    from: {
      transform: "scale3d(1, 1, 1)",
    },

    "50%": {
      transform: "scale3d(1.05, 1.05, 1.05)",
    },
    to: {
      transform: "scale3d(1, 1, 1)",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container justify="space-between" className={classes.container}>
        <Grid item xs={10}>
          <Logo type="footer" />
          <Typography variant="overline" display="block">
            Todos los derechos reservados. 2020
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <IconButton
                color="secondary"
                className={classes.icon}
                disableRipple
                aria-label="Cuenta de instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                color="secondary"
                className={classes.icon}
                disableRipple
                aria-label="Cuenta de facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                color="secondary"
                className={classes.icon}
                disableRipple
                aria-label="Cuenta de facebook"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.me}>
        <Grid item>
          Creado con{" "}
          <span>
            <FontAwesomeIcon icon={faHeart} className={classes.heart} />
          </span>{" "}
          por{" "}
          <Link
            target="_blank"
            href="https://github.com/jptivan53"
            rel="noopener noreferrer"
            color="primary"
          >
            JEAN TIVAN.
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
