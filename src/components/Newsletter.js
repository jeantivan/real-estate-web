<<<<<<< Updated upstream
import { IconButton, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  news: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textField: {
    marginRight: theme.spacing(2),
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
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    color: "#8a99b3",
    width: 48,
    height: 48,
    borderRadius: "100%",
    transition: theme.transitions.create(["color", "backgroundColor"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    "&:hover": {
      color: "white",
      backgroundColor: "rgba(255, 255, 255, 0.13)",
    },
  },
}));

const Newsletter = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = React.useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enqueueSnackbar("Gracias por suscribirte. Por favor confirma tu correo.", {
      variant: "success",
      anchorOrigin: {
        autoHideDuration: 3000,
        vertical: "top",
        horizontal: "center",
      },
      preventDuplicate: true,
    });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.news}>
      <TextField
        className={classes.textField}
        name="email-newsletter"
        label="Email"
        variant="filled"
        size="small"
        value={email}
        onChange={handleChange}
        required
        type="email"
      />
      <IconButton
        type="submit"
        className={classes.button}
        aria-label="subscribirse"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </IconButton>
    </form>
  );
};

export default Newsletter;
=======
import { IconButton, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  news: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textField: {
    marginRight: theme.spacing(2),
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
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    color: "#8a99b3",
    width: 48,
    height: 48,
    borderRadius: "100%",
    transition: theme.transitions.create(["color", "backgroundColor"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    "&:hover": {
      color: "white",
      backgroundColor: "rgba(255, 255, 255, 0.13)",
    },
  },
}));

const Newsletter = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = React.useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enqueueSnackbar("Gracias por suscribirte. Por favor confirma tu correo.", {
      variant: "success",
      anchorOrigin: {
        autoHideDuration: 3000,
        vertical: "top",
        horizontal: "center",
      },
      preventDuplicate: true,
    });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.news}>
      <TextField
        className={classes.textField}
        name="email-newsletter"
        label="Email"
        variant="filled"
        size="small"
        value={email}
        onChange={handleChange}
        required
        type="email"
      />
      <IconButton
        type="submit"
        className={classes.button}
        aria-label="subscribirse"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </IconButton>
    </form>
  );
};

export default Newsletter;
>>>>>>> Stashed changes
