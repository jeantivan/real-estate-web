import {
  IconButton,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Typography,
  Divider,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import TextField from "../TextField";

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
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2, 3),
  },
  agent: {
    width: "100%",
    minHeight: 100,
    background: theme.palette.primary[900],
    padding: theme.spacing(2, 3),
    color: theme.palette.getContrastText(theme.palette.primary[900]),

    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  agentInfo: {
    marginTop: theme.spacing(2),
    textAlign: "center",

    [theme.breakpoints.up("sm")]: {
      marginTop: 0,
      textAlign: "left",
    },
  },
  profile: {
    display: "block",
    width: 120,
    height: 120,
    backgroundColor: "white",
    margin: "0 auto",
    border: "2px solid white",
    borderRadius: "100%",
    [theme.breakpoints.up("sm")]: {
      margin: 0,
      marginRight: theme.spacing(3),
    },
  },
  name: {
    fontWeight: 500,
  },

  contact: {
    width: "100%",
    marginTop: theme.spacing(1),
    "&:nth-child(1)": {
      marginRight: theme.spacing(1),
    },
  },
  icon: {
    marginRight: theme.spacing(0.5),
  },
  caption: {
    textTransform: "uppercase",
  },
}));

const Contact = ({ open, handleClose, agent }) => {
  const classes = useStyles();
  const { name, email, phonenumber, picture } = agent;
  return (
    <div>
      <Dialog
        open={open}
        scroll="body"
        onClose={() => handleClose(false)}
        aria-labelledby="informacion-contacto-inmueble"
      >
        <div id="informacion-contacto-inmueble" className={classes.container}>
          <Typography variant="h5">Información de contacto</Typography>
          <IconButton aria-label="Cerrar información" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        </div>
        <Divider />
        <DialogContent>
          <DialogContentText>Agente encargado del inmueble.</DialogContentText>
        </DialogContent>
        <div className={classes.agent}>
          <img src={picture.url} alt={name} className={classes.profile} />
          <div className={classes.agentInfo}>
            <Typography variant="h5" className={classes.name}>
              {name}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              Agente Inmobiliario.
            </Typography>

            <div className={classes.contact}>
              <Typography variant="caption" component="div">
                <span role="img" aria-label="Phone" className={classes.icon}>
                  <FontAwesomeIcon icon={faPhone} />
                </span>{" "}
                {phonenumber}
              </Typography>{" "}
              <Typography variant="caption" component="div">
                <span role="img" aria-label="Mail" className={classes.icon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>{" "}
                {email}
              </Typography>
            </div>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(_, { setSubmitting, resetForm }) => {
            resetForm();
            setSubmitting(false);

            handleClose(true);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <DialogContent>
                <DialogContentText>
                  ¿Quieres que te contactemos nosotros? Llena el siguiente
                  formulario
                </DialogContentText>
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
              </DialogContent>
              <div className={classes.container}>
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
      </Dialog>
    </div>
  );
};

export default Contact;
