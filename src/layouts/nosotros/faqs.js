import { FAQ } from "@/components/";
import { faqs } from "@/utils/faqs";
import { Container, Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    backgroundImage:
      "linear-gradient(175deg, #fafafa 0%, #fafafa 45%, #0D47A1 45%, #24324A 75%)",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  },
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  heading: {
    marginBottom: theme.spacing(3),
  },
  faqs: {
    "&:not(:last-child)": {
      marginBottom: theme.spacing(3),
    },
  },
  wave: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -1,
    "& > svg": {
      width: "100%",
      display: "block",
    },
  },
}));

export function FAQSSection() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section component="section" id="faqs-section" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            <Typography variant="h4">Preguntas Frecuentes</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            {faqs.map((faq, index) => {
              const id = `faq-${index + 1}`;
              return (
                <FAQ
                  key={id}
                  expanded={expanded === id}
                  onChange={handleChange(id)}
                  id={id}
                  {...faq}
                />
              );
            })}
          </Grid>
        </Grid>
      </Container>
      {/* <div className={classes.wave} aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="1366"
          // height="387.2"
          viewBox="0 0 1366 387.2"
        >
          <defs>
            <linearGradient
              id="a"
              x1="0.5"
              x2="0.5"
              y2="0.5"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#0d47a1" />
              <stop offset="1" stop-color="#24324a" />
            </linearGradient>
          </defs>
          <path d="M0,118.044,1366,32V419.2H0Z" fill="url(#a)" />
        </svg>
      </div> */}
    </section>
  );
}
