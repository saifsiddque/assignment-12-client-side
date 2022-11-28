import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useAdmin from '../../hooks/useAdmin';

const AdminRout = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()
    const [users, setusers] = useState([]);


    useEffect(()=>{
        fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then(res => res.json())
        .then(data=> setusers(data))
    },[user?.email])
    console.log(users[0]);

    if(loading){
        return <div className='h-[400px] flex justify-center items-center'><button className="btn loading  ">loading</button></div> 
    }
    if(users[0]?.role==='admin'){
        return children;
    }
    return <Navigate to='/login' state={ {from: location} } replace></Navigate>
};

export default AdminRout;