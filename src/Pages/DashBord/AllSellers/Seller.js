import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContext';

const Seller = ({seller , i}) => {

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users' ],
        queryFn: async () => {
            const res = await  fetch( 'https://assignment12-five.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAdmin = id => {
        fetch(`https://assignment12-five.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successful')
                refetch()
            }
        })
    }
    return (
        <tr>
           <th>{i+1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td>{ seller?.verify !== 'verify' && <button onClick={()=> handleMakeAdmin(seller._id)} className='btn btn-xs btn-primary'>Verify</button>}</td>
            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                    
        </tr>
    );
};

export default Seller;