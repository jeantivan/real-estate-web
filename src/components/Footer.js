import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Grid } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Logo from "./Logo";
import RRSS from "./RRSS";

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
        <Grid item md={10}>
          <Logo type="footer" />
          <Typography variant="overline" display="block">
            Todos los derechos reservados. 2020
          </Typography>
        </Grid>
        <Grid item md={2}>
          <RRSS type="dark" />
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
