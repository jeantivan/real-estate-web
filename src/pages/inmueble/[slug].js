import { Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { RichText } from "prismic-reactjs";

import Layout from "../../components/Layout";
import { Information, Item } from "../../components/Inmueble";
import Gallery from "../../components/Gallery";
import NextLink from "next/link";

import { getInmueble, getAllInmueblesSlug } from "../../lib";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    color: theme.palette.primary.dark,
  },
  gallery: {
    minWidth: "100%",
    borderRadius: theme.spacing(3),
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
    fontWeight: 400,
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

export default function Inmueble({ inmuebleData, masInmuebles }) {
  const classes = useStyles();

  const {
    titulo,
    ubiAprox,
    imagenes,
    descCorta,
    descripcion,
    info,
  } = inmuebleData;

  masInmuebles = masInmuebles.map(({ data, uid }) => {
    return {
      slug: uid,
      area: data.area,
      titulo: data.titulo[0],
      mainImg: data.mainimg,
      precio: data.precio,
      estado: data.estado,
      ubiAprox: data.ubiaprox,
      habitaciones: data.habitaciones,
    };
  });

  return (
    <Layout titulo={titulo} descripcion={descCorta}>
      <Grid container spacing={3} component="article">
        <Grid
          item
          lg={12}
          xs={12}
          id="titulo-de-la-propiedad"
          component="section"
        >
          <Typography
            variant="h4"
            component="h1"
            className={classes.title}
            gutterBottom
          >
            {titulo}
          </Typography>
          <div className={classes.location}>
            <Typography variant="body1" component="p">
              <span className={classes.icon}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              {ubiAprox}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={8} className={classes.gallery}>
          <Gallery imagenes={imagenes} />
        </Grid>
        <Grid item xs={12} lg={4}>
          {<Information {...info} />}
        </Grid>
        <Grid item xs={12} component="section" id="descripcion-de-la-propiedad">
          <Typography
            variant="h6"
            component="h3"
            className={classes.description}
            gutterBottom
          >
            Descripción.
          </Typography>
          <div>
            <Typography paragraph>{RichText.asText(descripcion)}</Typography>
          </div>
        </Grid>
      </Grid>
      <div className={classes.masInmuebles}>
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
        <Grid container spacing={3}>
          {masInmuebles.map((inmueble) => (
            <Grid key={inmueble.slug} item xs={12} sm={6} md={4}>
              {<Item {...inmueble} />}
            </Grid>
          ))}
        </Grid>
      </div>
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
  const {
    document: { data },
    masInmuebles,
  } = await getInmueble(params.slug);

  const inmuebleData = {
    titulo: data.titulo[0].text,
    ubiAprox: data.ubiaprox,
    descCorta: data.desccorta,
    descripcion: data.descripcion,
    imagenes: data.imagenes,
    info: {
      precio: data.precio,
      area: data.area,
      habitaciones: data.habitaciones,
      baños: data.banos,
      estacionamientos: data.estacionamientos,
      agent: data.agent.data,
    },
  };
  return {
    props: {
      inmuebleData,
      masInmuebles: masInmuebles.results,
    },
  };
}
