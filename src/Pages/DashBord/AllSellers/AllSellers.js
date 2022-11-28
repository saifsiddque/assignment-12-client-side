import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Seller from './Seller';

const AllSellers = () => {
    const sellers = useLoaderData()

    return (
        <div>
<div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                    <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Verification</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <Seller key={seller._id} i={i}  seller={seller}></Seller> )
                            // review.length
                        }
                    
                    
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllSellers;