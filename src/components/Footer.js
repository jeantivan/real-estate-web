import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Grid } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "./Logo";
import RRSS from "./RRSS";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#20232A",
    color: "white",
  },
  container: {
    maxWidth: 1920,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.up("xl")]: {
      padding: theme.spacing(4, 10),
    },
  },
  me: {
    ...theme.typography.body2,
    padding: theme.spacing(2, 0),
    //borderTop: `1px solid #130554`,
    maxWidth: 1920,
    width: "100%",
    margin: "0 auto",
    backgroundColor: "#181a1e",
  },
  text: {
    margin: theme.spacing(2, 0),
  },
  icon: {
    marginRight: theme.spacing(2),
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
        <Grid item md={9} lg={10}>
          <Logo type="footer" />
          <Typography variant="overline" display="block" gutterBottom>
            <span role="img" aria-label="copyright">
              <FontAwesomeIcon icon={faCopyright} className={classes.icon} />
            </span>
            {new Date().getFullYear()} | Todos los derechos reservados.
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.icon} />
            Centro Sambil Caracas Av. Libertador, Caracas 1064.
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            <FontAwesomeIcon icon={faPhone} className={classes.icon} />
            +58 424 123 45-67
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
            contacto@avilatek.com
          </Typography>
        </Grid>
        <Grid item md={3} lg={2}>
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
