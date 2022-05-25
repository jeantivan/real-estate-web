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
  nombre: "",
  telefono: "",
  email: "",
  mensaje:
    "Hola, me interesa el inmueble. Me podrías contactar pronto, gracias",
};

const validationSchema = object({
  nombre: string()
    .max(255, "Máximo 255 caracteres")
    .required("Campo obligatorio"),
  email: string().email("Email invalido.").required("Campo obligatorio"),
  telefono: string()
    .min(10, "Formato Incorrecto")
    .max(15, "Formato Incorrecto")
    .required("Campo obligatorio"),
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
            background: "#37474f",
            borderTopWidth: { xs: 4, sm: 6, md: 4 },
            borderTopStyle: "solid",
            borderColor: "primary.main",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
            padding: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              container
              justifyContent="flex-end"
              xs={10}
              sm={4}
              md={10}
            >
              <Box
                sx={(theme) => ({
                  width: "100%",
                  borderRadius: 2,
                  background: theme.palette.grey[900],
                })}
              >
                <Image
                  src={agent.picture.url}
                  alt={agent.picture.alt}
                  layout="responsive"
                  width={agent.picture.dimensions.width}
                  height={agent.picture.dimensions.height}
                  priority={false}
                  style={{ borderRadius: "4px" }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={12}
              container
              spacing={1}
              alignContent="flex-end"
            >
              <Grid item xs={12}>
                <Typography
                  component="h3"
                  sx={(theme) => ({
                    ...theme.typography.h5,
                    fontWeight: 700,
                    lineHeight: 1,
                    color: theme.palette.getContrastText("#24324a"),
                  })}
                >
                  {agent.name}
                </Typography>
                <Typography variant="caption" color="rgba(255,255,255,0.6)">
                  Asesor(a) inmobiliario
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={12}>
                <Typography variant="caption" fontWeight="300" color="white">
                  Telefono:
                </Typography>
                <Typography variant="body2" color="white" fontWeight="500">
                  {agent.phonenumber}
                </Typography>
              </Grid>
              <Grid item xs={12} sm="auto" md={12}>
                <Typography variant="caption" fontWeight="300" color="white">
                  Email:
                </Typography>
                <Typography variant="body2" color="white" fontWeight="500">
                  {agent.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box p={2}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
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
            <Form>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography>Contáctanos</Typography>
                </Grid>
                <Grid item>
                  <Input
                    name="nombre"
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <Input
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <Input
                    name="telefono"
                    label="Telefono"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <Input
                    name="mensaje"
                    label="Mensaje"
                    multiline
                    minRows={4}
                    maxRows={10}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
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
          </Formik>
        </Box>
      </Paper>
    </StyledGrid>
  );
}
