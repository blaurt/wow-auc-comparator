import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //     const initialProps = await Document.getInitialProps(ctx);
  //     return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
