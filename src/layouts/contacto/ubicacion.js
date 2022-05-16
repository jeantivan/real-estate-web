import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Container, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4, 2),
  },
  mainHeading: {
    ...theme.typography.h6,
    fontWeight: 500,
    textTransform: "uppercase",
  },
  mapWrapper: {
    width: "100%",
    height: 0,
    paddingTop: "calc(9 / 21 * 100%)",
    position: "relative",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.grey[500],
    "& > iframe": {
      width: "100%",
      height: "100%",
    },
  },
}));

export function UbicacionSection() {
  const classes = useStyles();
  return (
    <section id="ubicacion">
      <Container className={classes.container}>
        <Typography component="h1" align="center" variant="body1">
          Encontrarnos es fácil, estamos ubicados en el
        </Typography>
        <Typography align="center" className={classes.mainHeading}>
          <strong>Centro Perú, Avenida Francisco de Miranda, Caracas</strong>
        </Typography>
      </Container>
      <div className={classes.mapWrapper}>
        <div className={classes.map}>
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Centro%20Per%C3%BA+(Avilatek%20Inmobiliaria)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
