import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/UserContext';


const BookingModal = ({product}) => {
    const {user} = useContext(AuthContext)    
    // const handleBooking = event =>{
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const price = form.productPrice;
    //     const email = form.email.value;
    //     const meetingLocation = form.meetingLocation.value;
    //     const phone = form.phone.value;
    //     const booking = {
    //         // product: product.name,
    //         buyer: name,
    //         email,
    //         price,
    //         phone,
    //         meetingLocation,

    //     };
        

    //     fetch('http://localhost:5000/bookings', {
    //         method: 'POST', 
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(booking)
    //     } )
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.acknowledged){
    //             alert('Product Added Successfully ')
    //             event.target.reset()

    //         }
    //     })

    // }
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.productPrice.value;
        const product =  form.productName.value
        const email = form.email.value;
        const meetingLocation = form.meetingLocation.value;
        const phone = form.phone.value;
        const booking = {
             product,
            buyer: name,
            email,
            price,
            phone,
            meetingLocation,
        };

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Booking Confirmed')

        })

    }
    const handleDelete = product =>{
        const notify = () => toast("'Product Booking Successfully.'");
            // console.log('Deleting user with id:', user._id)
            fetch(`http://localhost:5000/products/${product._id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
            })
        notify()
        
    }
    return (

        <>


        <input type="checkbox" id='Booking Model' className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor='Booking Model' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">{product.productName}</h3>
            <form onSubmit={handleBooking} className='grid grid-col-1 gap-3 mt-10' >
                <input name='name' disabled defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input w-full input-bordered" />
                <input name='email' disabled defaultValue={user?.email} type="email" placeholder="Email Address" className="input w-full input-bordered" />
                <input name='productName' disabled defaultValue={product.productName} type="email" placeholder="Item Name" className="input w-full input-bordered" />
                <input name='productPrice' disabled defaultValue={product.price} type="email" placeholder="Item Name" className="input w-full input-bordered" />
                <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                <input name='meetingLocation' type="text" placeholder="Location" className="input w-full input-bordered" />
                <input onClick={()=>handleDelete(product)} type="submit" placeholder="Type here" className=" btn btn-accent w-full " />
            </form>
        </div>
        </div>
        </>
    );
};

export default BookingModal;