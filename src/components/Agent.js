import NextLink from "next/link";

import { Paper, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(3, 2),
    display: "flex",
    flexDirection: "column",
  },
  picture: {
    margin: "0 auto",
    //marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "50%",
    width: 160,
    height: 160,
  },
  contact: {
    textAlign: "center",
    margin: theme.spacing(2, 0),
  },
  icon: {
    marginRight: theme.spacing(0.5),
    color: theme.palette.primary.dark,
  },
  link: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
}));

const Agent = ({ name, phonenumber, email, picture, id }) => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.root} component="article">
      <LazyLoadImage src={picture.url} alt={name} className={classes.picture} />
      <div className={classes.contact}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="overline" gutterBottom>
          Agente Inmobiliario.
        </Typography>
        <Typography variant="body2" component="div">
          <span role="img" aria-label="Phone" className={classes.icon}>
            <FontAwesomeIcon icon={faPhone} />
          </span>{" "}
          {phonenumber}
        </Typography>{" "}
        <Typography variant="body2" component="div">
          <span role="img" aria-label="Mail" className={classes.icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>{" "}
          {email}
        </Typography>
      </div>
      <div className={classes.link}>
        <NextLink
          href={{ pathname: "/inmuebles", query: { agent: id } }}
          passHref
        >
          <Button variant="contained" disableElevation color="secondary">
            Inmuebles publicados
          </Button>
        </NextLink>
      </div>
    </Paper>
  );
};

export default Agent;
