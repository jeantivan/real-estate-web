import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import { InmuebleItem } from "@/components";

export function LatestInmuebles({ latestInmuebles }) {
  const results = latestInmuebles.map(({ data, uid }) => {
    let props = {
      slug: uid,
      ...data,
      titulo: data.titulo[0],
      priority: true,
    };

    return (
      <Grid key={uid} item xs={12} sm={6} md={3}>
        <InmuebleItem {...props} />
      </Grid>
    );
  });

  return (
    <Box py={6} component="section" id="ultimos-inmuebles">
      <Container maxWidth="xl">
        <Grid container mb={3}>
          <Grid item xs>
            <Typography variant="h5" component="h2">
              Últimos inmuebles publicados
            </Typography>
          </Grid>
          <Grid item>
            <Link href="/inmuebles/1" passHref>
              <Button variant="text" color="primary">
                Ver todos
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} container spacing={2}>
            {results}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
