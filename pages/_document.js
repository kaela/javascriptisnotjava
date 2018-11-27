import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
// TODO - injectGlobal not working
import { ServerStyleSheet } from "styled-components";

const GA_TRACKING_ID = "UA-61935120-1";
const disableUserTracking = false;

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window['ga-disable-${GA_TRACKING_ID}'] = ${disableUserTracking};
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');`
            }}
            nonce={nonce}
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Dancing+Script|EB+Garamond|Oswald:700"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="static/favicon.ico" />

          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="static/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="static/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="static/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="static/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="static/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="static/apple-touch-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/favicon-16x16.png"
            sizes="16x16"
          />
          <meta name="application-name" content="Autum" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta
            name="msapplication-TileImage"
            content="static/mstile-144x144.png"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
