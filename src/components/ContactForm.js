import { Button, Typography, Grid } from "@mui/material";
import { useSnackbar } from "notistack";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { Input } from "./Input";

const initialValues = {
  nombre: "",
  email: "",
  mensaje: "",
};

const validationSchema = object({
  nombre: string().max(255, "Máximo 255 caracteres"),
  email: string().email("Email invalido.").required("Campo obligatorio"),
  mensaje: string()
    .max(255, "Máximo 255 caracteres")
    .required("Campo obligatorio"),
});

export function ContactForm() {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Grid container spacing={2} direction="column">
      <Grid item xs={12}>
        <Typography component="div">
          Puedes contactar directamente con nosotros a traves del siguiente
          formulario.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(_, { setSubmitting, resetForm }) => {
            resetForm();
            setTimeout(() => {
              enqueueSnackbar(
                <Typography>
                  Mensaje enviado con éxito. <br />
                  Gracias por contactarnos
                </Typography>,
                {
                  variant: "success",
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                }
              );
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form onSubmit={submitForm}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Input
                    name="nombre"
                    label="Nombre"
                    type="text"
                    variant="filled"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input
                    name="email"
                    label="Correo electronico"
                    type="email"
                    variant="filled"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    name="mensaje"
                    label="Mensaje"
                    multiline
                    rows={6}
                    // rowsMax={10}
                    variant="filled"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    disabled={isSubmitting}
                    onClick={submitForm}
                    color="primary"
                    variant="contained"
                    disableElevation
                    fullWidth
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}
