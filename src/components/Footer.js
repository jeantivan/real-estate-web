import { makeStyles } from "@material-ui/core/styles";
import {
  Link,
  Grid,
  Container,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  Copyright,
  Instagram,
  Facebook,
  Favorite,
  LocationOn,
  Phone,
  PhoneAndroid,
  Mail,
  YouTube,
  Twitter,
} from "@material-ui/icons";

import NextLink from "next/link";

import { Logo } from "./Logo";
import { Newsletter } from "./Newsletter";

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
    marginBottom: theme.spacing(2),
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
  me: {
    display: "inline-flex",
    alignItems: "center",
    "& > *": {
      marginRight: theme.spacing(0.25),
      marginLeft: theme.spacing(0.25),
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

export function Footer() {
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
                <LocationOn fontSize="small" />
              </span>
              Centro Sambil Caracas, Av. Libertador, Caracas 1064.
            </div>
            <div className={classes.text}>
              <span role="img" aria-label="telefono" className={classes.icon}>
                <PhoneAndroid fontSize="small" />
              </span>
              +58 424 123 45-67
            </div>
            <div className={classes.text}>
              <span role="img" aria-label="telefono" className={classes.icon}>
                <Phone fontSize="small" />
              </span>
              +58 212 000 00-00
            </div>
            <div className={classes.text}>
              <span role="img" aria-label="email" className={classes.icon}>
                <Mail fontSize="small" />
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
                edge="start"
                disableRipple
                aria-label="Cuenta de instagram"
              >
                <Instagram />
              </IconButton>
              <IconButton
                className={classes.social}
                disableRipple
                aria-label="Cuenta de facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                className={classes.social}
                disableRipple
                aria-label="Cuenta de twitter"
              >
                <Twitter />
              </IconButton>
              <IconButton
                className={classes.social}
                disableRipple
                aria-label="Canal de youtube"
              >
                <YouTube />
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
                <Copyright fontSize="small" />
              </span>
              {new Date().getFullYear()} Avilatek | Todos los derechos
              reservados
            </div>
            <div className={classes.me}>
              <span>Creado con</span>
              <span className={classes.heart}>
                <Favorite fontSize="small" />
              </span>
              <span>por</span>
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
