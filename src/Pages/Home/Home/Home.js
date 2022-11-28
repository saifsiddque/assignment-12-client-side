import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Hero from '../Hero/Hero';
import Reviews from '../Reviews/Reviews';
import Items from '../Items/Items';
import Advertise from '../Advertisa/Advertise';

const Home = () => {
    return (
        <div className='mx-5 '>
            <Banner></Banner>
            <Cards></Cards> <br /><br /> <br /> <br />
            <Advertise></Advertise><br /><br />

            <Reviews></Reviews><br /><br />
        </div>
    );
};

export default Home;