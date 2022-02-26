import { Box, Grid, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import makeStyles from '@mui/styles/makeStyles';
import { PrismicRichText } from "@prismicio/react";
import {asText} from '@prismicio/helpers'

const useStyles = makeStyles((theme) => ({
  precio: {
    fontWeight: 700,
    color: theme.palette.primary.dark,
  },
  location: {
    display: "inline-flex",
    alignItems: "center",
  },
  icon: {
    display: "inline-flex",
    marginRight: theme.spacing(0.75),
  },
  dolar: {
    ...theme.typography.h4,
    fontWeight: 700,
    display: "inline-block",
    marginRight: "0.25rem",
  },
}));

export function HeaderSection({ titulo, ubiaprox, precio }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={10}>
      <Grid
        container
        alignItems="center"
        component="header"
        id="header-del-inmueble"
      >
        <Grid item style={{ flex: 1 }}>
          <Typography variant="h4" component="h1" className={classes.title}>
            {asText(titulo)}
          </Typography>
          <Typography
            className={classes.location}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            <span className={classes.icon}>
              <LocationOn />
            </span>
            {ubiaprox}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h4" className={classes.precio}>
            <span className={classes.dolar}>$</span>
            {precio}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
