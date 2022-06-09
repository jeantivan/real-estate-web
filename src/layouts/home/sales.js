import { Container, Box, Grid, Typography } from "@mui/material";

export function SalesSection() {
  return (
    <Box bgcolor="primary.dark">
      <Container sx={{ py: 3 }}>
        <Grid container color="white" justifyContent="center">
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            container
            justifyContent="center"
            alignItems="flex-end"
          >
            <Box px={3} pt={7}>
              <Typography variant="h3" fontWeight={700}>
                100+
              </Typography>
              <Typography>
                De inmuebles vendidos a través de la compañía
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            container
            justifyContent="center"
            alignItems="flex-end"
            sx={(theme) => ({
              borderWidth: 0,
              borderColor: theme.palette.primary.light,
              borderStyle: "solid",
              borderLeftWidth: { xs: 0, sm: 1 },
              borderRightWidth: { xs: 0, sm: 1 },
              borderTopWidth: { xs: 1, sm: 0 },
              borderBottomWidth: { xs: 1, sm: 0 },
            })}
          >
            <Box px={3} pt={7}>
              <Typography variant="h3" fontWeight={700}>
                50+
              </Typography>
              <Typography>
                De inmuebles publicados en nuestra plataforma
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            container
            justifyContent="center"
            alignItems="flex-end"
          >
            <Box px={3} pt={7}>
              <Typography variant="h3" fontWeight={700}>
                500+
              </Typography>
              <Typography>Familias felices en con su nuevo hogar</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
