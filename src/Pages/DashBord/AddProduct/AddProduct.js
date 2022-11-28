import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/UserContext';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const current = new Date().toString();
    const [product, setProduct] = useState([])
    const handleAddUser = (event) =>{
        event.preventDefault();
        console.log(product);
        fetch('https://assignment12-five.vercel.app/products', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        } )
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Product Added Successfully ')
                event.target.reset()

            }
        })
    }
    const handleInputBlur = (event) =>{
        const field = event.target.name;
        const value = event.target.value;
        const newService = {...product};
        newService[field] = value;
        setProduct(newService) 
    }
    return (
        <div>
            <form onSubmit={handleAddUser} className='p-5 m-5 bg-accent'>
                <div className="mb-6">
                    <label for="productName" className="block mb-2 text-sm font-medium text-white">Product Name</label>
                    <input onBlur={handleInputBlur} name='productName' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-white">Price</label>
                    <input onBlur={handleInputBlur} name='price' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-white">Original Price</label>
                    <input onBlur={handleInputBlur} name='originalPrice' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                        <label className="label"><span className="block mb-2 text-sm font-medium text-white">Condition</span></label>
                        <select onBlur={handleInputBlur} name='condition' className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none">
                            <option>excellent</option>
                            <option>good</option>
                            <option>fair</option>
                        </select>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-white">Image URL</label>
                    <input onBlur={handleInputBlur} name='img' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-white">Mobile Number</label>
                    <input onBlur={handleInputBlur} name='mobileNumber' type={'number'}  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-white">Seller Name</label>
                    <input onBlur={handleInputBlur} name='sellerName' type={'text'} value={user?.displayName}  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                    <label for="serviceEmail" className="block mb-2 text-sm font-medium text-white">Seller Name</label>
                    <input onBlur={handleInputBlur} name='email' type={'email'} value={user?.email}  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                        <label className="label"><span className="block mb-2 text-sm font-medium text-white">Address</span></label>
                        <select onBlur={handleInputBlur} name='address' className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none">
                            <option>Barishal</option>
                            <option>Chattogram</option>
                            <option>Dhaka</option>
                            <option>Khulna</option>
                            <option>Rajshahi</option>
                            <option>Rangpur</option>
                            <option>Mymensingh</option>
                            <option>Sylhet</option>
                        </select>
                </div>
                <div className="mb-6">
                        <label className="label"><span className="block mb-2 text-sm font-medium text-white">Product Category</span></label>
                        <select onBlur={handleInputBlur} name='category' className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none">
                            <option>samsung</option>
                            <option>xiaomi</option>
                            <option>vivo</option>
                        </select>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-white">Year Of Using</label>
                    <input onBlur={handleInputBlur} name='yearOfPurchase' type={'number'}  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-white">Posting Time</label>
                    <input onBlur={handleInputBlur} name='postingTime'  value={current}  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-white">Description</label>
                    <textarea onBlur={handleInputBlur} name='description' class="textarea textarea-bordered h-24  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" ></textarea>
                </div>
                <button type="submit" className=" text-white border border-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-center">POST</button>
            </form>
        </div>
    );
};

export default AddProduct;