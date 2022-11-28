import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const MyProducts = () => {
    const sellerProduct = useLoaderData()
    console.log(sellerProduct);
    const handleDelete = product =>{
        const notify = () => toast("'Product Deleted Successfully.'");
        const agree = window.confirm(`Are you sure , you want to delete this product`)
        if(agree){
            // console.log('Deleting user with id:', user._id)
            fetch(`http://localhost:5000/products/${product._id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
            })
        }notify()
        
    }
    const handleAdvertise = product =>{
        const notify = () => toast("'Advertise Added Successfully.'");
        const agree = window.confirm(`Are you sure , you want to Advertise this product`)
        if(agree){
            // console.log('Deleting user with id:', user._id)
            fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Advertise Successful')
            }
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
                        <th>Status</th>
                        <th>Advertise</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                           sellerProduct.map((product, i) => <tr>
                           <th>{i+1}</th>
                            <td>{product.productName}</td>
                            <td>{product.status==="sold" ? product.status : 'Available' }</td>
                            <td>{product.status==="advertise"  ? <> </> :<button onClick={() => handleAdvertise(product)} className='btn btn-xs btn-danger'>Advertise</button>} </td>
                            <td><button onClick={() => handleDelete(product)} className='btn btn-xs btn-danger'>Delete</button></td>
                                    
                        </tr> )
                            // review.length
                        }
                    
                    
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyProducts;