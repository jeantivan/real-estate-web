import { Layout } from "@/components";
import { Container, Typography } from "@mui/material";
import { UbicacionSection } from "@/layouts/contacto/ubicacion";
import { RedesSection } from "@/layouts/contacto/redes";
<<<<<<< HEAD

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    // [theme.breakpoints.up("sm")]: {
    //   padding: theme.spacing(4, 2),
    // },
  },
  titleContainer: {
    paddingTop: theme.spacing(2),
  },
  title: {
    ...theme.typography.body1,

    fontWeight: 800,
    textTransform: "uppercase",
  },
  bgDark: {
    backgroundColor: "#000",
    color: "white",
  },
  mainHeading: {
    ...theme.typography.h6,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  contactHeading: {
    ...theme.typography.h2,
    textAlign: "center",
    margin: 0,
    marginBottom: theme.spacing(2),
  },
  phoneNumber: {
    ...theme.typography.h3,
    fontWeight: "bold",
  },
  info: {
    backgroundColor: "white",
    color: "#000",
    height: "100%",
    padding: theme.spacing(3, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));
=======
import { FormularioSection } from "@/layouts/contacto/formulario";
import { NewsletterSection } from "@/layouts/contacto/newsletter";
>>>>>>> local

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
