<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { makeStyles } from "@material-ui/core/styles";
import {
  Link,
  Grid,
  Container,
  Typography,
  IconButton,
} from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import NextLink from "next/link";

import Logo from "./Logo";
import Newsletter from "./Newsletter";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#24324a",
    color: "white",
  },
  bgDark: {
    backgroundColor: "#1d293e",
  },
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  /* grid: {
    width: "100%",
    marginLeft: theme.spacing(-2),
  },
  gridItem: {
    padding: theme.spacing(2),
  }, */
  subFooter: {
    padding: theme.spacing(3),
    color: "#8a99b3",
    fontSize: "0.8rem",
    display: "flex",
  },
  copyright: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginBottom: theme.spacing(2),
  },
  heading: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(4),
    },
  },
  text: {
    color: "#8a99b3",
    fontSize: "0.8rem",
    display: "inline-flex",
    alignItems: "center",
    lineHeight: 1.2,
    marginBottom: theme.spacing(2),
  },
  link: {
    ...theme.typography.body2,
    color: "#8a99b3",

    marginBottom: theme.spacing(2),
    transition: theme.transitions.create(["color", "textDecoration"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    "&:hover": {
      color: "white",
    },
  },
  icon: {
    width: 12,
    height: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(2),
  },
  rs: {
    marginTop: theme.spacing(-1.5),
  },
  social: {
    color: "#8a99b3",
    transition: theme.transitions.create("color", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    "&:hover": {
      color: "white",
    },
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

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={12} sm={6} md={3} container direction="column">
            <Typography variant="h6" className={classes.heading}>
              Nosotros
            </Typography>
            <Logo type="footer" className={classes.logo} />
            <Typography className={classes.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              ipsa ut labore ducimus similique voluptates tempora deleniti
              minima quisquam odit?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2} container direction="column">
            <Typography variant="h6" className={classes.heading}>
              Navega
            </Typography>
            <NextLink href="/" passHref>
              <Link className={classes.link}>Inicio</Link>
            </NextLink>
            <NextLink href="/inmuebles" passHref>
              <Link className={classes.link}>Inmuebles</Link>
            </NextLink>
            <NextLink href="/nosotros" passHref>
              <Link className={classes.link}>Nosotros</Link>
            </NextLink>
            <NextLink href="/contacto" passHref>
              <Link className={classes.link}>Contacto</Link>
            </NextLink>
          </Grid>
          <Grid item xs={12} sm={6} md={3} container direction="column">
            <Typography variant="h6" className={classes.heading}>
              Contáctanos
            </Typography>

            <div className={classes.text}>
              <span role="img" aria-label="ubicacion" className={classes.icon}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              Centro Sambil Caracas, Av. Libertador, Caracas 1064.
            </div>
            <div className={classes.text}>
              <span role="img" aria-label="telefono" className={classes.icon}>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              +58 424 123 45-67
            </div>
            <div className={classes.text}>
              <span role="img" aria-label="telefono" className={classes.icon}>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              +58 212 000 00-00
            </div>
            <div className={classes.text}>
              <span role="img" aria-label="email" className={classes.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              contacto@avilatek.com
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} container direction="column">
            <Typography variant="h6" className={classes.heading}>
              Siguenos
            </Typography>
            <div className={classes.rs}>
              <IconButton
                className={classes.social}
                href="#"
                edge="start"
                disableRipple
                aria-label="Cuenta de instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </IconButton>
              <IconButton
                className={classes.social}
                href="#"
                disableRipple
                aria-label="Cuenta de facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </IconButton>
              <IconButton
                className={classes.social}
                href="#"
                disableRipple
                aria-label="Cuenta de twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </IconButton>
              <IconButton
                className={classes.social}
                href="#"
                edge="end"
                disableRipple
                aria-label="Canal de youtube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </IconButton>
            </div>
            <Typography variant="h6" gutterBottom>
              Promociones
            </Typography>
            <Typography className={classes.text}>
              Recibe notificaciones cuando se publique un nuevo inmueble.
            </Typography>
            <Newsletter />
          </Grid>
        </Grid>
      </Container>
      <div className={classes.bgDark}>
        <Container>
          <div className={classes.subFooter}>
            <div className={classes.copyright}>
              <span role="img" aria-label="ubicacion" className={classes.icon}>
                <FontAwesomeIcon icon={faCopyright} />
              </span>
              {new Date().getFullYear()} Avilatek | Todos los derechos
              reservados
            </div>
            <div className={classes.me}>
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
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import { makeStyles } from "@material-ui/core/styles";
import {
  Link,
  Grid,
  Container,
  Typography,
  IconButton,
} from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import NextLink from "next/link";

import Logo from "./Logo";
import Newsletter from "./Newsletter";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#24324a",
    color: "white",
  },
  bgDark: {
    backgroundColor: "#1d293e",
  },
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  gridItem: {
    padding: theme.spacing(2),
  },
  subFooter: {
    padding: theme.spacing(3),
    color: "#8a99b3",
    fontSize: "0.8rem",
    display: "flex",
  },
  copyright: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginBottom: theme.spacing(2),
  },
  heading: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(4),
    },
  },
  text: {
    color: "#8a99b3",
    fontSize: "0.8rem",
    display: "inline-flex",
    alignItems: "center",
    lineHeight: 1.2,
    marginBottom: theme.spacing(2),
  },
  link: {
    ...theme.typography.body2,
    color: "#8a99b3",

    marginBottom: theme.spacing(2),
    transition: theme.transitions.create(["color", "textDecoration"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    "&:hover": {
      color: "white",
    },
  },
  icon: {
    width: 12,
    height: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(2),
  },
  rs: {
    marginTop: theme.spacing(-1.5),
  },
  social: {
    color: "#8a99b3",
    transition: theme.transitions.create("color", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    "&:hover": {
      color: "white",
    },
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

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <Grid container justify="space-between">
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            container
            direction="column"
            className={classes.gridItem}
          >
            <Typography variant="h6" className={classes.heading}>
              Nosotros
            </Typography>
            <Logo type="footer" className={classes.logo} />
            <Typography className={classes.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              ipsa ut labore ducimus similique voluptates tempora deleniti
              minima quisquam odit?
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            container
            direction="column"
            className={classes.gridItem}
          >
            <Typography variant="h6" className={classes.heading}>
              Navega
            </Typography>
            <NextLink href="/" passHref>
              <Link className={classes.link}>Inicio</Link>
            </NextLink>
            <NextLink href="/inmuebles" passHref>
              <Link className={classes.link}>Inmuebles</Link>
            </NextLink>
            <NextLink href="/nosotros" passHref>
              <Link className={classes.link}>Nosotros</Link>
            </NextLink>
            <NextLink href="/contacto" passHref>
              <Link className={classes.link}>Contacto</Link>
            </NextLink>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            container
            direction="column"
            className={classes.gridItem}
          >
            <Typography variant="h6" className={classes.heading}>
              Contáctanos
            </Typography>

            <div className={classes.text}>
              <span role="img" aria-label="ubicacion" className={classes.icon}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              Centro Sambil Caracas, Av. Libertador, Caracas 1064.
            </div>
            <div className={classes.text}>
              <span role="img" aria-label="telefono" className={classes.icon}>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              +58 424 123 45-67
            </div>
            <div className={classes.text}>
              <span role="img" aria-label="telefono" className={classes.icon}>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              +58 212 000 00-00
            </div>
            <div className={classes.text}>
              <span role="img" aria-label="email" className={classes.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              contacto@avilatek.com
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            container
            direction="column"
            className={classes.gridItem}
          >
            <Typography variant="h6" className={classes.heading}>
              Siguenos
            </Typography>
            <div className={classes.rs}>
              <IconButton
                className={classes.social}
                href="#"
                edge="start"
                disableRipple
                aria-label="Cuenta de instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </IconButton>
              <IconButton
                className={classes.social}
                href="#"
                disableRipple
                aria-label="Cuenta de facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </IconButton>
              <IconButton
                className={classes.social}
                href="#"
                disableRipple
                aria-label="Cuenta de twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </IconButton>
              <IconButton
                className={classes.social}
                href="#"
                edge="end"
                disableRipple
                aria-label="Canal de youtube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </IconButton>
            </div>
            <Typography variant="h6" gutterBottom>
              Promociones
            </Typography>
            <Typography className={classes.text}>
              Recibe notificaciones cuando se publique un nuevo inmueble.
            </Typography>
            <Newsletter />
          </Grid>
        </Grid>
      </Container>
      <div className={classes.bgDark}>
        <Container>
          <div className={classes.subFooter}>
            <div className={classes.copyright}>
              <span role="img" aria-label="ubicacion" className={classes.icon}>
                <FontAwesomeIcon icon={faCopyright} />
              </span>
              {new Date().getFullYear()} Avilatek | Todos los derechos
              reservados
            </div>
            <div className={classes.me}>
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
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
