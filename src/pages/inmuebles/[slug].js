import { Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { RichText } from "prismic-reactjs";

import Layout from "../../components/Layout";
import { Information } from "../../components/Inmueble";
import Gallery from "../../components/Gallery";
import NextLink from "next/link";
import Head from "next/head";

import { getInmueble, getAllInmueblesSlug } from "../../lib/inmuebles";

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
}));

export default function Inmueble({ inmuebleData }) {
  const classes = useStyles();

  const {
    titulo,
    ubiAprox,
    imagenes,
    descCorta,
    descripcion,
    info,
  } = inmuebleData;

  console.log(info);

  return (
    <Layout titulo={titulo}>
      <Head>
        <meta name="description" content={descCorta} />
      </Head>
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
      <NextLink href="/inmuebles">
        <Link variant="h4">Volver a atras.</Link>
      </NextLink>
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
  const { data } = await getInmueble(params.slug);

  console.log(data);

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
    },
  };
}
