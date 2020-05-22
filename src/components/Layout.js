import React from "react";
import Head from "next/head";
import Container from "@material-ui/core/Container";

import Navbar from "./Navbar";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || "Home"} | Avilatek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        {/* <Toolbar /> */}
        <Container>{children}</Container>
      </main>
    </>
  );
}
