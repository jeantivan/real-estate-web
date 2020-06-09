import { getInmueblesList } from "../lib/inmuebles";
import Layout from "../components/Layout";
import InmuebleItem from "../components/InmuebleItem";

import { Grid, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Inmuebles({ inmuebleList }) {
  const classes = useStyles();

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
      </Grid>

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
