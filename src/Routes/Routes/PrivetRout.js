import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const PrivetRout = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div className='h-[400px] flex justify-center items-center'><button className="btn loading  ">loading</button></div> 
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={ {from: location} } replace></Navigate>
};

export default PrivetRout;