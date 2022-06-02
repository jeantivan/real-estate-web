import React from "react";
import { Gallery } from "@/components/Gallery";
import { Grid } from "@mui/material";

export function GallerySection({ imagenes }) {
  return (
    <Grid item xs={12}>
      <section id="galeria-del-inmueble">
        <Gallery imagenes={imagenes} />
      </section>
    </Grid>
  );
}
