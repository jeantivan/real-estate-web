import React from "react";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || "Home"} | Avilatek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Toolbar />
        <Container>
          <Box mt={3}>{children}</Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}
