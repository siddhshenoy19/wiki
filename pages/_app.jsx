import React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

const COLOUR = '#161f2b';
const YEAR = new Date().getFullYear();
const SEO = {
  title: 'Documentation | open.mp',
  titleTemplate: '%s | Southclaws',
  description: 'The open.mp API Documentation',
  canonical: 'https://wiki.open.mp',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://wiki.open.mp',
    images: [
      {
        url: '/logo-dark-bg.png',
        width: 600,
        height: 600,
        alt: 'open.mp logo (dark)'
      },
      {
        url: '/wordmark-coloured.png',
        width: 1660,
        height: 560,
        alt: 'open.mp wordmark (coloured)'
      }
    ]
  }
};

export default ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content={COLOUR} />
        <meta name="msapplication-TileColor" content={COLOUR} />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content={COLOUR} />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      <style jsx global>{`
        body,
        html,
        #__next {
          margin: 0 0 0 0;
          padding: 0 0 0 0;
          background-color: ${COLOUR};
        }
      `}</style>
    </>
  );
};
