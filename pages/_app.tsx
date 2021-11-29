import React from 'react';
import type { AppProps, AppContext } from 'next/app';
import { wrapper } from '../redux/store';
import Header from '@components/Header/Header';

// import { ThemeProvider } from 'styled-components';
// import { useSelector } from 'react-redux';

const _App = ({ Component, pageProps }: AppProps) => {
    // const { theme } = useSelector((state: { GeneralReducer: {} }) => state.GeneralReducer);

    return (
        // <ThemeProvider theme={theme}>
        <>
            <Header />
            <Component {...pageProps} />
        </>
        // </ThemeProvider>
    );
};

_App.getInitialProps = async ({ Component, ctx }: AppContext) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
};

export default wrapper.withRedux(_App);
