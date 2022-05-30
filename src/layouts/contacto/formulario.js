import { Grid, Typography, Container, Box, Paper } from "@mui/material";
import React from "react";
import { ContactForm } from "@/components/";

export function FormularioSection() {
  return (
    <Box
      component="section"
      id="formulario"
      sx={{
        py: 4,
        backgroundColor: "#24324A",
      }}
    >
      <Container>
        <Typography
          component="h2"
          variant="h5"
          sx={(theme) => ({
            ...theme.typography.h5,
            fontWeight: "bold",
            margin: 0,
            marginBottom: theme.spacing(3),
            color: "white",
          })}
        >
          Contáctanos
        </Typography>
        <Paper
          elevation={0}
          sx={{ p: { xs: 2, md: 4 }, width: { xs: "100%", md: 3 / 4 } }}
        >
          <ContactForm />
        </Paper>
      </Container>
    </Box>
  );
}
