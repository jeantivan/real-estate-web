import { Layout, InmuebleItem } from "@/components";
import { getAllAgents, getAllInmueblesByAgent } from "@/lib/api";
import {
  Container,
  Typography,
  Grid,
  Divider,
  Box,
  Button,
} from "@mui/material";
import { WhatsApp, EmailOutlined } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

export default function AgentPage({ agent, inmuebles }) {
  const { name, picture, phonenumber, email, about } = agent;

  const inmuebleList = inmuebles.results.map(({ data, uid }, i) => {
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
    <Layout titulo={`Asesor: ${name}`} descripcion={about}>
      <Container sx={{ pt: { xs: "56px", sm: "64px" } }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2}
          pt={4}
          pb={2}
        >
          <Grid item md={2}>
            <Box
              sx={{
                width: "100%",
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "text.secondary",
              }}
            >
              <Image
                width={picture.dimensions.width}
                height={picture.dimensions.height}
                layout="responsive"
                src={picture.url}
                alt={picture.alt}
                style={{ overflow: "hidden" }}
              />
            </Box>
          </Grid>
          <Grid item md={10} container flexDirection="column">
            <Typography variant="h5" component="h1" mb={2} fontWeight={700}>
              Asesor(a): {name}
            </Typography>
            <Typography>{about}</Typography>
            <Grid container spacing={2} mt="auto">
              <Grid item xs={12} sm="auto">
                <Button
                  color="success"
                  variant="outlined"
                  startIcon={<WhatsApp />}
                  href="#"
                  title="Número Telefónico"
                >
                  {phonenumber}
                </Button>
              </Grid>
              <Grid item xs={12} sm="auto">
                <Button
                  color="info"
                  variant="outlined"
                  startIcon={<EmailOutlined />}
                  href="#"
                  title="Correo Electrónico"
                >
                  {email}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />

        <Grid container py={2} rowSpacing={4} columnSpacing={3}>
          {inmuebles.results.length < 1 ? (
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
            <>
              <Grid item xs={12}>
                <Typography variant="body1" component="h2">
                  Mostrando {inmuebles.results.length} inmuebles publicados por:{" "}
                  <strong>{name}</strong>
                </Typography>
              </Grid>
              {inmuebleList}
              <Grid item xs="auto">
                <Link href="/inmuebles/1" passHref>
                  <Button color="primary" variant="text">
                    Ver todos los inmuebles
                  </Button>
                </Link>
              </Grid>
            </>
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
