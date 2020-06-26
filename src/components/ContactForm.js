import { Button, Typography, Paper, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "./TextField";

const initialValues = {
  nombre: "",
  email: "",
  mensaje: "",
};

const validationSchema = Yup.object({
  nombre: Yup.string().required(
    "Campo obligatorio. Por favor escribe tu nombre"
  ),
  email: Yup.string().email("Email invalido.").required("Campo obligatorio"),
  mensaje: Yup.string()
    .max(255, "Mensaje muy largo, maximo 255 caracteres")
    .required("Campo obligatorio"),
});

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2, 3),
  },
  submit: {
    marginTop: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <Paper className={classes.container} elevation={2}>
      <Typography variant="h6" component="h2">
        Llena el siguiente formulario.
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(_, { setSubmitting, resetForm }) => {
          resetForm();
          setTimeout(() => {
            setOpen(true);
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <TextField
              autoFocus
              name="nombre"
              label="Nombre"
              type="text"
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              name="email"
              label="Correo electronico"
              type="email"
              margin="normal"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              name="mensaje"
              label="Mensaje"
              multiline
              rows={6}
              rowsMax={6}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <div className={classes.submit}>
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
            </div>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert elevation={6} variant="filled" severity="success">
          Mensaje enviado con éxito. Gracias por contactarnos
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default ContactForm;
