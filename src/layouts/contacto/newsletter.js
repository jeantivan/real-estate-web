import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Newsletter } from "@/components/";

export function NewsletterSection() {
  return (
    <Box
      id="newsletter-section"
      component="section"
      sx={{ backgroundColor: "primary.main", py: 4 }}
    >
      <Container>
        <Grid container alignItems="flex-end" spacing={2}>
          <Grid item xs={12} sm={8} sx={{ marginBottom: { xs: 3, sm: 0 } }}>
            <Typography
              sx={(theme) => ({
                ...theme.typography.h5,
                fontWeight: "bold",
                margin: 0,
                marginBottom: theme.spacing(3),
                color: theme.palette.primary.contrastText,
              })}
            >
              Enterate
            </Typography>

            <Typography
              sx={(theme) => ({ color: theme.palette.primary.contrastText })}
            >
              Recibe en tu correo nuestras últimas novedades y promociones,
              suscribete a nuestro newsletter
            </Typography>
          </Grid>
          <Grid item xs="auto" sm={4} container alignItems="flex-start">
            <Newsletter isLight />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
