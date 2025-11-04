import React, { use } from 'react';
import LatestProduct from './LatestProduct';

const LatestProducts = ({latestProductsPromise}) => {


const products = use(latestProductsPromise)
console.log(products)
    return (
        <div className='grid grid-cols-3 gap-4 mx-auto'>
            {
                products.map(product => <LatestProduct key={product._id} product={product}></LatestProduct> )
            }
        </div>
    );
};

export default LatestProducts;