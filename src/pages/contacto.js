import { Layout, ContactForm } from "../components";

import { Typography, Grid } from "@material-ui/core";

export default function Contacto() {
  return (
    <Layout
      titulo="Contacto"
      descripcion="Praesent euismod massa quis iaculis feugiat. Aliquam in pellentesque purus. Cras sit amet risus ut dui accumsan blandit non pellentesque augue. Mauris nisi quam, venenatis nec rutrum sit amet, accumsan sed dolor. Fusce lobortis, erat quis mollis vulputate, lacus tellus venenatis sem, non tempor nisi quam et nisl. Vivamus sollicitudin, nisi a mollis consequat, sapien sem placerat nibh, at convallis nunc tortor in nisl. Praesent lorem sem, malesuada nec sagittis quis, accumsan vel ante. Curabitur elementum augue id tempor posuere."
    >
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
