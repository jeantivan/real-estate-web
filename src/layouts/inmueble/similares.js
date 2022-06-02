import React from "react";
import { Grid, Button, Typography, Hidden } from "@mui/material";
import Link from "next/link";

import { InmuebleItem } from "@/components";

export function SimilaresSection({ inmueblesSimilares }) {
  const results = inmueblesSimilares.map(({ data, uid }, index) => {
    let props = {
      slug: uid,
      ...data,
      titulo: data.titulo[0],
    };

    return index !== inmueblesSimilares.length - 1 ? (
      <Grid key={uid} item xs={12} sm={6} md={4}>
        {<InmuebleItem {...props} />}
      </Grid>
    ) : (
      <Hidden mdUp key={uid}>
        <Grid item xs={12} sm={6} md={4}>
          {<InmuebleItem {...props} />}
        </Grid>
      </Hidden>
    );
  });
  return (
    <Grid item component="section" id="inmueble-similares" xs={12} pb={4}>
      {inmueblesSimilares.length < 1 ? (
        <Link href="/inmuebles/1" passHref>
          <Button color="primary">Ver todos los inmuebles publicados</Button>
        </Link>
      ) : (
        <>
          <Grid container spacing={2} py={2} justifyContent="space-between">
            <Grid item flex={1}>
              <Typography variant="h5">Inmuebles Similares</Typography>
            </Grid>
            <Grid item>
              <Link href="/inmuebles/1" passHref>
                <Button color="primary">Ver todos</Button>
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="space-between">
            {results}
          </Grid>
        </>
      )}
    </Grid>
  );
}
