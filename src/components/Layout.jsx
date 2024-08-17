import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';
import Navbar from './Navbar';
import Footer from './Footer';
import SiteMetadata from 'types/SiteMetadata';

const Layout = ({ siteMetadata, children }) => (
    <div className="App w-100 h-100 mx-auto shadow-2" style={{ maxWidth: 1800 }}>
        <Head siteMetadata={siteMetadata} />
        <Navbar />
        <main className="font-default text-center">
            {children}
        </main>
        <Footer />
    </div>
);

Layout.propTypes = {
    siteMetadata: PropTypes.instanceOf(SiteMetadata).isRequired,  //Details that go in the head tag, 
    children: PropTypes.any.isRequired
};

export default Layout;