import React, { useState } from 'react';
import BookingModal from './BookingModal';

const Product = ({product}) => {
    const [item , setItem] = useState(product)
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-10 flex flex-col lg:flex-row  ">
            <figure className='lg:w-1/3 w-full '><img src={product.img} alt="Movie"/></figure>
            <div className="card-body lg:w-1/2 w-full ">
                <h2 className="card-title">{product.productName} , <p className=' underline'>${product.price}</p></h2>
                <div className="overflow-x-auto">
                    <p>{product.description}</p>
        <table className="table w-full ">
           
            <tbody>
            <tr>
                <td>Seller Name</td>
                <td>:</td>
                <td>{product.sellerName}</td>
            </tr>
            <tr>
                <td>Location</td>
                <td>:</td>
                <td>{product.address}</td>
            </tr>
            <tr>
                <td>Condition</td>
                <td>:</td>
                <td>{product.condition}</td>
            </tr>
            <tr>
                <td>Original Price</td>
                <td>:</td>
                <td>${product.originalPrice}</td>
            </tr>
            <tr>
                <td>Years of Use</td>
                <td>:</td>
                <td>{product.yearOfPurchase}</td>
            </tr>
            <tr>
                <td>Posted</td>
                <td>:</td>
                <td>{product.postingTime}</td>
            </tr>
            </tbody>
        </table>
        </div>
                <div className="card-actions justify-end">
                <label htmlFor='Booking Model' className="btn">Book Now</label>

                </div>
            </div>
            <BookingModal product={item}></BookingModal>

          
        </div>
    );
};

export default Product;