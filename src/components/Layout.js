import Head from "next/head";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

export default function Layout({ children, titulo, descripcion }) {
  return (
    <>
      <Head>
        <title>{titulo} | Avilatek</title>
        <meta name="description" content={descripcion} />
      </Head>
      <main>
        <Toolbar />
        <Container>
          <Box mt={3} minHeight="55vh">
            {children}
          </Box>
        </Container>
      </main>
    </>
  );
}
