import React from 'react';
import Review from './Review';
import reviewer from '../../../../src/assets/images/people1.png'

const reviewer2 ='https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13992.jpg?w=740&t=st=1669344256~exp=1669344856~hmac=9fbf2eb6dbf31f8347d53b075c0d2f61d03cfe17aa8c01e006de713597f0723c'
const reviewer3 ='https://lh3.googleusercontent.com/a/ALm5wu2uM9i9diTw4-TIspOzMprnpykPxxfq4m459ULw=s96-c'
const Reviews = () => {
    const cardData =[
        {
            id:1,
            img: reviewer,
            header: 'Winson Herry',
            address:"Roungpur",
            description:'This side to too much easy for buy and sell . Anyone can trust on this side .  '
        },
        {
            id:2,
            img: reviewer2,
            header: 'Abu Talha',
            address:"Dhaka",
            description:'I had a good experience on this side . I was buy a phone from this side and I am satisfied with this phone '
        },
        {
            id:3,
            img: reviewer3,
            header: 'Abu Talha',
            address:"Dhaka",
            description:'For few days I was trying for sell some phone . for this side now I have a good deal . Thank You Mobile Mart '
        }]
    return (
        <div className='text-left mt-10'>
            <h2 className='text-center text-4xl font-bold'>REVIEWS</h2> <br /><br />
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5'>
                {
                    cardData.map(card =><Review key={card.id} card={card}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;