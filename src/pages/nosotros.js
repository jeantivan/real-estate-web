import { Layout, Agent } from "../components";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getAllAgents } from "../lib";

const useStyles = makeStyles((theme) => ({
  equipo: {
    margin: theme.spacing(2, -1),
  },
  agent: {
    width: "100%",
    minHeight: 300,
  },
}));

export default function Nosotros({ results: agents }) {
  const classes = useStyles();

  return (
    <Layout
      titulo="Nosotros"
      descripcion="Fusce sed erat sapien. Nam in tortor nec tortor suscipit ultrices et ac massa. Aenean justo arcu, volutpat et nisi nec, accumsan varius erat. Morbi fringilla dapibus ligula, non pharetra lacus condimentum ultricies. Proin egestas nisl et odio egestas, ac fringilla tellus porttitor. Suspendisse vel dui bibendum, posuere nibh at, tempus lectus. Donec varius in nibh."
    >
      <Typography variant="h1" component="h1">
        Nosotros
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus
        odio, ultricies sit amet velit a, hendrerit mattis turpis. Sed sed magna
        eget felis auctor luctus. Donec eget turpis ligula. Cras pharetra
        consequat mauris, in vehicula turpis gravida eget. Fusce ut ex rhoncus,
        fermentum mauris in, condimentum tortor. Suspendisse at turpis felis.
        Nulla non neque efficitur, sodales lectus in, pharetra magna. Curabitur
        ut dapibus libero. In mattis, ligula in condimentum efficitur, purus
        ipsum efficitur leo, a semper justo lectus id tellus. Quisque sodales
        vehicula nisi, vitae porta ipsum fringilla sodales.
      </Typography>
      <Typography>
        Phasellus feugiat ut orci sed imperdiet. Curabitur consectetur efficitur
        lacus id posuere. In sapien massa, luctus et rhoncus non, pretium sit
        amet eros. Donec molestie dictum odio, at lacinia mauris auctor et.
        Curabitur iaculis, elit at ultrices finibus, turpis felis pellentesque
        eros, in volutpat nibh nibh vitae augue. Nam ac dolor fermentum quam
        pellentesque commodo ut sit amet augue. Quisque nisi lectus, vehicula
        sed ex in, molestie mollis elit. Integer ut auctor ipsum, at fringilla
        erat. In sapien libero, pharetra in accumsan ut, sollicitudin in libero.
        Donec non commodo sapien. Donec nec sollicitudin velit, a convallis
        tortor. Integer diam lectus, dapibus vitae molestie eu, venenatis vel
        ipsum. Nulla cursus purus quis mi varius semper. Mauris ante enim,
        ultrices vehicula elit sit amet, pulvinar convallis tellus.
      </Typography>
      <Typography>
        Donec a consectetur purus. Nullam vel neque quis tortor malesuada rutrum
        ac in tortor. Phasellus cursus magna eu diam elementum venenatis.
        Curabitur vehicula placerat sapien, a consectetur neque viverra in.
        Donec sollicitudin ligula ac neque elementum, vitae dapibus lectus
        molestie. Donec risus massa, hendrerit in ligula eget, feugiat
        condimentum mauris. Donec at diam non felis pulvinar semper.
        Pellentesque suscipit elementum dolor, quis euismod ex lacinia id.
        Praesent lorem tortor, tempus ac lorem non, convallis finibus tellus.
        Fusce quis odio convallis tortor scelerisque volutpat vitae vel nisl. In
        quis turpis leo.
      </Typography>
      <Grid
        container
        spacing={2}
        component="section"
        id="equipo"
        className={classes.equipo}
      >
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            Nuestros Agentes
          </Typography>
        </Grid>
        {agents.map(({ data, id }) => (
          <Grid item xs={12} sm={6} lg={3} key={id}>
            <Agent {...{ ...data, id }} />
          </Grid>
        ))}
      </Grid>
    </Layout>
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
