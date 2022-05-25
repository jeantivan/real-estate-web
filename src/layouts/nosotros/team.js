import React from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import { EmailOutlined, WhatsappOutlined } from "@mui/icons-material";

export function TeamSection({ agents }) {
  console.log({ agents });
  return (
    <Box component="section" id="team" backgroundColor="white">
      <Container sx={{ py: 6 }}>
        <Typography
          component="h2"
          variant="h3"
          sx={(theme) => ({
            ...theme.typography.h4,
            fontWeight: "bold",
            mb: 3,
            textAlign: "center",
          })}
        >
          Conoce a nuestros equipo
        </Typography>
        <Grid container justifyContent="center">
          <Grid item container xs={12} sm={8} rowSpacing={3} columnSpacing={3}>
            {agents.map(({ data, id }) => (
              <Grid item key={id} xs={12} sm={6}>
                <Box p={2}>
                  <Box backgroundColor="#4a4848" borderRadius={2} width="100%">
                    <Image
                      src={data.picture.url}
                      alt={data.picture.alt}
                      layout="responsive"
                      width={data.picture.dimensions.width}
                      height={data.picture.dimensions.height}
                      style={{ borderRadius: 8 }}
                    />
                  </Box>
                  <Box py={1}>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: "bold",
                        lineHeight: 1,
                      })}
                    >
                      {data.name}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      textTransform="uppercase"
                      variant="overline"
                    >
                      Asesor(a) inmobiliario
                    </Typography>
                  </Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Button
                        variant="text"
                        fullWidth
                        aria-label={`Whatsapp del asesor: ${data.name}`}
                      >
                        <WhatsappOutlined />
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="text"
                        fullWidth
                        aria-label={`Whatsapp del asesor: ${data.name}`}
                      >
                        <EmailOutlined />
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" fullWidth disableElevation>
                        Inmuebles Publicados
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
