import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

class Layout extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <>
            <Header />
            <Menu />
             {children}
             <Footer />
            </>
        )
    }
}

export default Layout;


