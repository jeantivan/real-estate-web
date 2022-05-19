import PropTypes from "prop-types";
import Head from "next/head";
import Router from "next/router";
import React from "react";

// Material-UI config
import { CssBaseline, ThemeProvider, IconButton } from "@mui/material/";
import theme from "@/utils/theme";

// Nprogress config
import NProgress from "nprogress";
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// Notistack
import { SnackbarProvider } from "notistack";
import { Close } from "@mui/icons-material";

// Create Emotion Cache
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/utils/createEmotionCache";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Layout
import { Navbar, Footer } from "@/components";

export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Avilatek Inmobiliaria</title>
        <meta
          name="description"
          content={
            "Maecenas quis imperdiet ligula. Phasellus convallis urna nunc, sit amet posuere ex gravida at. Nam ac interdum odio, a condimentum orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elit risus. Nulla lacus diam, condimentum cursus semper sit amet, sagittis vitae magna. In a urna a urna interdum dictum. In lectus sem, feugiat et dolor sed, pulvinar egestas nisi. Maecenas sodales ultrices nisl nec condimentum."
          }
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <SnackbarProvider
          ref={notistackRef}
          action={(key) => (
            <IconButton
              disableRipple
              size="small"
              style={{ color: "white" }}
              aria-label="Cerrar"
              onClick={onClickDismiss(key)}
            >
              <Close />
            </IconButton>
          )}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SnackbarProvider>
      </ThemeProvider>

      {/* Nprogress Styles and Grid Layout */}
      <style jsx global>
        {`
          html,
          body {
            height: 100%;
          }
          body > #__next {
            height: 100%;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
              "header"
              "main"
              "footer";
          }

          header {
            grid-area: header;
          }
          main {
            grid-area: main;
          }

          footer {
            grid-area: footer;
          }

          /* Make clicks pass-through */
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: #2196f3;

            position: fixed;
            z-index: 9999;
            top: 0;
            left: 0;

            width: 100%;
            height: 2px;
          }

          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #2196f3, 0 0 5px #2196f3;
            opacity: 1;

            -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
          }

          /* Remove these to get rid of the spinner */
          #nprogress .spinner {
            display: block;
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px;
          }

          #nprogress .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;

            border: solid 2px transparent;
            border-top-color: #2196f3;
            border-left-color: #2196f3;
            border-radius: 50%;

            -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
          }

          .nprogress-custom-parent {
            overflow: hidden;
            position: relative;
          }

          .nprogress-custom-parent #nprogress .spinner,
          .nprogress-custom-parent #nprogress .bar {
            position: absolute;
          }

          @-webkit-keyframes nprogress-spinner {
            0% {
              -webkit-transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
            }
          }
          @keyframes nprogress-spinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  emotionCache: PropTypes.object,
};
