import { Layout } from "@/components";
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
import { Container, Grid } from "@mui/material";
import { asText } from "@prismicio/helpers";

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
    <Layout titulo={asText(inmueble.titulo)} descripcion={inmueble.descCorta}>
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
    </Layout>
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
