import React from "react";
import { Paper, Divider, Typography, Grid, Box } from "@mui/material";
import { PrismicRichText } from "@prismicio/react";

const sxBase = (theme) => ({
  pl: 2,
  borderStyle: "solid",
  borderWidth: 0,
  borderColor: theme.palette.primary.main,
  borderLeftWidth: 3,
  borderRadius: 1,
  background: `linear-gradient(to right, ${theme.palette.primary[50]} 0% ,  transparent 10%) `,
});

export function OverviewSection({
  tipo,
  area,
  habitaciones,
  banos,
  estacionamientos,
  antiguedad,
  descripcion,
  estado,
  precio,
}) {
  return (
    <Grid
      item
      xs={12}
      md={8}
      component="section"
      id="caracteristicas-del-inmueble"
    >
      <Paper elevation={0} sx={{ p: 2, minHeight: "100%" }}>
        <Box mb={3}>
          <Typography component="h3" variant="h6" fontWeight={700} mb={1}>
            Características del inmueble.
          </Typography>
          <Grid container mb={3} justifyContent="space-between">
            <Grid item xs={4} lg={3}>
              <Typography
                variant="body2"
                textTransform="uppercase"
                mb={1}
                display="block"
              >
                Inmueble en:
              </Typography>
              <Typography
                component="p"
                variant="h6"
                sx={(theme) => ({
                  textAlign: "center",
                  padding: theme.spacing(0.5, 1),
                  borderRadius: 2,
                  fontWeight: 500,
                  backgroundColor:
                    estado === "Venta"
                      ? theme.palette.success.main
                      : theme.palette.secondary.main,
                  color:
                    estado === "Venta"
                      ? theme.palette.success.contrastText
                      : theme.palette.secondary.contrastText,
                })}
              >
                {estado}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography
                variant="body2"
                textTransform="uppercase"
                mb={1}
                display="block"
              >
                Precio:
              </Typography>
              <Typography
                component="p"
                variant="h4"
                color="primary.dark"
                fontWeight={700}
              >
                <Typography component="span" variant="h5" fontWeight={700}>
                  $
                </Typography>
                {Intl.NumberFormat("es-VE").format(precio)}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Box sx={sxBase}>
                <Typography variant="caption" gutterBottom>
                  Tipo
                </Typography>
                <Typography component="p" variant="h6">
                  {tipo}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={6}>
              <Box sx={sxBase}>
                <Typography variant="caption" gutterBottom>
                  Antiguedad
                </Typography>
                <Typography component="p" variant="h6">
                  {antiguedad} años
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <Box sx={sxBase}>
                <Typography variant="caption" gutterBottom>
                  Area
                </Typography>
                <Typography component="p" variant="h6">
                  {area + " "}
                  <span>
                    m<sup>2</sup>
                  </span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <Box sx={sxBase}>
                <Typography variant="caption" gutterBottom>
                  Habitaciones
                </Typography>
                <Typography component="p" variant="h6">
                  {habitaciones}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <Box sx={sxBase}>
                <Typography variant="caption" gutterBottom>
                  Baños
                </Typography>
                <Typography component="p" variant="h6">
                  {banos}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={3}>
              <Box sx={sxBase}>
                <Typography variant="caption" gutterBottom>
                  Estacionamientos
                </Typography>
                <Typography component="p" variant="h6">
                  {estacionamientos}
                </Typography>
              </Box>
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
