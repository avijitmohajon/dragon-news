import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='font-poppins bg-base-200'>
            <div className='bg-base-100 w-full'>
                <header className='py-5 w-11/12 mx-auto'>
                    <Navbar />
                </header>
            </div>
            <Outlet />
        </div>
    );
};

export default AuthLayout;