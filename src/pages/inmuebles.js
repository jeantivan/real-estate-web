import { useState } from "react";
import Layout from "../components/Layout";
import {
  Grid,
  Typography,
  Button,
  Divider,
  Collapse,
} from "@material-ui/core/";
import { getInmueblesList } from "../lib/inmuebles";

import InmuebleItem from "../components/InmuebleItem";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Inmuebles({ inmuebleList }) {
  const classes = useStyles();

  const [showFilters, setShowFilters] = useState(false);

  const handleToggle = () => {
    setShowFilters((toggle) => !toggle);
  };

  return (
    <Layout title="Inmuebles">
      <Grid
        container
        justify="space-between"
        alignItems="flex-end"
        className={classes.container}
      >
        <Grid item>
          <Typography variant="h2" component="h1">
            Inmuebles
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={handleToggle}>
            Filtros
          </Button>
        </Grid>
      </Grid>
      <Divider />
      <Collapse in={showFilters} className={classes.container}>
        <Grid container justify="space-between">
          <Grid item>
            <Button>Filtro 1</Button>
          </Grid>
          <Grid item>
            <Button>Filtro 2</Button>
          </Grid>
          <Grid item>
            <Button>Filtro 3</Button>
          </Grid>
          <Grid item>
            <Button>Filtro 4</Button>
          </Grid>
        </Grid>
      </Collapse>

      <Grid container spacing={2}>
        {inmuebleList.map((inmueble) => (
          <Grid key={inmueble.slug} item xs={12} sm={6} md={4} lg={3}>
            <InmuebleItem {...inmueble} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export async function getStaticProps() {
  const inmuebleList = getInmueblesList();
  return {
    props: {
      inmuebleList,
    },
  };
}
