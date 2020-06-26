import { Button, TextField, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  return (
    <Paper className={classes.container}>
      <Typography variant="h6" component="h2">
        Llena el siguiente formulario.
      </Typography>
      <TextField
        autoFocus
        id="nombre"
        label="Nombre"
        type="text"
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
      />
      <TextField
        id="email"
        label="Correo electronico"
        type="email"
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
      />
      <TextField
        id="mensaje"
        label="Mensaje"
        type="text"
        multiline
        rows={6}
        rowsMax={6}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <div className={classes.submit}>
        <Button color="primary" variant="contained" disableElevation fullWidth>
          Enviar
        </Button>
      </div>
    </Paper>
  );
};

export default ContactForm;
