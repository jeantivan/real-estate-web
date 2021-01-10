import { Box, Grid, Typography } from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { RichText } from "prismic-reactjs";

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

export function InmuebleHeader({ titulo, ubiaprox, precio }) {
  const classes = useStyles();
  return (
    <Box component="header" id="header-del-inmueble" mb={3}>
      <Grid container alignItems="center">
        <Grid item style={{ flex: 1 }}>
          <Typography variant="h4" component="h1" className={classes.title}>
            {RichText.asText(titulo)}
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
    </Box>
  );
}
