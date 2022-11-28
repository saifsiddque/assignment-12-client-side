import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen  ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src='https://t3.ftcdn.net/jpg/02/27/62/44/240_F_227624472_gdh9pN8OvFFwiUcUjM8VyUP9LLDG0NfX.jpg' alt='' className="lg:w-1/2 rounded-lg " />
                <div>
                <h1 className="text-5xl font-bold">Mobile Mart!</h1>
                <p className="py-6">Buy and Sell you phone in best price. also please login for the better experiences and more access..   </p>
                <button className="btn btn-accent text-white "><Link>Log In</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;