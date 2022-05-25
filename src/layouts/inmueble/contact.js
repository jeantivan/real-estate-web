import { Input } from "@/components/Input";
import { styled } from "@mui/material/styles";
import { Typography, Grid, Paper, Button } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import Image from "next/image";
import { useSnackbar } from "notistack";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { Box } from "@mui/system";

const PREFIX = "contact";

const classes = {
  root: `${PREFIX}-root`,
  sectionTitle: `${PREFIX}-sectionTitle`,
  image: `${PREFIX}-image`,
  agentInfo: `${PREFIX}-agentInfo`,
  agentName: `${PREFIX}-agentName`,
  textLight: `${PREFIX}-textLight`,
  content: `${PREFIX}-content`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.root}`]: {},

  [`& .${classes.sectionTitle}`]: {
    ...theme.typography.h6,
    fontWeight: 700,
  },

  [`& .${classes.image}`]: {
    width: "100%",
    minHeight: 116,
    backgroundColor: theme.palette.text.secondary,
    borderRadius: theme.spacing(0.5),
  },

  [`& .${classes.agentInfo}`]: {
    marginBottom: theme.spacing(2),
  },

  [`& .${classes.agentName}`]: {
    ...theme.typography.h6,
    fontWeight: 700,
    lineHeight: 1,
  },

  [`& .${classes.textLight}`]: {
    fontWeight: theme.typography.fontWeightLight,
  },

  [`& .${classes.content}`]: {
    lineHeight: 1,
  },
}));

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

export function ContactSection({ inmuebleId, agent }) {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <StyledGrid item xs={12} md={3}>
      <Paper
        component="section"
        id="inmueble-contact"
        className={classes.root}
        elevation={0}
      >
        <Box
          sx={{
            background: "#24324a",
            borderTopWidth: 1,
            borderTopStyle: "solid",
            borderColor: "primary.main",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
            padding: 2,
          }}
        >
          <Grid container className={classes.agentInfo}>
            <Grid item container justifyContent="flex-end">
              <Box
                sx={{
                  p: 2,
                  minHeight: 160,
                  width: 160,
                  borderRadius: 1,
                  position: "relative",
                }}
              >
                <Image
                  src={agent.picture.url}
                  alt={agent.picture.alt}
                  height={agent.picture.dimensions.height}
                  layout="fill"
                  style={{ borderRadius: "inherit" }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              container
              direction="column"
              justifyContent="space-between"
              wrap="nowrap"
            >
              <Grid item>
                <Typography component="h3" className={classes.agentName}>
                  {agent.name}
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
                  {agent.phonenumber}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" className={classes.textLight}>
                  Email:
                </Typography>
                <Typography variant="body2" className={classes.content}>
                  {agent.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
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
                    maxRows={10}
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
    </StyledGrid>
  );
}
