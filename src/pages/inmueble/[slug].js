import { Layout } from "@/components";
import { ContactSection } from "@/layouts/inmueble/contact";
import { GallerySection } from "@/layouts/inmueble/gallery";
import { HeaderSection } from "@/layouts/inmueble/header";
import { OverviewSection } from "@/layouts/inmueble/overview";
import { SimilaresSection } from "@/layouts/inmueble/similares";
import {
  getAllInmueblesSlug,
  getInmueble,
  getInmueblesSimilares,
} from "@/lib/api";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PrismicText } from "@prismicio/react";
import {asText} from '@prismicio/helpers'

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
    id: inmueble.id,
    precio: inmueble.precio,
    area: inmueble.area,
    habitaciones: inmueble.habitaciones,
    baños: inmueble.banos,
    estacionamientos: inmueble.estacionamientos,
    descripcion: inmueble.descripcion,
    // Prop momentanea, hay que añadirla en Prismic
    tipo: "Apartamento",
    antiguedad: "5 años",
  };

  return (
    <Layout
      titulo={asText(inmueble.titulo)}
      descripcion={inmueble.descCorta}
    >
      <Container maxWidth="lg">
        <Box py={4}>
          <Grid container spacing={3} justifyContent="center" component="article">
            <HeaderSection
              titulo={inmueble.titulo}
              ubiaprox={inmueble.ubiaprox}
              precio={inmueble.precio}
            />
            <GallerySection imagenes={inmueble.imagenes} />
            <OverviewSection {...inmuebleInfo} />
            <ContactSection inmuebleId={inmueble.id} agent={inmueble.agent} />
            <SimilaresSection inmueblesSimilares={inmueblesSimilares} />
          </Grid>
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
