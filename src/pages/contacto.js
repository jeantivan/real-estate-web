import { Layout, ContactForm } from "../components";

import { Typography, Grid, Container, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  map: {
    width: "100%",
    height: 0,
    paddingTop: "42.86%",
    position: "relative",
  },
  mapWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: theme.spacing(1),
    borderRadius: "inherit",
  },
  mapContent: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.grey[500],
  },
}));

export default function Contacto() {
  const classes = useStyles();
  return (
    <Layout
      titulo="Contacto"
      descripcion="Praesent euismod massa quis iaculis feugiat. Aliquam in pellentesque purus. Cras sit amet risus ut dui accumsan blandit non pellentesque augue. Mauris nisi quam, venenatis nec rutrum sit amet, accumsan sed dolor. Fusce lobortis, erat quis mollis vulputate, lacus tellus venenatis sem, non tempor nisi quam et nisl. Vivamus sollicitudin, nisi a mollis consequat, sapien sem placerat nibh, at convallis nunc tortor in nisl. Praesent lorem sem, malesuada nec sagittis quis, accumsan vel ante. Curabitur elementum augue id tempor posuere."
    >
      <Box mb={4}>
        <Container>
          <Typography variant="h2" component="h1">
            Contacto
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography>
                Obcaecati repellendus blanditiis tenetur facilis nam architecto
                iure aspernatur perferendis temporibus id ex, neque rem
                voluptate quis tempora esse earum alias voluptates.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper variant="outlined" className={classes.map}>
                <div className={classes.mapWrapper}>
                  <div className={classes.mapContent} />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
