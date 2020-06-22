import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

import { Typography, Grid } from "@material-ui/core";

export default function Contacto() {
  return (
    <Layout titulo="Contacto">
      <Typography variant="h2" component="h1">
        Contacto
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>
            Obcaecati repellendus blanditiis tenetur facilis nam architecto iure
            aspernatur perferendis temporibus id ex, neque rem voluptate quis
            tempora esse earum alias voluptates.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Layout>
  );
}
