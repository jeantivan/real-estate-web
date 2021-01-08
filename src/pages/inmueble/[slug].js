import {
  Grid,
  Typography,
  Link,
  Container,
  Paper,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { RichText } from "prismic-reactjs";

import {
  Layout,
  Gallery,
  InmuebleItem,
  InmuebleInformation,
} from "../../components";
import NextLink from "next/link";

import {
  getInmueble,
  getAllInmueblesSlug,
  getInmueblesSimilares,
} from "../../lib/api";

const useStyles = makeStyles((theme) => ({
  title: {
    //fontWeight: "semibold",
    //color: theme.palette.primary.dark,
  },
  price: {
    fontWeight: 700,
    color: theme.palette.primary.dark,
  },
  gallery: {
    minWidth: "100%",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      minWidth: 0,
    },
  },
  location: {
    display: "inline-flex",
    alignItems: "center",
    color: theme.palette.primary.main,
  },
  description: {
    fontWeight: 700,
    position: "relative",
    display: "inline-block",

    "&:after": {
      position: "absolute",
      bottom: 0,
      left: 0,
      content: "''",
      width: "45%",
      height: 2,
      backgroundColor: theme.palette.primary.light,
    },
  },
  html: {
    "& > p": {
      ...theme.typography.body1,
      maxWidth: "100%",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  masInmuebles: {
    padding: theme.spacing(2, 0),
    width: "100%",
  },
}));

export default function Inmueble({ inmueble, inmueblesSimilares }) {
  const classes = useStyles();

  const inmuebleInfo = {
    precio: inmueble.precio,
    area: inmueble.area,
    habitaciones: inmueble.habitaciones,
    baños: inmueble.banos,
    estacionamientos: inmueble.estacionamientos,
  };

  // inmueblesSimilares = inmueblesSimilares.map(({ data, uid }) => {
  //   return {
  //     slug: uid,
  //     area: data.area,
  //     titulo: data.titulo[0],
  //     mainImg: data.mainimg,
  //     precio: data.precio,
  //     estado: data.estado,
  //     ubiAprox: data.ubiaprox,
  //     habitaciones: data.habitaciones,
  //   };
  // });

  return (
    <Layout
      titulo={RichText.asText(inmueble.titulo)}
      descripcion={inmueble.descCorta}
    >
      <Container fixed maxWidth="md">
        <Box py={4}>
          <Grid container spacing={3} component="article">
            <Grid
              item
              lg={12}
              xs={12}
              id="titulo-de-la-propiedad"
              component="section"
              container
            >
              <Grid item style={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  component="h1"
                  className={classes.title}
                >
                  {RichText.asText(inmueble.titulo)}
                </Typography>
                <div className={classes.location}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    <span className={classes.icon}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </span>
                    {inmueble.ubiaprox}
                  </Typography>
                </div>
              </Grid>
              <Grid item>
                <Typography
                  variant="h3"
                  component="h4"
                  className={classes.price}
                >
                  <sup>$</sup>
                  {inmueble.precio}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              component="section"
              item
              xs={12}
              lg={12}
              className={classes.gallery}
            >
              <Gallery imagenes={inmueble.imagenes} />
            </Grid>
            {/* <Grid item xs={12} lg={4} component="section">
            <InmuebleInformation {...inmuebleInfo} agent={inmueble.agent} />
          </Grid> */}
            <Grid
              item
              xs={12}
              lg={8}
              component="section"
              id="descripcion-de-la-propiedad"
            >
              <Typography
                variant="h6"
                component="h3"
                className={classes.description}
                gutterBottom
              >
                Descripción.
              </Typography>
              <div className={classes.html}>
                <RichText render={inmueble.descripcion} />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              component="section"
              id="descripcion-de-la-propiedad"
            >
              <Paper elevation={0} variant="outlined">
                <Box p={2}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={classes.description}
                    gutterBottom
                  >
                    Caracteristicas.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          {/* <div className={classes.masInmuebles}>
            <Grid container justify="space-between" spacing={3}>
              <Grid item>
                <Typography variant="h6">Más Inmuebles.</Typography>
              </Grid>
              <Grid item>
                <NextLink href="/inmuebles" passHref>
                  <Link color="primary" underline="hover">
                    Ver todos
                  </Link>
                </NextLink>
              </Grid>
            </Grid>
          </div> */}
        </Box>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllInmueblesSlug();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const inmueble = await getInmueble(params.slug);

  const inmueblesSimilares = await getInmueblesSimilares(inmueble.id);

  return {
    props: {
      inmueble,
      inmueblesSimilares,
    },
  };
}
