import { Layout } from "@/components";
import { InmuebleGallery } from "@/layouts/inmueble-gallery";
import { InmuebleHeader } from "@/layouts/inmueble-header";
import {
  getAllInmueblesSlug,
  getInmueble,
  getInmueblesSimilares,
} from "@/lib/api";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RichText } from "prismic-reactjs";

const useStyles = makeStyles((theme) => ({
  gallery: {
    minWidth: "100%",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      minWidth: 0,
    },
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
      <Container fixed maxWidth="lg">
        <Box py={4}>
          <Grid container justify="center">
            <Grid item xs={12} md={10}>
              <Box component="article">
                <InmuebleHeader
                  titulo={inmueble.titulo}
                  ubiaprox={inmueble.ubiaprox}
                  precio={inmueble.precio}
                />
                <InmuebleGallery imagenes={inmueble.imagenes} />
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
              </Box>
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
