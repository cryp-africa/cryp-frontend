import type { AppProps } from "next/app";
import Router from "next/router";
import { GoogleAnalytics } from "nextjs-google-analytics";
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

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
