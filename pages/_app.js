import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../components/theme';
import Layout from '../components/layout';
import db from '../services/db';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [connected, setConnected] = useState(false);

  async function initDB() {
    await db.init();
    setConnected(true);
  }

  useEffect(() => {
    if (!connected) {
      initDB();
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Speedwagon Loot Logs</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <Layout connected={connected}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
