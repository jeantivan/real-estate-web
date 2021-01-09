import Head from "next/head";

export function Layout({ children, titulo, descripcion }) {
  return (
    <>
      <Head>
        <title>{titulo} | Avilatek</title>
        <meta name="description" content={descripcion} />
      </Head>
      <main>{children}</main>
    </>
  );
}
