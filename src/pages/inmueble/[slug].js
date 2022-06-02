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
  const { id, titulo, desccorta, ubiaprox, imagenes, agent, ...rest } =
    inmueble;

  const inmuebleInfo = {
    ...rest,
    id,
  };

  return (
    <Layout titulo={asText(titulo)} descripcion={desccorta}>
      <Container maxWidth="md" py={4}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={3}
          justifyContent="center"
        >
          <HeaderSection titulo={titulo} ubiaprox={ubiaprox} />
          <GallerySection imagenes={imagenes} />
          <OverviewSection {...inmuebleInfo} />
          <ContactSection inmuebleId={id} agent={agent.data} />
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

  const { results } = await getInmueblesSimilares(inmueble.id);

  return {
    props: {
      inmueble,
      inmueblesSimilares: results || [],
    },
  };
}
