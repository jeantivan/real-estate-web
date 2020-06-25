import Head from "next/head";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function Layout({ children, titulo, descripcion }) {
  return (
    <>
      <Head>
        <title>{titulo} | Avilatek</title>
        <meta name="description" content={descripcion} />
      </Head>
      <main>
        <Container>
          <Box mt={2} minHeight="55vh">
            {children}
          </Box>
        </Container>
      </main>
    </>
  );
}
