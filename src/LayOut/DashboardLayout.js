import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import useAdmin from '../hooks/useAdmin';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
    const use= 'sdds' 
    // const [isAdmin] = useAdmin(user?.email)
    const {user, logOut} = useContext(AuthContext)
    const [users, setusers] = useState([]);


    useEffect(()=>{
        fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then(res => res.json())
        .then(data=> setusers(data))
    },[user?.email])
    console.log(users[0]);
    const adminMenu = <>
        <li><Link to={'/dashboard/allSellers'} className="">All Sellers</Link></li>
        <li><Link to={'/dashboard/allBuyers'}>All Buyers</Link></li>
                            
    </>
    const sellerMenu = <>
        <li><Link to={'/dashboard/addProduct'}>Add A product</Link></li>
        <li><Link to={`/dashboard/myProduct/${users[0]?.email}`}>My Products</Link></li>
                            
    </>
    const buyerMenu = <>
        <li><Link to={'/dashboard/myOrders'}>My Orders</Link></li>
        
                            
    </>
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                
                </div> 
                <div className="drawer-side bg-accent">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80  text-base-content bg-accent text-white">
                     {users[0]?.role==='admin' && adminMenu}
                     {users[0]?.role==='seller' && sellerMenu}
                     {users[0]?.role==='buyer' && buyerMenu}
                    </ul>
                
                </div>
                </div>
        </div>
    );
};

export default DashboardLayout;