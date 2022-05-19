import { Layout } from "@/components";
import { Container, Typography } from "@mui/material";
import { UbicacionSection } from "@/layouts/contacto/ubicacion";
import { RedesSection } from "@/layouts/contacto/redes";

import { FormularioSection } from "@/layouts/contacto/formulario";
import { NewsletterSection } from "@/layouts/contacto/newsletter";

export default function Contacto() {
  return (
    <Layout
      titulo="Contacto"
      descripcion="Praesent euismod massa quis iaculis feugiat. Aliquam in pellentesque purus. Cras sit amet risus ut dui accumsan blandit non pellentesque augue. Mauris nisi quam, venenatis nec rutrum sit amet, accumsan sed dolor. Fusce lobortis, erat quis mollis vulputate, lacus tellus venenatis sem, non tempor nisi quam et nisl. Vivamus sollicitudin, nisi a mollis consequat, sapien sem placerat nibh, at convallis nunc tortor in nisl. Praesent lorem sem, malesuada nec sagittis quis, accumsan vel ante. Curabitur elementum augue id tempor posuere."
    >
      <Container
        sx={{
          pt: 2,
        }}
      >
        <Typography
          component="h1"
          sx={(theme) => ({
            ...theme.typography.body1,
            fontWeight: 800,
            textTransform: "uppercase",
          })}
        >
          Contacto
        </Typography>
      </Container>
      <UbicacionSection />
      <RedesSection />
      <NewsletterSection />
      <FormularioSection />
    </Layout>
  );
}
