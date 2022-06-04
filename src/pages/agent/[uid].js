import { Layout, InmuebleItem } from "@/components";
import { getAllAgents, getAllInmueblesByAgent } from "@/lib/api";
import {
  Container,
  Typography,
  Grid,
  Pagination,
  PaginationItem,
  Divider,
} from "@mui/material";
import Link from "next/link";

export default function AgentPage({ agent, inmuebles }) {
  const { results } = inmuebles;

  const inmuebleList = results.map(({ data, uid }, i) => {
    let props = {
      slug: uid,
      ...data,
      titulo: data.titulo[0],
      priority: i <= 2,
    };

    return (
      <Grid key={uid} item xs={12} sm={6} md={4}>
        {<InmuebleItem {...props} />}
      </Grid>
    );
  });

  return (
    <Layout
      titulo="Inmuebles"
      descripcion="Cras rutrum, ligula id varius consequat, nunc leo tincidunt massa, eu ornare neque ipsum vitae dui. Etiam arcu mauris, rhoncus vel nibh id, auctor porttitor leo. Phasellus eu lectus lorem. Curabitur consequat porta lacus interdum placerat. Nullam urna ligula, dignissim non enim eu, fermentum porta nulla. Etiam ut feugiat felis. In a odio ut erat efficitur vehicula. Proin vestibulum neque est, sit amet varius libero finibus et. Nullam magna justo, volutpat eget lacinia vel, fringilla non ligula. Nam sagittis justo ac ornare condimentum. Donec eros eros, bibendum quis velit nec, tincidunt gravida nisi."
    >
      <Container sx={{ pt: { xs: "56px", sm: "64px" } }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-end"
          pt={4}
          pb={2}
        >
          <Grid item>
            <Typography variant="h2" component="h1">
              Inmuebles
            </Typography>
          </Grid>
        </Grid>
        <Divider />

        <Grid container py={4} rowSpacing={4} columnSpacing={3}>
          {results.length < 1 ? (
            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="div"
                align="center"
                gutterBottom
              >
                No hay propiedades para mostrar.
              </Typography>
              <Link href="/inmuebles/1" passHref>
                <Link
                  display="block"
                  variant="h6"
                  align="center"
                  color="primary"
                  underline="hover"
                >
                  Ver todos los inmuebles.
                </Link>
              </Link>
            </Grid>
          ) : (
            inmuebleList
          )}
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await getAllAgents();

  const paths = response.results.map(({ uid }) => ({ params: { uid } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = await getAllInmueblesByAgent(params.uid);

  return {
    props: {
      ...page,
    },
  };
}
