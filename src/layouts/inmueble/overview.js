import React from "react";
import { Paper, Divider, Typography, Grid, Box } from "@mui/material";
import { PrismicRichText } from "@prismicio/react";

export function OverviewSection({
  id,
  tipo,
  area,
  habitaciones,
  banos,
  estacionamientos,
  antiguedad,
  descripcion,
}) {
  return (
    <Grid item xs={12} md={8}>
      <Paper
        component="section"
        id="caracteristicas-del-inmueble"
        elevation={0}
        sx={{ p: 2, minHeight: "100%" }}
      >
        <Box mb={3}>
          <Grid
            container
            mb={3}
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Grid item>
              <Typography component="h3" variant="h6" fontWeight={700}>
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
          <Grid container spacing={2}>
            <Grid item xs lg={3}>
              <Typography variant="caption" gutterBottom>
                Tipo
              </Typography>
              <Typography component="p" variant="h6">
                {tipo}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <Typography variant="caption" gutterBottom>
                Area
              </Typography>
              <Typography component="p" variant="h6">
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
              <Typography component="p" variant="h6">
                {habitaciones}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <Typography variant="caption" gutterBottom>
                Baños
              </Typography>
              <Typography component="p" variant="h6">
                {banos}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <Typography variant="caption" gutterBottom>
                Estacionamientos
              </Typography>
              <Typography component="p" variant="h6">
                {estacionamientos}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <Typography variant="caption" gutterBottom>
                Antiguedad
              </Typography>
              <Typography component="p" variant="h6">
                {antiguedad}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box pt={3}>
          <Typography component="h3" variant="h6" fontWeight={700} gutterBottom>
            Descripción.
          </Typography>
          <Box
            sx={(theme) => ({
              "& > p": {
                ...theme.typography.body1,
              },
              "& > p:not(:last-child)": {
                marginTop: 0,
                marginBottom: 2,
              },
            })}
          >
            <PrismicRichText field={descripcion} />
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
