import React from 'react';
import { Link } from 'react-router';

const LatestProduct = ({product}) => {

const {_id,title, price_min, price_max,} = product;
//  email, category, created_at, image, status, location, seller_image, seller_name, condition, usage, description, seller_contact
console.log(_id)
    return (
       <div className="card bg-base-100 shadow-sm ">
  <figure className=' pt-2'>
    <img 
    className='w-[400px] h-[400px]'
      src='https://i.ibb.co.com/DP94K0Mg/pexels-skyler-ewing-266953-4597759.jpg'
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Price: ${price_min}-{price_max}</p>
    <div className="">
     <Link to={`/productsDetails/${_id}`}> <button className="btn w-full btn-primary">View Details</button></Link>
    </div>
  </div>
</div>

    );
};

export default LatestProduct;