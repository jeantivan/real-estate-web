import { Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Mail, PhoneAndroid } from "@mui/icons-material";
import Image from "next/image";
import NextLink from "next/link";

const PREFIX = "Agent";

const classes = {
  root: `${PREFIX}-root`,
  imgContainer: `${PREFIX}-imgContainer`,
  picture: `${PREFIX}-picture`,
  body: `${PREFIX}-body`,
  contact: `${PREFIX}-contact`,
  icon: `${PREFIX}-icon`,
  link: `${PREFIX}-link`,
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: "100%",
    padding: theme.spacing(3, 2),
    display: "flex",
    flexDirection: "column",
  },

  [`& .${classes.imgContainer}`]: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  [`& .${classes.picture}`]: {
    margin: "0 auto",
    //marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "50%",
    width: 160,
    height: 160,
  },

  [`& .${classes.body}`]: {
    textAlign: "center",
    margin: theme.spacing(2, 0),
  },

  [`& .${classes.contact}`]: {
    display: "inline-flex",
    alignItems: "center",
  },

  [`& .${classes.icon}`]: {
    display: "inline-flex",
    marginRight: theme.spacing(0.5),
    color: theme.palette.primary.dark,
  },

  [`& .${classes.link}`]: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
}));

export function Agent({ name, phonenumber, email, picture, id }) {
  return (
    <StyledPaper
      variant="outlined"
      className={classes.root}
      component="article"
    >
      <div className={classes.imgContainer}>
        <Image
          width={picture.dimensions.width}
          height={picture.dimensions.height}
          src={picture.url}
          alt={name}
          className={classes.picture}
        />
      </div>
      <div className={classes.body}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="overline" gutterBottom>
          Agente Inmobiliario.
        </Typography>
        <Typography variant="body2" component="div" className={classes.contact}>
          <span role="img" aria-label="Phone" className={classes.icon}>
            <PhoneAndroid fontSize="small" />
          </span>{" "}
          {phonenumber}
        </Typography>{" "}
        <Typography variant="body2" component="div" className={classes.contact}>
          <span role="img" aria-label="Mail" className={classes.icon}>
            <Mail fontSize="small" />
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
    </StyledPaper>
  );
}
