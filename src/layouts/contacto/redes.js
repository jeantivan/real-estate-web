import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import { Container, Grid, IconButton, Button } from "@mui/material";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4, 2),
    // [theme.breakpoints.up("sm")]: {
    //   padding: theme.spacing(4, 2),
    // },
  },
  bgLight: {
    backgroundColor: "#fafafa",
  },
  rsHeading: {
    ...theme.typography.h5,
    fontWeight: "bold",
    textAlign: "center",
    margin: 0,
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: theme.palette.text.secondary,
    transition: theme.transitions.create(["color", "transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    "&:hover": {
      transform: "scale(1.1)",
      color: theme.palette.primary.main,
    },
  },
}));
export function RedesSection() {
  const classes = useStyles();
  return (
    <section id="rrss" className={classes.bgLight}>
      <Container className={classes.container}>
        <h2 className={classes.rsHeading}>
          Siguenos en nuestras redes sociales.
        </h2>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className={classes.rsContent}
        >
          <Grid item>
            <Button
              disableRipple
              aria-label="Cuenta de instagram"
              size="large"
              startIcon={<Instagram fontSize="large" />}
            >
              Instagram
            </Button>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.icon}
              disableRipple
              aria-label="Cuenta de facebook"
              size="large"
            >
              <Facebook fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.icon}
              disableRipple
              aria-label="Cuenta de twitter"
              size="large"
            >
              <Twitter fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.icon}
              disableRipple
              aria-label="Canal de youtube"
              size="large"
            >
              <WhatsApp fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
