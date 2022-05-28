import { Layout } from "@/components";
import { styled } from "@mui/material/styles";

import { getAllAgents } from "@/lib/api";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import NextLink from "next/link";
import {
  TeamSection,
  TestimonialsSection,
  FAQSSection,
  ServicesSection,
} from "@/layouts/nosotros";

const PREFIX = "nosotros";

const classes = {
  container: `${PREFIX}-container`,
  bgLight: `${PREFIX}-bgLight`,
  grid: `${PREFIX}-grid`,
  mainHeading: `${PREFIX}-mainHeading`,
  servicesHeading: `${PREFIX}-servicesHeading`,
  teamHeading: `${PREFIX}-teamHeading`,
  testimonialsHeading: `${PREFIX}-testimonialsHeading`,
  strong: `${PREFIX}-strong`,
  fakeIframe: `${PREFIX}-fakeIframe`,
  gradient: `${PREFIX}-gradient`,
  wave: `${PREFIX}-wave`,
  testimonialsSection: `${PREFIX}-testimonialsSection`,
};

const StyledLayout = styled(Layout)(({ theme }) => ({
  [`& .${classes.container}`]: {
    minHeight: "10vmax",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },

  [`& .${classes.mainHeading}`]: {
    ...theme.typography.h6,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: theme.spacing(3),
  },

  [`& .${classes.strong}`]: {
    ...theme.typography.h2,
    lineHeight: 1,
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
}));

export default function Servicios({ results: agents }) {
  return (
    <StyledLayout
      currentPage={"Nosotros"}
      titulo="Nosotros"
      descripcion="Fusce dui nulla, rhoncus nec ullamcorper ac, porttitor vel nunc. Cras risus felis, imperdiet in tristique vel, placerat nec mauris. Curabitur justo elit, pharetra a enim nec, tempus sagittis risus. Vivamus ac magna facilisis, fermentum neque id, posuere mi. Etiam vitae blandit orci. Quisque vitae ante ac ligula posuere imperdiet. Morbi velit sapien, pellentesque eu auctor sed, imperdiet at nibh. Maecenas auctor a libero et euismod. Maecenas pharetra odio ipsum, vitae porttitor urna suscipit nec."
    >
      <Box component="section" id="intro" py={4}>
        <Container className={classes.container}>
          <Typography
            component="h1"
            align="center"
            className={classes.mainHeading}
          >
            Nosotros
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h3" component="h2" gutterBottom>
                Nuestra misión en <strong>Avilatek</strong>
              </Typography>
              <Typography align="justify" paragraph color="textSecondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, at non nulla voluptas aliquid tempora placeat possimus
                eum saepe sed sunt rerum perferendis dignissimos modi itaque
                distinctio cupiditate inventore laudantium.
              </Typography>
              <NextLink href="/contacto" passHref>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  disableElevation
                >
                  Contáctanos.
                </Button>
              </NextLink>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ aspectRatio: "16 / 9", backgroundColor: "#eee" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ServicesSection />
      <TeamSection agents={agents} />
      <TestimonialsSection />
      <FAQSSection />
    </StyledLayout>
  );
}

export async function getStaticProps() {
  const { results } = await getAllAgents();

  return {
    props: {
      results,
    },
  };
}
