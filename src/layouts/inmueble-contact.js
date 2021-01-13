import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  sectionTitle: {
    ...theme.typography.h6,
    fontWeight: 700,
  },
}));

export function InmuebleContact({ agent }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3}>
      <Paper
        component="section"
        id="inmueble-contact"
        className={classes.root}
        elevation={0}
      >
        <Typography component="h3" className={classes.sectionTitle}>
          Contacto
        </Typography>
      </Paper>
    </Grid>
  );
}
