import { Layout } from "@/components";
import { HeaderSection } from "@/layouts/home";

export default function Home() {
  return (
    <Layout
      currentPage={"Inicio"}
      titulo="Inicio"
      description="Maecenas quis imperdiet ligula. Phasellus convallis urna nunc, sit amet posuere ex gravida at. Nam ac interdum odio, a condimentum orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elit risus. Nulla lacus diam, condimentum cursus semper sit amet, sagittis vitae magna. In a urna a urna interdum dictum. In lectus sem, feugiat et dolor sed, pulvinar egestas nisi. Maecenas sodales ultrices nisl nec condimentum."
    >
      <HeaderSection />
    </Layout>
  );
}
