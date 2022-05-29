import { Layout } from "@/components";
import { getAllAgents } from "@/lib/api";
import {
  TeamSection,
  TestimonialsSection,
  FAQSSection,
  ServicesSection,
  AboutSection,
} from "@/layouts/nosotros";

export default function Servicios({ results: agents }) {
  return (
    <Layout
      currentPage={"Nosotros"}
      titulo="Nosotros"
      descripcion="Fusce dui nulla, rhoncus nec ullamcorper ac, porttitor vel nunc. Cras risus felis, imperdiet in tristique vel, placerat nec mauris. Curabitur justo elit, pharetra a enim nec, tempus sagittis risus. Vivamus ac magna facilisis, fermentum neque id, posuere mi. Etiam vitae blandit orci. Quisque vitae ante ac ligula posuere imperdiet. Morbi velit sapien, pellentesque eu auctor sed, imperdiet at nibh. Maecenas auctor a libero et euismod. Maecenas pharetra odio ipsum, vitae porttitor urna suscipit nec."
    >
      <AboutSection />
      <ServicesSection />
      <TeamSection agents={agents} />
      <TestimonialsSection />
      <FAQSSection />
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
