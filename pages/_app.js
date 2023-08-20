import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/site.css';
import App, { Container } from 'next/app';
import Layout from '../src/Components/Layout';

 class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    } 
  }

  export default MyApp;