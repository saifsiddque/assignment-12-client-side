import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)
    const [users, setusers] = useState([]);


    useEffect(()=>{
        fetch(`https://assignment12-five.vercel.app/users?email=${user?.email}`)
        .then(res => res.json())
        .then(data=> setusers(data))
    },[user?.email])
    console.log(users[0]);

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch((err) => {console.log(err)})
    } 

    const menuItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'about'}>About</Link></li>
        {
            user?.uid ?
            <>
            <li><Link to={`/dashboard`} >Dashboard</Link></li>
            <li><button onClick={handleLogOut}>Sign out</button></li> 
            </>: 
            <li><Link to={'/login'}>Login</Link></li>
        }                       
    </>
    return (
        <div>
            <div className="navbar bg-accent text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52">
                        {menuItems}
                    </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Mobile Mart</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                </div>
        </div>
    );
};

export default NavBar;