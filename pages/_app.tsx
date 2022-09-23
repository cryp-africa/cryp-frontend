import imagesLoaded from "imagesloaded";
import type { AppProps } from "next/app";
import Router from "next/router";
import Script from "next/script";
import NProgress from "nprogress";
import React from "react";

import "../styles/globals.css";

import "nprogress/nprogress.css";
import LoadingScreen from "@components/atoms/LoadingScreen/LoadingScreen";

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

  const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   const preloadImages = new Promise((resolve, reject) => {
  //     // if (typeof window !== "undefined") {
  //     imagesLoaded(document.querySelectorAll("img"), { background: true }, resolve);
  //     // }
  //   });
  //   const allDone = [preloadImages];
  //   Promise.all(allDone).then(() => {
  //     setLoading(false);
  //   });
  // });

  const preloadImages = new Promise((resolve, reject) => {
    if (typeof window !== "undefined") {
      imagesLoaded(document.querySelectorAll("img"), { background: true }, resolve);
    }
  });
  const allDone = [preloadImages];
  Promise.all(allDone).then(() => {
    setLoading(false);
  });

  return (
    <>
      {!loading ? (
        <>
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
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default MyApp;
