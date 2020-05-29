import React, {
  Fragment,
  // TODO useState,
  // useEffect,
} from 'react';
import { Provider } from 'react-redux';
import withReduxSaga from 'next-redux-saga';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import configureStore from 'redux/store';
// TODO import Router from 'next/router';

const App = ({
  Component,
  pageProps,
  store,
}) => {
  // TODO const [isPageLoaded, setPageLoad] = useState(true);

  // useEffect(() => {
  //   const handleRouteChangeStart = () => setPageLoad(false);
  //   const handleRouteChangeComplete = () => setPageLoad(true);

  //   Router.events.on('routeChangeStart', handleRouteChangeStart);
  //   Router.events.on('routeChangeComplete', handleRouteChangeComplete);
  //   return () => {
  //     Router.events.off('routeChangeStart', handleRouteChangeStart);
  //     Router.events.off('routeChangeComplete', handleRouteChangeComplete);
  //   };
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>JSON Animation</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed:100,300,400,800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  Component.getInitialProps && (pageProps = await Component.getInitialProps({ ctx }));
  return { pageProps };
};

export default withRedux(configureStore)(withReduxSaga(App));
