import React from 'react';
import whitening from '../../../../src/assets/images/whitening.png'
import fluoride from '../../../../src/assets/images/fluoride.png'
import cavity from '../../../../src/assets/images/cavity.png'
import Item from './Item';
import Advertise from '../Advertisa/Advertise';

const Items = () => {
    const cardData =[
        {
            id:1,
            img: fluoride,
            header: 'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:2,
            img: cavity,
            header: 'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:3,
            img: whitening,
            header: 'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <div className='text-center '>
            <Advertise></Advertise>
        </div>
    );
};

export default Items;