import { Grid, Button, Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

import { InmuebleItem } from "@/components";

const useStyles = makeStyles({
  grow: {
    flex: 1,
  },
  paper: {
    width: "100%",
    padding: 32,
  },
});

export function SimilaresSection({ inmueblesSimilares }) {
  const classes = useStyles();

  const results = inmueblesSimilares.map(({ data, uid }, index) => {
    let props = {
      slug: uid,
      area: data.area,
      titulo: data.titulo[0],
      mainImg: data.mainimg,
      precio: data.precio,
      estado: data.estado,
      ubiAprox: data.ubiaprox,
      habitaciones: data.habitaciones,
      estado: data.estado,
      fecha: data.fecha,
      agent: data.agent.data,
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
    <Grid item xs={12} md={10}>
      <section id="inmueble-similares">
        <Grid container spacing={2} component="section">
          <Grid item className={classes.grow}>
            <Typography variant="h5">Inmueble Similares</Typography>
          </Grid>
          <Grid item>
            <Link href="/inmuebles" passHref>
              <Button color="primary">Ver todos</Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="space-between">
          {results}
        </Grid>
      </section>
    </Grid>
  );
}
