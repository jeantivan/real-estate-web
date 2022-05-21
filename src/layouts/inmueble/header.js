import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LocationOn } from "@mui/icons-material";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/helpers";

const PREFIX = "header";

const classes = {
  precio: `${PREFIX}-precio`,
  location: `${PREFIX}-location`,
  icon: `${PREFIX}-icon`,
  dolar: `${PREFIX}-dolar`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.precio}`]: {
    fontWeight: 700,
    color: theme.palette.primary.dark,
  },

  [`& .${classes.location}`]: {
    display: "inline-flex",
    alignItems: "center",
  },

  [`& .${classes.icon}`]: {
    display: "inline-flex",
    marginRight: theme.spacing(0.75),
  },

  [`& .${classes.dolar}`]: {
    ...theme.typography.h4,
    fontWeight: 700,
    display: "inline-block",
    marginRight: "0.25rem",
  },
}));

export function HeaderSection({ titulo, ubiaprox, precio }) {
  return (
    <StyledGrid item xs={12} md={10}>
      <Grid
        container
        alignItems="center"
        id="header-del-inmueble"
        columnGap={2}
        rowGap={2}
        pt={2}
      >
        <Grid item container xs={12} sm={6} sx={{ flex: 1 }}>
          <Typography variant="h4" component="h1" className={classes.title}>
            {/* {asText(titulo)} */}
            Praesent euismod massa quis iaculis feugiat. Aliquam in pellentesque
            purus. Cras sit amet risus ut dui accumsan blandit non pellentesque
            augue.
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
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" component="h4" className={classes.precio}>
            <span className={classes.dolar}>$</span>
            {precio}
          </Typography>
        </Grid>
      </Grid>
    </StyledGrid>
  );
}
