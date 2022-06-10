import { Container, Box, Grid, Typography, Button } from "@mui/material";
import { WhatsApp, MailOutlined } from "@mui/icons-material";
import { Map } from "@/components";

export function ContactSection() {
  return (
    <Box component="section" id="seccion-contacto" bgcolor="white">
      <Container sx={{ py: { xs: 5, sm: 8, md: 12 } }}>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Typography variant="h4" component="h2" fontWeight={700} mb={3}>
              ¿Quieres vender tu propiedad con nosotros?
            </Typography>
            <Typography
              variant="h6"
              component="p"
              fontWeight={400}
              pr={{ md: 5 }}
              mb={{ xs: 3, sm: 5 }}
            >
              Do officia dolore minim laborum commodo ea do. Deserunt nisi sunt
              commodo pariatur. Exercitation pariatur Lorem culpa dolor sint
              amet velit minim excepteur exercitation veniam.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  color="success"
                  disableElevation
                  startIcon={<WhatsApp />}
                  sx={{ fontSize: "1rem" }}
                >
                  0426 123 45-65
                </Button>
              </Grid>
              <Grid item xs={12} sm="auto">
                <Button
                  fullWidth
                  size="large"
                  variant="outlined"
                  color="info"
                  disableElevation
                  startIcon={<MailOutlined />}
                  sx={{ fontSize: "1rem" }}
                >
                  contacto@avilatek.com
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} mt={{ xs: 3, sm: 6 }}>
            <Map rounded aspectRatio="calc(9/16 * 100%)" />
            <Box mt={3}>
              <Typography variant="h6" fontWeight={700} mb={1}>
                Dirección de nuestra oficina
              </Typography>
              <Typography variant="body1">
                Centro Perú, Av. Francisco de Miranda, Caracas.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
