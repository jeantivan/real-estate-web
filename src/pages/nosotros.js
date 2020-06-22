import Layout from "../components/Layout";
import Typography from "@material-ui/core/Typography";

export default function Nosotros() {
  return (
    <Layout
      titulo="Nosotros"
      descripcion="Fusce sed erat sapien. Nam in tortor nec tortor suscipit ultrices et ac massa. Aenean justo arcu, volutpat et nisi nec, accumsan varius erat. Morbi fringilla dapibus ligula, non pharetra lacus condimentum ultricies. Proin egestas nisl et odio egestas, ac fringilla tellus porttitor. Suspendisse vel dui bibendum, posuere nibh at, tempus lectus. Donec varius in nibh."
    >
      <Typography variant="h1" component="h1">
        Nosotros
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
    </Layout>
  );
}
