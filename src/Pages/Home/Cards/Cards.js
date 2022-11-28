import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons/marker.svg'
import icon3 from '../../../assets/icons/phone.svg'

const Cards = () => {
    return (
        <div className='text-center text-4xl font-bold'>
            <h2 className='text-center text-4xl font-bold'>CATEGORIES</h2> <br /><br />
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5'>
                <div className="card text-center text-white md:card-side bg-[#000000] py-10">
                    <Link to={'/categories/samsung'} className="text-center m-auto"><h2 className=" text-center m-auto text-5xl">SAMSUNG</h2></Link>
                </div>
                <div className="card text-center text-white md:card-side bg-[#FF6700] py-10">
                    <Link to={'/categories/xiaomi'} className="text-center m-auto"><h2 className=" text-center m-auto text-5xl">Xiaomi</h2></Link>
                </div>
                <div className="card text-center text-white md:card-side bg-[#0072B8] py-10">
                    <Link to={'/categories/vivo'} className="text-center m-auto"><h2 className=" text-center m-auto text-5xl">vivo</h2></Link>
                </div>
            </div>
        </div>
        
    );
};

export default Cards;