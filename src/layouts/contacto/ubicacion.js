import React from "react";
import { Container, Typography, Box } from "@mui/material";

const MapWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 0,
        paddingTop: "calc(9 / 21 * 100%)",
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
};

const Map = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.grey[500],
        "& > iframe": {
          width: "100%",
          height: "100%",
        },
      })}
    >
      {children}
    </Box>
  );
};

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
      <MapWrapper>
        <Map>
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Centro%20Per%C3%BA+(Avilatek%20Inmobiliaria)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </Map>
      </MapWrapper>
    </Box>
  );
}
