import React from 'react';
import img from '../../../assets/images/treatment.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 p-20'>
                    <img src={img} className=" rounded-lg " alt='' />
                </div>
                <div className='lg:w-1/2 pr-14 bolder'>
                <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;