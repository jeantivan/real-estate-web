import PropTypes from "prop-types";
import Head from "next/head";
import Router from "next/router";

// Material-UI config
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, IconButton } from "@material-ui/core/";
import theme from "../theme";

// FontAwesome config
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// Nprogress config
import NProgress from "nprogress";
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// Notistack
import { SnackbarProvider } from "notistack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Layout
import { Navbar, Footer } from "../components";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Avilatek</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
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
              <FontAwesomeIcon icon={faTimes} />
            </IconButton>
          )}
        >
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SnackbarProvider>
      </ThemeProvider>

      {/* Nprogress Styles */}
      <style jsx global>
        {`
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
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
