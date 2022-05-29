import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { EmailOutlined, WhatsappOutlined } from "@mui/icons-material";

export function TeamSection({ agents }) {
  return (
    <Box component="section" id="team" backgroundColor="white">
      <Container sx={{ py: 8 }}>
        <Box mb={3}>
          <Typography
            component="h2"
            variant="h3"
            sx={(theme) => ({
              ...theme.typography.h4,
              fontWeight: "bold",
              mb: 1,
              textAlign: "center",
            })}
          >
            Conoce a nuestros equipo
          </Typography>
          <Typography textAlign="center">
            Ellos te ayudarán a conseguir el inmueble de tus sueños
          </Typography>
        </Box>

        <Grid container justifyContent="center">
          <Grid item container xs={12} sm={8} rowSpacing={4} columnSpacing={4}>
            {agents.map(({ data, uid }) => (
              <Grid item key={uid} xs={12} sm={6}>
                <Box>
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
                  <Grid container spacing={1} pt={2}>
                    <Grid item xs sm={12} md>
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
                    </Grid>
                    <Grid
                      item
                      xs="auto"
                      sm={6}
                      md="auto"
                      container
                      justifyContent="center"
                    >
                      <IconButton
                        color="inherit"
                        size="large"
                        aria-label={`Whatsapp del asesor: ${data.name}`}
                      >
                        <WhatsappOutlined />
                      </IconButton>
                    </Grid>
                    <Grid
                      item
                      xs="auto"
                      sm={6}
                      md="auto"
                      container
                      justifyContent="center"
                    >
                      <IconButton
                        color="inherit"
                        size="large"
                        aria-label={`Email del asesor: ${data.name}`}
                      >
                        <EmailOutlined />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                      <Link href={`/agent/${uid}`} passHref>
                        <Button variant="contained" fullWidth disableElevation>
                          Inmuebles Publicados
                        </Button>
                      </Link>
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
