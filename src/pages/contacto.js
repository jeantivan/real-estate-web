<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Layout, ContactForm } from "../components";

import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(6, 2),
    },
  },
  bgLight: {
    backgroundColor: "#fafafa",
  },
  bgDark: {
    backgroundColor: "#000",
    color: "white",
  },
  mainHeading: {
    ...theme.typography.h6,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: theme.spacing(2),
  },
  rsHeading: {
    ...theme.typography.h5,
    fontWeight: "bold",
    textAlign: "center",
    margin: 0,
    marginBottom: theme.spacing(2),
  },
  contactHeading: {
    ...theme.typography.h2,
    textAlign: "center",
    margin: 0,
    marginBottom: theme.spacing(2),
  },
  phoneNumber: {
    ...theme.typography.h3,
    fontWeight: "bold",
  },
  mapWrapper: {
    width: "100%",
    height: 0,
    paddingTop: "calc(9 / 21 * 100%)",
    position: "relative",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.grey[500],
    "& > iframe": {
      width: "100%",
      height: "100%",
    },
  },
  icon: {
    color: theme.palette.text.secondary,
    transition: theme.transitions.create(["color", "transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    "&:hover": {
      transform: "scale(1.1)",
      color: theme.palette.primary.main,
    },
  },
  info: {
    backgroundColor: "white",
    color: "#000",
    height: "100%",
    padding: theme.spacing(3, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

export default function Contacto() {
  const classes = useStyles();

  return (
    <Layout
      titulo="Contacto"
      descripcion="Praesent euismod massa quis iaculis feugiat. Aliquam in pellentesque purus. Cras sit amet risus ut dui accumsan blandit non pellentesque augue. Mauris nisi quam, venenatis nec rutrum sit amet, accumsan sed dolor. Fusce lobortis, erat quis mollis vulputate, lacus tellus venenatis sem, non tempor nisi quam et nisl. Vivamus sollicitudin, nisi a mollis consequat, sapien sem placerat nibh, at convallis nunc tortor in nisl. Praesent lorem sem, malesuada nec sagittis quis, accumsan vel ante. Curabitur elementum augue id tempor posuere."
    >
      <Container component="section" className={classes.container}>
        <Typography
          component="h1"
          align="center"
          className={classes.mainHeading}
        >
          Contacto
        </Typography>
        <Typography
          component="div"
          align="center"
          className={classes.phoneNumber}
          gutterBottom
        >
          +58 424 123 45-67
        </Typography>
        <Typography component="div" align="center">
          Centro Sambil Caracas, Av. Libertador, Caracas 1064.
        </Typography>
      </Container>

      <section id="map" className={classes.mapWrapper}>
        <div className={classes.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.140889860604!2d-66.85656248588566!3d10.489557867293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5855bdf90331%3A0x12e82a3cb3dbb29d!2sCentro%20Sambil%20Caracas!5e0!3m2!1ses!2sve!4v1595628584738!5m2!1ses!2sve"
            frameborder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
      <section id="rrss" className={classes.bgLight}>
        <Container className={classes.container}>
          <h2 className={classes.rsHeading}>Nuestras redes.</h2>
          <Grid
            container
            spacing={2}
            justify="center"
            className={classes.rsContent}
          >
            <Grid item>
              <IconButton
                className={classes.icon}
                disableRipple
                aria-label="Cuenta de instagram"
              >
                <FontAwesomeIcon size="lg" icon={faInstagram} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                disableRipple
                aria-label="Cuenta de facebook"
              >
                <FontAwesomeIcon size="lg" icon={faFacebook} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                disableRipple
                aria-label="Cuenta de twitter"
              >
                <FontAwesomeIcon size="lg" icon={faTwitter} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                disableRipple
                aria-label="Canal de youtube"
              >
                <FontAwesomeIcon size="lg" icon={faYoutube} />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.bgDark}>
        <Container className={classes.container}>
          <h2 className={classes.contactHeading}>Contáctanos</h2>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={classes.info}>
                <Typography
                  variant="h4"
                  component="span"
                  align="center"
                  gutterBottom
                >
                  <strong>+58 424 123 45-67</strong>
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                  align="center"
                  gutterBottom
                >
                  Horario: 10:00 AM – 07:00 PM
                </Typography>
                <Typography
                  variant="body2"
                  component="span"
                  align="center"
                  gutterBottom
                >
                  <strong>Dirección</strong> Centro Sambil Caracas Av.
                  Libertador, Caracas 1064.
                </Typography>
                <Typography
                  variant="body2"
                  component="span"
                  align="center"
                  gutterBottom
                >
                  <strong>Email</strong> contacto@avilatek.com
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  );
}
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import { Layout, ContactForm } from "../components";

import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(6, 2),
    },
  },
  bgLight: {
    backgroundColor: "#fafafa",
  },
  bgDark: {
    backgroundColor: "#000",
    color: "white",
  },
  mainHeading: {
    ...theme.typography.h6,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: theme.spacing(2),
  },
  rsHeading: {
    ...theme.typography.h5,
    fontWeight: "bold",
    textAlign: "center",
    margin: 0,
    marginBottom: theme.spacing(2),
  },
  contactHeading: {
    ...theme.typography.h2,
    textAlign: "center",
    margin: 0,
    marginBottom: theme.spacing(2),
  },
  phoneNumber: {
    ...theme.typography.h3,
    fontWeight: "bold",
  },
  mapWrapper: {
    width: "100%",
    height: 0,
    paddingTop: "calc(9 / 21 * 100%)",
    position: "relative",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.grey[500],
    "& > iframe": {
      width: "100%",
      height: "100%",
    },
  },
  icon: {
    color: theme.palette.text.secondary,
    transition: theme.transitions.create(["color", "transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    "&:hover": {
      transform: "scale(1.1)",
      color: theme.palette.primary.main,
    },
  },
  info: {
    backgroundColor: "white",
    color: "#000",
    height: "100%",
    padding: theme.spacing(3, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

export default function Contacto() {
  const classes = useStyles();

  return (
    <Layout
      titulo="Contacto"
      descripcion="Praesent euismod massa quis iaculis feugiat. Aliquam in pellentesque purus. Cras sit amet risus ut dui accumsan blandit non pellentesque augue. Mauris nisi quam, venenatis nec rutrum sit amet, accumsan sed dolor. Fusce lobortis, erat quis mollis vulputate, lacus tellus venenatis sem, non tempor nisi quam et nisl. Vivamus sollicitudin, nisi a mollis consequat, sapien sem placerat nibh, at convallis nunc tortor in nisl. Praesent lorem sem, malesuada nec sagittis quis, accumsan vel ante. Curabitur elementum augue id tempor posuere."
    >
      <Container component="section" className={classes.container}>
        <Typography
          component="h1"
          align="center"
          className={classes.mainHeading}
        >
          Contacto
        </Typography>
        <Typography
          component="div"
          align="center"
          className={classes.phoneNumber}
          gutterBottom
        >
          +58 424 123 45-67
        </Typography>
        <Typography component="div" align="center">
          Centro Sambil Caracas, Av. Libertador, Caracas 1064.
        </Typography>
      </Container>

      <section id="map" className={classes.mapWrapper}>
        <div className={classes.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.140889860604!2d-66.85656248588566!3d10.489557867293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5855bdf90331%3A0x12e82a3cb3dbb29d!2sCentro%20Sambil%20Caracas!5e0!3m2!1ses!2sve!4v1595628584738!5m2!1ses!2sve"
            frameborder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
      <section id="rrss" className={classes.bgLight}>
        <Container className={classes.container}>
          <h2 className={classes.rsHeading}>Nuestras redes.</h2>
          <Grid
            container
            spacing={2}
            justify="center"
            className={classes.rsContent}
          >
            <Grid item>
              <IconButton
                className={classes.icon}
                disableRipple
                aria-label="Cuenta de instagram"
              >
                <FontAwesomeIcon size="lg" icon={faInstagram} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                disableRipple
                aria-label="Cuenta de facebook"
              >
                <FontAwesomeIcon size="lg" icon={faFacebook} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                disableRipple
                aria-label="Cuenta de twitter"
              >
                <FontAwesomeIcon size="lg" icon={faTwitter} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                disableRipple
                aria-label="Canal de youtube"
              >
                <FontAwesomeIcon size="lg" icon={faYoutube} />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.bgDark}>
        <Container className={classes.container}>
          <h2 className={classes.contactHeading}>Contáctanos</h2>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={classes.info}>
                <Typography
                  variant="h4"
                  component="span"
                  align="center"
                  gutterBottom
                >
                  <strong>+58 424 123 45-67</strong>
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                  align="center"
                  gutterBottom
                >
                  Horario: 10:00 AM – 07:00 PM
                </Typography>
                <Typography
                  variant="body2"
                  component="span"
                  align="center"
                  gutterBottom
                >
                  <strong>Dirección</strong> Centro Sambil Caracas Av.
                  Libertador, Caracas 1064.
                </Typography>
                <Typography
                  variant="body2"
                  component="span"
                  align="center"
                  gutterBottom
                >
                  <strong>Email</strong> contacto@avilatek.com
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  );
}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
