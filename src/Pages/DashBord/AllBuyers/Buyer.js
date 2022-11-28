import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Buyer = ({buyer , i , handleDelete}) => {

    
    return (
        <tr>
           <th>{i+1}</th>
            <td>{buyer.name}</td>
            <td>{buyer.email}</td>
            <td><button onClick={() => handleDelete(buyer)} className='btn btn-xs btn-danger'>Delete</button></td>
                    
        </tr>
    );
};

export default Buyer;