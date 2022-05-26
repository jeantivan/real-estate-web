import { Agent, Layout, Service, Testimonials } from "@/components";
import { styled } from "@mui/material/styles";
import { FindHouse, Goals, Market, RealEstate, Rent } from "@/icons";
import { getAllAgents } from "@/lib/api";
import { Button, Container, Grid, Typography } from "@mui/material";
import NextLink from "next/link";
import {
  TeamSection,
  TestimonialsSection,
  FAQSSection,
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

  [`& .${classes.bgLight}`]: {
    backgroundColor: "#fafafa",
  },

  [`& .${classes.grid}`]: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
  },

  [`& .${classes.mainHeading}`]: {
    ...theme.typography.h6,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: theme.spacing(3),
  },

  [`& .${classes.servicesHeading}`]: {
    ...theme.typography.h4,
    fontWeight: "bold",
    margin: 0,
    marginBottom: theme.spacing(3),
  },

  [`& .${classes.teamHeading}`]: {
    ...theme.typography.h3,
    color: "white",
    fontWeight: "bold",
    margin: 0,
    marginBottom: theme.spacing(3),
  },

  [`& .${classes.testimonialsHeading}`]: {
    ...theme.typography.h3,
    margin: 0,
    marginBottom: theme.spacing(3),
  },

  [`& .${classes.strong}`]: {
    ...theme.typography.h2,
    lineHeight: 1,
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },

  [`& .${classes.fakeIframe}`]: {
    width: "100%",
    height: 0,
    paddingTop: "calc(9 / 16 * 100%)",
    backgroundColor: "#000",
  },

  [`& .${classes.gradient}`]: {
    background: "#1a237e linear-gradient(to bottom, #1a237e, #0d47a1)",
  },

  [`& .${classes.wave}`]: {
    "& > svg": {
      display: "block",
    },
  },

  [`& .${classes.testimonialsSection}`]: {
    // position: "relative",
    // top: -20,
    // [theme.breakpoints.up("sm")]: {
    //   top: -80,
    // },
    // [theme.breakpoints.up("md")]: {
    //   top: -120,
    // },
    maginBottom: theme.spacing(8),
  },
}));

export default function Servicios({ results: agents }) {
  return (
    <StyledLayout
      currentPage={"Nosotros"}
      titulo="Nosotros"
      descripcion="Fusce dui nulla, rhoncus nec ullamcorper ac, porttitor vel nunc. Cras risus felis, imperdiet in tristique vel, placerat nec mauris. Curabitur justo elit, pharetra a enim nec, tempus sagittis risus. Vivamus ac magna facilisis, fermentum neque id, posuere mi. Etiam vitae blandit orci. Quisque vitae ante ac ligula posuere imperdiet. Morbi velit sapien, pellentesque eu auctor sed, imperdiet at nibh. Maecenas auctor a libero et euismod. Maecenas pharetra odio ipsum, vitae porttitor urna suscipit nec."
    >
      <section>
        <Container className={classes.container} fixed>
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
                Nuestra misión en{" "}
                <strong className={classes.strong}>Avilatek</strong>
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
              <div className={classes.fakeIframe}></div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.bgLight}>
        <Container className={classes.container}>
          <Typography
            component="h2"
            align="center"
            className={classes.servicesHeading}
          >
            Servicios que prestamos
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6} lg={4}>
              <Service
                icon={<RealEstate />}
                title="Comercialización de inmuebles"
                text="Nulla vitae vehicula purus. Integer mattis sodales ultrices. Sed rutrum, arcu ultrices sodales fringilla, risus tortor sollicitudin est, vel dignissim."
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Service
                icon={<FindHouse />}
                title="Encuentra el inmueble ideal"
                text="Nulla vitae vehicula purus. Integer mattis sodales ultrices. Sed rutrum, arcu ultrices sodales fringilla, risus tortor sollicitudin est, vel dignissim."
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Service
                icon={<Rent />}
                title="Asesoría legal"
                text="Nulla vitae vehicula purus. Integer mattis sodales ultrices. Sed rutrum, arcu ultrices sodales fringilla, risus tortor sollicitudin est, vel dignissim."
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <Service
                icon={<Market />}
                title="Analisis del mercado"
                text="Nulla vitae vehicula purus. Integer mattis sodales ultrices. Sed rutrum, arcu ultrices sodales fringilla, risus tortor sollicitudin est, vel dignissim."
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Service
                icon={<Goals />}
                title="Alcanzamos las metas"
                text="Nulla vitae vehicula purus. Integer mattis sodales ultrices. Sed rutrum, arcu ultrices sodales fringilla, risus tortor sollicitudin est, vel dignissim."
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <TeamSection agents={agents} />
      {/* <section className={classes.gradient}>
        <Container className={classes.container}>
          <Typography
            component="h2"
            align="center"
            className={classes.teamHeading}
          >
            Conoce nuestro a nuestro equipo
          </Typography>
          <Grid container spacing={3}>
            {agents.map(({ data, id }) => (
              <Grid item xs={12} sm={6} lg={3} key={id}>
                <Agent {...{ ...data, id }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section> */}
      {/*       <div className={classes.wave} aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0d47a1"
            fillOpacity="1"
            d="M0,128L80,128C160,128,320,128,480,112C640,96,800,64,960,69.3C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div> */}
      {/* <section id="testimonials" className={classes.testimonialsSection}>
        <Container className={classes.container}>
          <Typography
            component="h2"
            align="center"
            className={classes.testimonialsHeading}
          >
            Clientes felices
          </Typography>
        </Container>
        <Testimonials />
      </section> */}
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
