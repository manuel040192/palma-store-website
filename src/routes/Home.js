import React from 'react';
import Header from '../components/Navbar';
import Banner from '../components/Banner';
import ProductTypeCovers from '../components/ProductTypeCovers';

const HomeRoute = () => {
    return (
        <>
            <Header />
            <Banner />
            <ProductTypeCovers />       
        </>
    )
}

export default HomeRoute
