import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { asText } from "@prismicio/helpers";

export function HeaderSection({ titulo, ubiaprox, precio }) {
  return (
    <Grid item xs={12} md={10}>
      <Grid
        container
        alignItems="center"
        id="header-del-inmueble"
        columnGap={{ xs: 2, sm: 0 }}
        rowGap={{ xs: 2, sm: 0 }}
        pt={4}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" component="h1">
            {asText(titulo)}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            display="inline-flex"
            alignItems="center"
          >
            <Box component="span" sx={{ display: "inline-flex", mr: 0.75 }}>
              <LocationOn />
            </Box>
            {ubiaprox}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          justifyContent={{ xs: "flex-start", sm: "flex-end" }}
        >
          <Typography
            variant="h3"
            component="h4"
            sx={(theme) => ({
              fontWeight: 700,
              color: theme.palette.primary.dark,
            })}
          >
            <Box
              component="span"
              sx={(theme) => ({
                ...theme.typography.h4,
                fontWeight: 700,
                display: "inline-block",
                marginRight: "0.25rem",
              })}
            >
              $
            </Box>
            {precio}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
