import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { json, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
// import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const {createUser, updateUserProfile, signInWithGoogle} = useContext(AuthContext)
    // const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();
    // if(token){
    //     navigate('/')
    // }
    
    const handleSignup = data =>{
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const user = result.user
            console.log(user);
            const profile = {
                displayName:data.name,
            }
            updateUserProfile(profile)
            .then(result => {
                console.log(result);
                saveUser(data.name, data.email , data.role)
                toast('User added successfully ')
                navigate('/')

            })
            .catch(error => {
                console.error(error)
            })
        })
        .catch(error =>{
            console.error(error)
        })
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            googleSaveUser(user.displayName, user.email)
            toast('User added successfully ')
                navigate('/')
        })
        .catch(error =>{
            console.error(error)
        })
    }

    const saveUser = (name , email, role ) =>{
        const user = {name , email, role };
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
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name")}  type="text"  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email")}  type="text"  className="input input-bordered w-full max-w-xs" />
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Select Your Account Type</span></label>
                        <select {...register("role")}  className="input input-bordered w-full max-w-xs">
                            <option>seller</option>
                            <option>buyer</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password")}  type="password"  className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget Password ?</span></label>
                    </div>
                    
                    <input type="submit" value={'Sign Up'} placeholder="Type here" className=" btn btn-accent w-full " />
                </form>
                <p>Already have an account?<Link to={'/login'} className='text-secondary'>Please Login</Link></p>
                <div className=' divider'>OR</div>
                <button className='btn btn-outline w-full' onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;