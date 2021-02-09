import { FAQ } from "@/components/";
import { faqs } from "@/utils/faqs";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  heading: {
    marginBottom: theme.spacing(3),
  },
}));

export function NosotrosFAQS() {
  const classes = useStyles();
  return (
    <Container component="section" id="faqs-section" className={classes.root}>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} md={10}>
          <Typography variant="h4">Preguntas Frecuentes</Typography>
        </Grid>
        <Grid item xs={12} md={10} container spacing={3}>
          {faqs.map((faq, index) => {
            const id = `faq-${index + 1}`;
            return (
              <Grid item xs={12} key={id}>
                <FAQ id={id} {...faq} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
