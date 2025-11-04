import React, { use } from 'react';
import AllProduct from './AllProduct';

const productsPromise = fetch('http://localhost:3000/products').then(res => res.json())


const AllProducts = () => {

const products = use(productsPromise)


    return (
        <div>
            <h3 className='text-4xl font-bold text-center my-5'>All products</h3>
            <div className='grid grid-cols-3 gap-3 '>
                {
                    products.map(product => <AllProduct key={product._id} product={product}></AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;