import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Link from "next/link";

const HOME_SERVICES = [
  {
    title: "Comercialización de inmuebles",
    description:
      "Do ullamco ullamco pariatur sit nisi. Reprehenderit mollit do laborum ullamco voluptate pariatur excepteur elit.",
    icon: "/images/services/real-estate-icon.png",
  },
  {
    title: "Encontramos tu inmueble ideal",
    description:
      "Do ullamco ullamco pariatur sit nisi. Reprehenderit mollit do laborum ullamco voluptate pariatur excepteur elit.",
    icon: "/images/services/find-house-icon.png",
  },
  {
    title: "Asesoría legal y personalizada",
    description:
      "Do ullamco ullamco pariatur sit nisi. Reprehenderit mollit do laborum ullamco voluptate pariatur excepteur elit.",
    icon: "/images/services/legal-advice-icon.png",
  },
];

const Service = ({ title, description, icon }) => {
  return (
    <Grid item xs={12} sm={4} md={12}>
      <Paper
        elevation={6}
        sx={{ mb: { xs: 2, sm: 0, md: 5 }, width: "100%", p: 3 }}
      >
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
              <Image width={64} height={64} src={icon} alt={title} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              color="primary.dark"
              fontWeight={700}
              mb={1.5}
            >
              {title}
            </Typography>
            <Typography
              color="text.secondary"
              variant="body2"
              sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: { sm: "3" },
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export function ServicesSection() {
  return (
    <Box bgcolor="#e3f2fd">
      <Container sx={{ py: { xs: 6, sm: 8, md: 12 } }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={7}
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
          </Grid>
          <Grid item xs={12} sm={12} md={5} container spacing={2}>
            {HOME_SERVICES.map((service) => (
              <Service {...service} key={service.title} />
            ))}
          </Grid>
          <Grid item xs={12}>
            <Link href="/nosotros" passHref>
              <Button
                sx={{
                  mt: { xs: 3, md: "auto" },
                  width: "auto",
                }}
                color="inherit"
                endIcon={<ArrowForwardIcon />}
              >
                Saber más
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
