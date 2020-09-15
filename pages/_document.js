import Document, { Head, Main, NextScript, Html } from "next/document";

class MyDocument extends Document{
    render() {
        return(
            <Html lang="en-US">
                <Head>
                    <link rel="manifest" href="/static/manifest.json" />

                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="application-name" content="hacker-next" />
                    <meta name="apple-mobile-web-app-title" content="hacker-next" />
                    <meta name="theme-color" content="#f60" />
                    <meta name="msapplication-navbutton-color" content="#f60" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="msapplication-starturl" content="/" />

                    <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/pwa-512x512.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/pwa-512x512.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/pwa-192x192.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/icons/pwa-192x192.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
