import { Grid, Typography, Container, Box, Paper } from "@mui/material";
import React from "react";
import { ContactForm } from "@/components/";

const classes = {};

export function FormularioSection() {
  return (
    <Box
      component="section"
      id="formulario"
      sx={(theme) => ({
        py: 4,
        backgroundColor: "#24324A",
        // backgroundImage:
        //  "linear-gradient(175deg, #fafafa 0%, #fafafa 45%, #0D47A1 45%, #24324A 75%)",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container className={classes.container}>
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
        <Paper sx={{ p: { xs: 2, md: 4 }, width: { xs: "100%", md: 3 / 4 } }}>
          <ContactForm />
        </Paper>
      </Container>
    </Box>
  );
}
