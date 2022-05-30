import { FAQ } from "@/components/";
import { FAQS } from "@/utils/constants";
import { Container, Grid, Typography, Box } from "@mui/material";
import { useState } from "react";

export function FAQSSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box
      component="section"
      id="faqs"
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        backgroundImage:
          "linear-gradient(175deg, #fafafa 0%, #fafafa 45%, #0D47A1 45%, #24324A 75%)",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            <Typography variant="h4">Preguntas Frecuentes</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            {FAQS.map((faq) => {
              const id = `faq-${faq.question.replace(/\s/g, "-")}`;
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
    </Box>
  );
}
