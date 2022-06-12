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
import { Container, Grid, Box } from "@mui/material";
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
      <Box bgcolor="#f5f5f5">
        <Container sx={{ pt: { xs: "56px", sm: "64px" } }}>
          <Grid container rowSpacing={2} columnSpacing={3}>
            <HeaderSection titulo={titulo} ubiaprox={ubiaprox} />
            <Grid item xs={12} md={9} container rowSpacing={2}>
              <GallerySection imagenes={imagenes} />
              <OverviewSection {...inmuebleInfo} />
            </Grid>

            <ContactSection inmuebleId={id} agent={agent.data} />
            <SimilaresSection inmueblesSimilares={inmueblesSimilares} />
          </Grid>
        </Container>
      </Box>
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
