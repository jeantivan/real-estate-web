import { Layout, ContactForm } from "../components";

import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  bgLight: {
    backgroundColor: "#fafafa",
  },
  bgDark: {
    backgroundColor: "#000",
    color: "white",
  },
  title: {
    ...theme.typography.h6,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  phoneNumber: {
    ...theme.typography.h3,
    fontWeight: "bold",
    margin: theme.spacing(1, 0),
  },
  map: {
    width: "100%",
    height: 0,
    paddingTop: "calc(9 / 21 * 100%)",
    position: "relative",
  },
  mapWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.grey[500],
  },
  mapContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  rsTitle: {
    ...theme.typography.h5,
    fontWeight: "bold",
    textAlign: "center",
    margin: theme.spacing(2, 0),
    marginTop: 0,
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
    padding: theme.spacing(3),
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
      <Box py={4}>
        <Container component="section">
          <Typography component="h1" align="center" className={classes.title}>
            Contacto
          </Typography>
          <Typography
            component="div"
            align="center"
            className={classes.phoneNumber}
          >
            +58 123 45-67
          </Typography>
          <Typography component="div" align="center">
            Avenida Luis Roche, Caracas 1060, Miranda
          </Typography>
        </Container>
      </Box>
      <section id="map" className={classes.map}>
        <div className={classes.mapWrapper}>
          <div className={classes.mapContent}>
            <Typography component="div" variant="h2">
              Mapa
            </Typography>
          </div>
        </div>
      </section>
      <Box py={10} minHeight="10vmax" className={classes.bgLight}>
        <Container component="section" id="rrss">
          <h2 className={classes.rsTitle}>Nuestras redes.</h2>
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
                aria-label="Cuenta de whatsapp"
              >
                <FontAwesomeIcon size="lg" icon={faWhatsapp} />
              </IconButton>
            </Grid>
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
      </Box>

      <Box py={8} className={classes.bgDark}>
        <Container>
          <Box mb={4}>
            <Typography variant="h2" align="center">
              Contáctanos
            </Typography>
          </Box>

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
                  <strong>+58 123 45-67</strong>
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                  align="center"
                  gutterBottom
                >
                  Horario: 10:00 – 19:00
                </Typography>
                <Typography
                  variant="body1"
                  component="span"
                  align="center"
                  gutterBottom
                >
                  <strong>Dirección</strong> Avenida Luis Roche, Caracas 1060,
                  Miranda
                </Typography>
                <Typography
                  variant="body1"
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
      </Box>
    </Layout>
  );
}
