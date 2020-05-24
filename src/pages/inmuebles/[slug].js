import React from "react";
import { Grid, Typography } from "@material-ui/core";
//import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import Layout from "../../components/Layout";
import InmuebleInfo from "../../components/InmubleInfo";
import Gallery from "../../components/Gallery";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    color: theme.palette.primary.dark,
  },
  gallery: {
    minWidth: "100%",
    [theme.breakpoints.up("md")]: {
      minWidth: 0,
    },
  },
  location: {
    display: "inline-flex",
    alignItems: "center",
    color: theme.palette.primary.main,
  },
}));

//TO-DO proptypes
const imgs = [
  "#f44336",
  "#2196f3",
  "#4caf50",
  "#8e24aa",
  "#ffeb3b",
  "#ff6d00",
  "#7FFFD4",
  "#008B8B",
  "#800000",
];

export default function Inmueble({ slug }) {
  const classes = useStyles();
  return (
    <Layout title={slug}>
      <Grid container spacing={3}>
        <Grid item lg={12} xs={12}>
          <Typography
            variant="h4"
            component="h1"
            className={classes.title}
            gutterBottom
          >
            Titulo de la propiedad
          </Typography>
          <div className={classes.location}>
            <LocationOnOutlinedIcon />
            <Typography variant="subtitle1">Ubicación aproximada</Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={8} className={classes.gallery}>
          <Gallery images={imgs} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <InmuebleInfo />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            earum est! Quidem consequatur doloremque velit dolorem voluptates
            numquam error neque nesciunt necessitatibus sed, in voluptatem
            consectetur odio ut, laboriosam aut?
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            earum est! Quidem consequatur doloremque velit dolorem voluptates
            numquam error neque nesciunt necessitatibus sed, in voluptatem
            consectetur odio ut, laboriosam aut?
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            earum est! Quidem consequatur doloremque velit dolorem voluptates
            numquam error neque nesciunt necessitatibus sed, in voluptatem
            consectetur odio ut, laboriosam aut?
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            earum est! Quidem consequatur doloremque velit dolorem voluptates
            numquam error neque nesciunt necessitatibus sed, in voluptatem
            consectetur odio ut, laboriosam aut?
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: Array.from(Array(4)).map((_, i) => `/inmuebles/ejemplo-${i + 1}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  return { props: { slug } };
}
