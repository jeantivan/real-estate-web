import Layout from "../components/Layout";
import { Grid, Typography } from "@material-ui/core/";
import { getInmueblesList } from "../lib/inmuebles";

import InmuebleItem from "../components/InmuebleItem";

export default function Inmuebles({ inmuebleList }) {
  return (
    <Layout title="Imuebles">
      <Typography variant="h1" component="h1">
        Inmuebles
      </Typography>
      <Grid container spacing={2}>
        {inmuebleList.map((inmueble) => (
          <Grid key={inmueble.slug} item xs={12} md={3}>
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
