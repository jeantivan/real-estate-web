import React from "react";
import Head from "next/head";

// Layout
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children, titulo, descripcion, currentPage }) {
  return (
    <>
      <Head>
        <title>{titulo} | Avilatek Inmobiliaria</title>
        <meta name="description" content={descripcion} />
      </Head>

      <Navbar currentPage={currentPage} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
