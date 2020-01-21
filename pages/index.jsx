import React from 'react';
import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Wiki</title>
    </Head>

    <h1>Hello world!</h1>

    <style jsx global>{`
      body,
      html,
      #__next {
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        background-color: #f2f2f2;
      }
    `}</style>
  </>
);

export default Home;
