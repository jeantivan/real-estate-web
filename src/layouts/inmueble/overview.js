import { Paper, Divider, Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RichText } from "prismic-reactjs";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(2),
  },
  sectionTitle: {
    ...theme.typography.h6,
    fontWeight: 700,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  content: {
    ...theme.typography.h6,
  },
  description: {
    "& > p": {
      ...theme.typography.body1,
    },
    "& > p:not(:last-child)": {
      marginTop: 0,
      marginBottom: theme.spacing(2),
    },
  },
}));

export function OverviewSection({
  id,
  tipo,
  area,
  habitaciones,
  baños,
  estacionamientos,
  antiguedad,
  descripcion,
}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={7}>
      <Paper elevation={0} className={classes.section}>
        <Box component="section" id="caracteristicas-del-inmueble" mb={3}>
          <Grid container justify="space-between" alignItems="baseline">
            <Grid item>
              <Typography component="h3" className={classes.sectionTitle}>
                Caracteristicas.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                <strong>ID del Inmueble: </strong>
                {id}
              </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Grid container spacing={2}>
            <Grid item xs lg={3}>
              <Typography variant="caption" gutterBottom>
                Tipo
              </Typography>
              <Typography className={classes.content}>{tipo}</Typography>
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <Typography variant="caption" gutterBottom>
                Area
              </Typography>
              <Typography className={classes.content}>
                {area + " "}
                <span>
                  m<sup>2</sup>
                </span>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <Typography variant="caption" gutterBottom>
                Habitaciones
              </Typography>
              <Typography className={classes.content}>
                {habitaciones}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <Typography variant="caption" gutterBottom>
                Baños
              </Typography>
              <Typography className={classes.content}>{baños}</Typography>
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <Typography variant="caption" gutterBottom>
                Estacionamientos
              </Typography>
              <Typography className={classes.content}>
                {estacionamientos}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <Typography variant="caption" gutterBottom>
                Antiguedad
              </Typography>
              <Typography className={classes.content}>{antiguedad}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box component="section">
          <Typography
            component="h3"
            gutterBottom
            className={classes.sectionTitle}
          >
            Descripción.
          </Typography>
          <div className={classes.description}>
            <RichText render={descripcion} />
          </div>
        </Box>
      </Paper>
    </Grid>
  );
}
