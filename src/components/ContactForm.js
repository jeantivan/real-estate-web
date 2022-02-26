import { Button, Typography, Paper, Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
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

const useStyles = makeStyles((theme) => ({
  title: {
    ...theme.typography.h6,
    fontWeight: 500,
    color: theme.palette.grey[500],
  },
  container: {
    padding: theme.spacing(2, 3),
  },
  textField: {
    color: "#fff",
    "& .MuiFormLabel-root": {
      color: "rgba(255, 255, 255, 0.7);",
    },
    "& .MuiFilledInput-root": {
      color: "#fff",
      backgroundColor: "rgba(255, 255, 255, 0.09)",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.13)",
      },
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: "1px solid rgba(255, 255, 255, 0.7);",
    },
  },
}));

export function ContactForm() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Grid container spacing={2} direction="column">
      <Grid item xs={12}>
        <Typography component="div" className={classes.theme}>
          Dejanos un mensaje.
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
                "Mensaje enviado con éxito. Gracias por contactarnos.",
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
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input
                    name="email"
                    label="Correo electronico"
                    type="email"
                    variant="filled"
                    fullWidth
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    name="mensaje"
                    label="Mensaje"
                    multiline
                    rows={6}
                    rowsMax={10}
                    variant="filled"
                    fullWidth
                    className={classes.textField}
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
