import { Layout } from "@/components";
import { Container, Divider, Typography } from "@mui/material";
import { UbicacionSection } from "@/layouts/contacto/ubicacion";
import { RedesSection } from "@/layouts/contacto/redes";

import { FormularioSection } from "@/layouts/contacto/formulario";
import { NewsletterSection } from "@/layouts/contacto/newsletter";
import { Box } from "@mui/system";

export default function Contacto() {
  return (
    <Layout
      titulo="Contacto"
      descripcion="Praesent euismod massa quis iaculis feugiat. Aliquam in pellentesque purus. Cras sit amet risus ut dui accumsan blandit non pellentesque augue. Mauris nisi quam, venenatis nec rutrum sit amet, accumsan sed dolor. Fusce lobortis, erat quis mollis vulputate, lacus tellus venenatis sem, non tempor nisi quam et nisl. Vivamus sollicitudin, nisi a mollis consequat, sapien sem placerat nibh, at convallis nunc tortor in nisl. Praesent lorem sem, malesuada nec sagittis quis, accumsan vel ante. Curabitur elementum augue id tempor posuere."
    >
      <Box backgroundColor="white">
        <Container
          sx={{
            py: 4,
          }}
        >
          <Box mb={2}>
            <Typography
              component="h1"
              sx={(theme) => ({
                ...theme.typography.h6,
                fontWeight: "bold",
                mb: 1,
              })}
            >
              Contacto
            </Typography>
            <Typography variant="body1">
              Puedes contactarnos a traves de los siguientes numeros telefonicos
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h5,
                fontWeight: 500,
                textTransform: "uppercase",
              })}
            >
              <strong>0212 123 45 - 67</strong>
              <Divider textAlign="left" text="none" my={2}>
                o
              </Divider>
              <strong>0424 123 45 - 67</strong>
            </Typography>
          </Box>
        </Container>
      </Box>
      <UbicacionSection />
      <RedesSection />
      <NewsletterSection />
      <FormularioSection />
    </Layout>
  );
}
