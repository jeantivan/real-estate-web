import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import Layout from "../../components/Layout";
import InmuebleInfo from "../../components/InmubleInfo";
import Gallery from "../../components/Gallery";
import NextLink from "next/link";

import { getInmuebleData, getAllInmueblesSlugs } from "../../lib/inmuebles";

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
    },
  },
}));

export default function Inmueble({ inmuebleData }) {
  const classes = useStyles();

  const { titulo, ubiAprox, images, contentHtml, ...info } = inmuebleData;
  return (
    <Layout title={titulo}>
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
            <LocationOnOutlinedIcon />
            <Typography variant="subtitle1">{ubiAprox}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={8} className={classes.gallery}>
          <Gallery images={images} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <InmuebleInfo info={info} />
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
          <div
            className={classes.html}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          ></div>
        </Grid>
      </Grid>
      <NextLink href="/inmuebles">
        <Link variant="h4">Volver a atras.</Link>
      </NextLink>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllInmueblesSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const inmuebleData = await getInmuebleData(params.slug);
  return {
    props: {
      inmuebleData,
    },
  };
}
