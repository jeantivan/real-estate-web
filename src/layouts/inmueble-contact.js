import { Input } from "@/components/Input";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { WhatsApp } from "@material-ui/icons";
//import { Image } from "next/image";
import { useSnackbar } from "notistack";
import { Formik, Form } from "formik";
import { object, string } from "yup";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  message:
    "Hola, me interesa el inmueble. Me podrias contactar pronto, gracias",
};

const validationSchema = object({
  nombre: string().max(255, "Máximo 255 caracteres"),
  email: string().email("Email invalido.").required("Campo obligatorio"),
  mensaje: string()
    .max(255, "Máximo 255 caracteres")
    .required("Campo obligatorio"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  sectionTitle: {
    ...theme.typography.h6,
    fontWeight: 700,
  },
  image: {
    width: "100%",
    minHeight: 116,
    backgroundColor: theme.palette.text.secondary,
    borderRadius: theme.spacing(0.5),
  },
  agentInfo: {
    marginBottom: theme.spacing(2),
  },
  agentName: {
    ...theme.typography.h6,
    fontWeight: 700,
    lineHeight: 1,
  },
  textLight: {
    fontWeight: theme.typography.fontWeightLight,
  },
  content: {
    lineHeight: 1,
  },
}));

export function InmuebleContact({ inmuebleId, agent }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Grid item xs={12} md={3}>
      <Paper
        component="section"
        id="inmueble-contact"
        className={classes.root}
        elevation={0}
      >
        <Grid container spacing={1} className={classes.agentInfo}>
          <Grid item xs={4}>
            {/* <Image
              src={agent.data.picture.url}
              alt={agent.data.picture.alt}
              height={agent.data.picture.dimensions.height}
              layout="fill"
            /> */}
            <div className={classes.image} />
          </Grid>
          <Grid
            item
            xs={8}
            container
            direction="column"
            justify="space-between"
            wrap="nowrap"
          >
            <Grid item>
              <Typography component="h3" className={classes.agentName}>
                {agent.data.name}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Asesor inmobiliario
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" className={classes.textLight}>
                Telefono:
              </Typography>
              <Typography variant="body2" className={classes.content}>
                {agent.data.phonenumber}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" className={classes.textLight}>
                Email:
              </Typography>
              <Typography variant="body2" className={classes.content}>
                {agent.data.email}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            resetForm();
            setTimeout(() => {
              console.log({ ...values, inmuebleId });
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
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography>Contáctanos</Typography>
                </Grid>
                <Grid item>
                  <Input name="name" label="Nombre" variant="outlined" />
                </Grid>
                <Grid item>
                  <Input
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <Input name="phone" label="Telefono" variant="outlined" />
                </Grid>
                <Grid item>
                  <Input
                    name="message"
                    label="Mensaje"
                    multiline
                    rows={6}
                    rowsMax={10}
                    variant="outlined"
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
                    Contactar
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button color="primary" endIcon={<WhatsApp />} fullWidth>
                    Whatsapp
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}
