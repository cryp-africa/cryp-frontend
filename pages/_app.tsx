import type { AppProps } from "next/app";
import Router from "next/router";
import Script from "next/script";
// import { GoogleAnalytics } from "nextjs-google-analytics";
import NProgress from "nprogress";
import React from "react";

import "../styles/globals.css";

import "nprogress/nprogress.css";

/**
 * App wrapper for the whole application
 * @param {NextComponentType<NextPageContext, any, {}>} Component
 * @param {any} pageProps
 * @return {AppProps}
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  NProgress.configure({
    easing: "ease-out",
    minimum: 0.2,
  });

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  //   <!-- Google tag (gtag.js) -->
  // <script async src="https://www.googletagmanager.com/gtag/js?id=G-4V2QZ9EVWQ"></script>
  // <script>
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());

  //   gtag('config', 'G-4V2QZ9EVWQ');
  // </script>

  return (
    <>
      {/* <GoogleAnalytics trackPageViews /> */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4V2QZ9EVWQ" strategy="lazyOnload" />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4V2QZ9EVWQ');
          `}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
