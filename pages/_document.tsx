import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * This is a document class that contains meta links for our application
 * @return {void}
 */
class MyDocument extends Document {
  /**
   *
   * @return {jsx}
   */
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
        </Head>
        <body className="box-border">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
