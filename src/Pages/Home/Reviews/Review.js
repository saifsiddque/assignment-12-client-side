import React from 'react';

const Review = ({card}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='my-5'>{card.description}</p>
                <div className="card-actions justify-start">
                    <div className='flex items-center gap-5 '>
                        <div className="avatar ">
                            <div className="w-10 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                <img src={card.img}  alt=''/> 
                            </div>
                        </div>
                        <div>
                            <span className=' font-bold'>{card.header}</span> <br /> 
                            <span className='text-xs'>{card.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Review;