import { Gallery } from "@/components/Gallery";
import { Box } from "@material-ui/core";
export function InmuebleGallery({ imagenes }) {
  return (
    <Box component="section" id="galeria-del-inmueble" mb={3}>
      <Gallery imagenes={imagenes} />
    </Box>
  );
}
