import { Layout, Hero } from "../components";
import { Container, Typography } from "@material-ui/core/";

export default function Servicios() {
  return (
    <Layout
      titulo="Servicios"
      descripcion="Fusce dui nulla, rhoncus nec ullamcorper ac, porttitor vel nunc. Cras risus felis, imperdiet in tristique vel, placerat nec mauris. Curabitur justo elit, pharetra a enim nec, tempus sagittis risus. Vivamus ac magna facilisis, fermentum neque id, posuere mi. Etiam vitae blandit orci. Quisque vitae ante ac ligula posuere imperdiet. Morbi velit sapien, pellentesque eu auctor sed, imperdiet at nibh. Maecenas auctor a libero et euismod. Maecenas pharetra odio ipsum, vitae porttitor urna suscipit nec."
    >
      <Hero imgUrl="/images/original.jpg" alt="Servicios">
        Servicios
      </Hero>
      <Container>
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
      </Container>
    </Layout>
  );
}
