import { Layout } from "@/components";
import { styled } from "@mui/material/styles";
import {
  ContactSection,
  GallerySection,
  HeaderSection,
  OverviewSection,
  SimilaresSection,
} from "@/layouts/inmueble";

import {
  getAllInmueblesSlug,
  getInmueble,
  getInmueblesSimilares,
} from "@/lib/api";
import { Box, Container, Grid } from "@mui/material";
import { PrismicText } from "@prismicio/react";
import { asText } from "@prismicio/helpers";

const PREFIX = "[slug]";

const classes = {
  gallery: `${PREFIX}-gallery`,
  description: `${PREFIX}-description`,
  html: `${PREFIX}-html`,
  masInmuebles: `${PREFIX}-masInmuebles`,
};

const StyledLayout = styled(Layout)(({ theme }) => ({
  [`& .${classes.gallery}`]: {
    minWidth: "100%",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      minWidth: 0,
    },
  },

  [`& .${classes.description}`]: {
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

  [`& .${classes.html}`]: {
    "& > p": {
      ...theme.typography.body1,
      maxWidth: "100%",
    },
  },

  [`& .${classes.masInmuebles}`]: {
    padding: theme.spacing(2, 0),
    width: "100%",
  },
}));

export default function Inmueble({ inmueble, inmueblesSimilares }) {
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
    <StyledLayout
      titulo={asText(inmueble.titulo)}
      descripcion={inmueble.descCorta}
    >
      <Container maxWidth="lg" py={4}>
        <Grid container spacing={3} justifyContent="center" component="article">
          <HeaderSection
            titulo={inmueble.titulo}
            ubiaprox={inmueble.ubiaprox}
            precio={inmueble.precio}
          />
          <GallerySection imagenes={inmueble.imagenes} />
          <OverviewSection {...inmuebleInfo} />
          <ContactSection
            inmuebleId={inmueble.id}
            agent={inmueble.agent.data}
          />
          <SimilaresSection inmueblesSimilares={inmueblesSimilares} />
        </Grid>
      </Container>
    </StyledLayout>
  );
}

export async function getStaticPaths() {
  const response = await getAllInmueblesSlug();
  const paths = response.results.map(({ uid }) => ({ params: { slug: uid } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const inmueble = await getInmueble(params.slug);

  const { results: inmueblesSimilares } = await getInmueblesSimilares(
    inmueble.id
  );

  return {
    props: {
      inmueble,
      inmueblesSimilares,
    },
  };
}
