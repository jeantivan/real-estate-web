import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { asText } from "@prismicio/helpers";

export function HeaderSection({ titulo, ubiaprox }) {
  return (
    <Grid item xs={12} component="section" id="titulo">
      <Typography variant="h4" component="h1" gutterBottom mt={4}>
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
  );
}
