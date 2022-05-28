import { Paper, Divider, Typography, Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PrismicRichText } from "@prismicio/react";

const PREFIX = "overview";

const classes = {
  section: `${PREFIX}-section`,
  sectionTitle: `${PREFIX}-sectionTitle`,
  divider: `${PREFIX}-divider`,
  content: `${PREFIX}-content`,
  description: `${PREFIX}-description`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.section}`]: {
    padding: theme.spacing(2),
    minHeight: "100%",
  },

  [`& .${classes.sectionTitle}`]: {
    ...theme.typography.h6,
    fontWeight: 700,
  },

  [`& .${classes.divider}`]: {
    margin: theme.spacing(2, 0),
  },

  [`& .${classes.content}`]: {
    ...theme.typography.h6,
  },

  [`& .${classes.description}`]: {
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
  return (
    <StyledGrid item xs={12} md={7}>
      <Paper elevation={0} className={classes.section}>
        <Box component="section" id="caracteristicas-del-inmueble" mb={3}>
          <Grid container justifyContent="space-between" alignItems="baseline">
            <Grid item>
              <Typography component="h3" className={classes.sectionTitle}>
                Características del inmueble.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                <strong>ID: </strong>
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
        <Box>
          <Typography
            component="h3"
            gutterBottom
            className={classes.sectionTitle}
          >
            Descripción.
          </Typography>
          <div className={classes.description}>
            <PrismicRichText field={descripcion} />
          </div>
        </Box>
      </Paper>
    </StyledGrid>
  );
}
