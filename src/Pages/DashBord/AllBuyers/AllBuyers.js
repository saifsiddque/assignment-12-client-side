import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Buyer from './Buyer';

const AllBuyers = () => {
    const buyers = useLoaderData()


    const handleDelete = user =>{
        const notify = () => toast("'Review Deleted Successfully.'");
        const agree = window.confirm(`Are you sure , you want to delete ${user.name}`)
        if(agree){
            // console.log('Deleting user with id:', user._id)
            fetch(`https://assignment12-five.vercel.app/users/${user._id}`,{
                method: 'DELETE'
            }) 
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
            })
        }notify()
        
    }
    return (
        <div>
<div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                    <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                           buyers.map((buyer, i) => <Buyer key={buyer._id} i={i} handleDelete={handleDelete}   buyer={buyer}></Buyer> )
                            // review.length
                        }
                    
                    
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllBuyers;