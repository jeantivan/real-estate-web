import { ContactForm, Layout } from "@/components";
import { styled } from '@mui/material/styles';
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { UbicacionSection } from "@/layouts/contacto/ubicacion";
import { RedesSection } from "@/layouts/contacto/Redes";

const PREFIX = 'contacto';

const classes = {
  container: `${PREFIX}-container`,
  titleContainer: `${PREFIX}-titleContainer`,
  title: `${PREFIX}-title`,
  bgDark: `${PREFIX}-bgDark`,
  mainHeading: `${PREFIX}-mainHeading`,
  contactHeading: `${PREFIX}-contactHeading`,
  phoneNumber: `${PREFIX}-phoneNumber`,
  info: `${PREFIX}-info`
};

const StyledLayout = styled(Layout)((
  {
    theme
  }
) => ({
  [`& .${classes.container}`]: {
    padding: theme.spacing(2),
    // [theme.breakpoints.up("sm")]: {
    //   padding: theme.spacing(4, 2),
    // },
  },

  [`& .${classes.titleContainer}`]: {
    paddingTop: theme.spacing(2),
  },

  [`& .${classes.title}`]: {
    ...theme.typography.body1,

    fontWeight: 800,
    textTransform: "uppercase",
  },

  [`& .${classes.bgDark}`]: {
    backgroundColor: "#000",
    color: "white",
  },

  [`& .${classes.mainHeading}`]: {
    ...theme.typography.h6,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 2,
  },

  [`& .${classes.contactHeading}`]: {
    ...theme.typography.h2,
    textAlign: "center",
    margin: 0,
    marginBottom: theme.spacing(2),
  },

  [`& .${classes.phoneNumber}`]: {
    ...theme.typography.h3,
    fontWeight: "bold",
  },

  [`& .${classes.info}`]: {
    backgroundColor: "white",
    color: "#000",
    height: "100%",
    padding: theme.spacing(3, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  }
}));

export default function Contacto() {


  return (
    <StyledLayout
      titulo="Contacto"
      descripcion="Praesent euismod massa quis iaculis feugiat. Aliquam in pellentesque purus. Cras sit amet risus ut dui accumsan blandit non pellentesque augue. Mauris nisi quam, venenatis nec rutrum sit amet, accumsan sed dolor. Fusce lobortis, erat quis mollis vulputate, lacus tellus venenatis sem, non tempor nisi quam et nisl. Vivamus sollicitudin, nisi a mollis consequat, sapien sem placerat nibh, at convallis nunc tortor in nisl. Praesent lorem sem, malesuada nec sagittis quis, accumsan vel ante. Curabitur elementum augue id tempor posuere."
    >
      <Container className={classes.titleContainer}>
        <Typography component="h1" className={classes.title}>
          Contacto
        </Typography>
      </Container>
      <UbicacionSection />
      <RedesSection />
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
                  <strong>+58 424 1234567</strong>
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
    </StyledLayout>
  );
}
