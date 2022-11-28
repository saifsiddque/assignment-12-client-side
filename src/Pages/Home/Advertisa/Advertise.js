import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Product from '../../Products/Product';
const Advertise = () => {
    const [advertise, setAdverise] = useState([]);


    useEffect(()=>{
        fetch(`https://assignment12-five.vercel.app/products?status=advertise`)
        .then(res => res.json())
        .then(data=> setAdverise(data))
    },[])
    if(advertise.length < 1){
        return <></>
    }      
            
    return (   
        <div className='p-10'>
            <h2 className='text-center text-4xl font-bold'>Top Products</h2> <br /><br />
            
            {
                advertise.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Advertise;