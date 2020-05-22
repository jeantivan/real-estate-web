import Layout from "../components/Layout";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { users } from "../data/users";
import UserCard from "../components/UserCard";

export default function Home() {
  return (
    <Layout title="Home">
      <Typography variant="h1" component="h1">
        Avilatek Inmobiliaria
      </Typography>
      <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        repellendus blanditiis tenetur facilis nam architecto iure aspernatur
        perferendis temporibus id ex, neque rem voluptate quis tempora esse
        earum alias voluptates.
      </Typography>
      <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        repellendus blanditiis tenetur facilis nam architecto iure aspernatur
        perferendis temporibus id ex, neque rem voluptate quis tempora esse
        earum alias voluptates.
      </Typography>
      <Grid container spacing={4} justify="center">
        {users.map((user) => (
          <Grid item xs key={user.id}>
            <UserCard {...user} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
