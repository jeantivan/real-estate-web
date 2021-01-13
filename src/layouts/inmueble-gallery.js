import { Gallery } from "@/components/Gallery";
import { Grid } from "@material-ui/core";

export function InmuebleGallery({ imagenes }) {
  return (
    <Grid item xs={12} md={10}>
      <section id="galeria-del-inmueble">
        <Gallery imagenes={imagenes} />
      </section>
    </Grid>
  );
}
