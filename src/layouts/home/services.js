import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Link from "next/link";

export function ServicesSection() {
  return (
    <Box bgcolor="#e3f2fd">
      <Container sx={{ py: 12 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={7}
            pr={{ md: 4 }}
            display="flex"
            flexDirection="column"
            mb={{ xs: 4 }}
          >
            <Typography variant="h4" component="h2" fontWeight={700} mb={3}>
              Amet laborum Lorem do aliqua ea officia dolore excepteur
              adipisicing est.
            </Typography>
            <Typography
              variant="h5"
              component="p"
              fontWeight={300}
              lineHeight={2}
              pr={{ md: 3 }}
            >
              Esse ut laboris voluptate nisi anim veniam eiusmod adipisicing
              ullamco excepteur enim non. Laboris sint do culpa minim culpa non
              aute amet esse. Et laborum non dolor pariatur tempor laboris
              reprehenderit excepteur. Deserunt elit ex dolore laborum commodo
              consequat.
            </Typography>
            <Link href="/nosotros" passHref>
              <Button
                sx={{
                  mt: { xs: 3, md: "auto" },
                  width: { xs: "auto", sm: "30%" },
                }}
                color="inherit"
                endIcon={<ArrowForwardIcon />}
              >
                Saber más
              </Button>
            </Link>
          </Grid>
          <Grid item xs>
            <Paper elevation={6} sx={{ mb: 5, width: "100%", p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs="auto" display="flex" alignItems="center">
                  <Box
                    width={80}
                    height={80}
                    borderRadius={2}
                    bgcolor="primary.dark"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                  >
                    <Image
                      width={64}
                      height={64}
                      src="/images/services/real-estate-icon.png"
                      alt="Comercializacion de inmuebles"
                    />
                  </Box>
                </Grid>
                <Grid item flex={1}>
                  <Typography
                    variant="body1"
                    color="primary.dark"
                    fontWeight={700}
                    mb={1.5}
                  >
                    Comercializacion de inmuebles
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    Do ullamco ullamco pariatur sit nisi. Reprehenderit mollit
                    do laborum ullamco voluptate pariatur excepteur elit.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper elevation={6} sx={{ mb: 5, width: "100%", p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs="auto" display="flex" alignItems="center">
                  <Box
                    width={80}
                    height={80}
                    borderRadius={2}
                    bgcolor="primary.dark"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                  >
                    <Image
                      width={64}
                      height={64}
                      src="/images/services/find-house-icon.png"
                      alt="Encontramos tu inmueble ideal"
                    />
                  </Box>
                </Grid>
                <Grid item flex={1}>
                  <Typography
                    variant="body1"
                    color="primary.dark"
                    fontWeight={700}
                    mb={1.5}
                  >
                    Encontramos tu inmueble ideal
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    Do ullamco ullamco pariatur sit nisi. Reprehenderit mollit
                    do laborum ullamco voluptate pariatur excepteur elit.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper elevation={6} sx={{ width: "100%", p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs="auto" display="flex" alignItems="center">
                  <Box
                    width={80}
                    height={80}
                    borderRadius={2}
                    bgcolor="primary.dark"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                  >
                    <Image
                      width={64}
                      height={64}
                      src="/images/services/legal-advice-icon.png"
                      alt="Asesoría legal"
                    />
                  </Box>
                </Grid>
                <Grid item flex={1}>
                  <Typography
                    variant="body1"
                    color="primary.dark"
                    fontWeight={700}
                    mb={1.5}
                  >
                    Asesoría Legal
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    Do ullamco ullamco pariatur sit nisi. Reprehenderit mollit
                    do laborum ullamco voluptate pariatur excepteur elit.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
