import React from 'react';
import Head from './Head';
import NavBar from './NavBar';
import Search from './Search';
import './Header.css';

const Header = () => {
    return (
        <>
        <Head/>
         <Search/>
         <NavBar/>
        </>
    );
};

export default Header;