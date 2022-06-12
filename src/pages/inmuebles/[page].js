import { Layout, InmuebleItem } from "@/components";
import { getAllInmueblesPages, getInmueblesByPage } from "@/lib/api";
import {
  Container,
  Typography,
  Grid,
  Pagination,
  PaginationItem,
  Divider,
} from "@mui/material";
import Link from "next/link";

export default function Inmuebles({ pageData }) {
  const { page, total_pages, results } = pageData;

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
      currentPage={"Inmuebles"}
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
              Inmuebles publicados.
            </Typography>
          </Grid>
        </Grid>
        <Divider />

        <Grid container pt={4} rowSpacing={4} columnSpacing={3}>
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
              <Link href="/inmuebles" passHref>
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
            <>
              <Grid item xs={12}>
                <Typography variant="body1">
                  Mostrando {results.length} inmuebles disponibles
                </Typography>
              </Grid>
              {inmuebleList}
            </>
          )}
        </Grid>
        <Grid container justifyContent="center" py={4}>
          <Pagination
            page={page}
            count={total_pages}
            color="primary"
            renderItem={(item) => (
              <Link
                href="/inmuebles/[page]"
                as={`/inmuebles/${item.page}`}
                passHref
              >
                <PaginationItem {...item} />
              </Link>
            )}
          />
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  let paths = [];

  const { total_pages } = await getAllInmueblesPages();

  for (let i = 0; i < total_pages; i++) {
    let page = `${i + 1}`;
    paths[i] = { params: { page } };
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = await getInmueblesByPage(params.page);

  return {
    props: {
      pageData: page,
    },
  };
}
