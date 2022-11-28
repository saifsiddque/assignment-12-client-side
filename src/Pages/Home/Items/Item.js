import React from 'react';

const Item = ({card}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={card.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{card.header}</h2>
            <p>{card.description}</p>
            
        </div>
        </div>
    );
};

export default Item;