import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";

import { Testimonial } from "@/components/";
import { TESTIMONIALS } from "@/utils/constants";

export function TestimonialsSection() {
  return (
    <Box component="section" id="testimonials" py={8}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              component="h2"
              align="center"
              variant="h4"
              fontWeight={500}
              gutterBottom
            >
              Clientes felices
            </Typography>
            <Typography
              align="center"
              variant="h6"
              component="p"
              color="text.secondary"
            >
              La experiencia de nuestros clientes habla por nosotros.
            </Typography>
          </Grid>
          {TESTIMONIALS.map((testimonial) => (
            <Grid
              key={testimonial.client.replace(/\s/g, "-")}
              item
              xs={12}
              sm={6}
            >
              <Testimonial {...testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
