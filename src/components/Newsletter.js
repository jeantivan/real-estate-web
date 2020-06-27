import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import { Formik, Form } from "formik";
import { string, object } from "yup";
import TextField from "./TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  container: {
    margin: theme.spacing(2, 0),
    display: "flex",
    alignItems: "stretch",
    width: "100%",
  },
  button: {
    maxHeight: 40,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  input: {
    "& .MuiOutlinedInput-root": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      "& fieldset": {
        borderRight: 0,
      },
    },
  },
}));

const validationSchema = object({
  email: string().email("Email invalido.").required("Campo obligatorio."),
});

const Newsletter = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (_, { resetForm }) => {
    resetForm();
    enqueueSnackbar("Gracias por suscribirte. Por favor confirma tu email.", {
      variant: "success",
      anchorOrigin: {
        autoHideDuration: 3000,
        vertical: "top",
        horizontal: "center",
      },
      preventDuplicate: true,
    });
  };

  return (
    <Grid container justify="flex-end" className={classes.root}>
      <Grid item xs={12} md={5}>
        <Typography variant="h6">
          Recibe notificaciones cuando publiquemos un nuevo inmueble.
        </Typography>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={classes.container}>
            <TextField
              type="email"
              size="small"
              variant="outlined"
              name="email"
              label="Email"
              placeholder="pabloperez@ejemplo.com"
              className={classes.input}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disableElevation
              className={classes.button}
            >
              Suscribirse
            </Button>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default Newsletter;
