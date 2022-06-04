import { Layout } from "@/components";
import { HeaderSection } from "@/layouts/home";
import { LatestInmuebles } from "@/layouts/home/latest";
import { getLatestInmuebles } from "@/lib/api";

export default function Home({ latestInmuebles }) {
  return (
    <Layout
      currentPage={"Inicio"}
      titulo="Inicio"
      descripcion="Maecenas quis imperdiet ligula. Phasellus convallis urna nunc, sit amet posuere ex gravida at. Nam ac interdum odio, a condimentum orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elit risus. Nulla lacus diam, condimentum cursus semper sit amet, sagittis vitae magna. In a urna a urna interdum dictum. In lectus sem, feugiat et dolor sed, pulvinar egestas nisi. Maecenas sodales ultrices nisl nec condimentum."
    >
      <HeaderSection />
      <LatestInmuebles latestInmuebles={latestInmuebles} />
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
