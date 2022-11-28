import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
// import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {signIn, signInWithGoogle, loading} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
 
   
    const handleLogin = data =>{
        console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
        .then(result=>{
            const user = result.user
            console.log(user);
            navigate(from, {replace: true})
            
        })
        .catch(error =>{
            console.error(error.message)
            setLoginError(error.message)
        })
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            googleSaveUser(user.displayName, user.email)
            navigate(from, {replace: true})

        })
        .catch(error =>{
            console.error(error)
        })
    }

    const googleSaveUser = (name , email ) =>{
        const user = {name , email, role:'buyer' };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(email)
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email")}  type="text"  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password")}  type="password"  className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget Password ?</span></label>
                    </div>
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                    <input type="submit" value={'LogIn'} placeholder="Type here" className=" btn btn-accent w-full " />
                </form>
                <p>New to Doctors Portal? <Link to={'/signup'} className='text-secondary'>Create new account</Link></p>
                <div className=' divider'>OR</div>
                <button className='btn btn-outline w-full' onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;