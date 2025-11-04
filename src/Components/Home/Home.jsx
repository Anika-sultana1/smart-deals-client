import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';
import Banner from '../Banner/Banner';

const latestProductsPromise = fetch('http://localhost:3000/latest-products')
.then(res=> res.json())

const Home = () => {
    return (
        <div className='bg-[#D9D9D9]'>
           <Banner></Banner>
           <h1 className='mt-10 mb-5 text-4xl font-bold text-center'>Recent <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Products</span></h1>
            <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
        </div>
    );
};

export default Home;