import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Map } from "@/components";

export function UbicacionSection() {
  return (
    <Box component="section" backgroundColor="white" id="ubicacion">
      <Container sx={{ py: 4 }}>
        <Box mb={2}>
          <Typography
            component="h2"
            sx={(theme) => ({
              ...theme.typography.h6,
              fontWeight: "bold",
              mb: 1,
            })}
          >
            Ubicación
          </Typography>
          <Typography variant="body1">
            Encontrarnos es fácil, nuestra dirección es
          </Typography>
        </Box>
        <Typography
          sx={(theme) => ({
            ...theme.typography.h6,
            textTransform: "uppercase",
          })}
        >
          <strong>Centro Perú, Av. Francisco de Miranda, Caracas.</strong>
        </Typography>
      </Container>
      <Map />
    </Box>
  );
}
