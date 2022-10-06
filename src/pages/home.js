import { Layout } from "@/components";
import {
  HeaderSection,
  LatestInmuebles,
  ServicesSection,
  SalesSection,
} from "@/layouts/home";
import { getLatestInmuebles } from "@/lib/api";

import dynamic from "next/dynamic";

const NewsletterSection = dynamic(() =>
  import("../layouts/contacto/newsletter").then((mod) => mod.NewsletterSection)
);

const ContactSection = dynamic(() =>
  import("../layouts/home/contact").then((mod) => mod.ContactSection)
);

export default function Home({ latestInmuebles }) {
  return (
    <Layout
      currentPage={"Inicio"}
      titulo="Inicio"
      descripcion="Maecenas quis imperdiet ligula. Phasellus convallis urna nunc, sit amet posuere ex gravida at. Nam ac interdum odio, a condimentum orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elit risus. Nulla lacus diam, condimentum cursus semper sit amet, sagittis vitae magna. In a urna a urna interdum dictum. In lectus sem, feugiat et dolor sed, pulvinar egestas nisi. Maecenas sodales ultrices nisl nec condimentum."
    >
      <HeaderSection />
      <LatestInmuebles latestInmuebles={latestInmuebles} />
      <ServicesSection />
      <SalesSection />
      <NewsletterSection />
      <ContactSection />
    </Layout>
  );
}

export async function getStaticProps() {
  const { results } = await getLatestInmuebles();

  return {
    props: {
      latestInmuebles: results,
    },
  };
}
