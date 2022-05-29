import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Service } from "@/components";
import { SERVICES } from "@/utils/constants";

export function ServicesSection() {
  return (
    <Box component="section" id="servicios" backgroundColor="#0f172a">
      <Container sx={{ py: 8 }}>
        <Typography
          component="h2"
          variant="h4"
          color="white"
          mb={8}
          textAlign={{ xs: "center", sm: "left" }}
        >
          Servicios que te ofrecemos
        </Typography>
        <Box>
          {SERVICES.map((service, i) => (
            <Service
              key={service.title.replace(/(\s)/g, "-")}
              {...service}
              i={i}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
