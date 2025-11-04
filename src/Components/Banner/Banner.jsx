import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Banner = () => {
    return (
        <div className='container  flext flex-col justify-center items-center p-20 '>
            <h1 className='text-7xl font-bold'>Deal your <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Products</span><br /> 
In a <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Smart</span> way !</h1>
<p className='mt-5 mb-7 text-[#627382]'>SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</p>
       
<div className='flex  items-center justify-center  '>
    <input type="text" placeholder="Search For Products, Categories.." className="input rounded-tl-4xl rounded-bl-4xl w-[500px] " />
  
   <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-[50px] flex justify-center items-center rounded-tr-4xl rounded-br-4xl text-white p-3'>
    <CiSearch />
   </div>
   </div>
  
       
<div className='flex gap-3 justify-center items-center mt-5'>
    <button className='px-1 p-2 rounded-[10px] btn-primary'>Watch All Products</button>
<button className='px-1 p-2 border-gradient rounded-[10px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Post All Products</button>
</div>
</div>
        
    );
};

export default Banner;