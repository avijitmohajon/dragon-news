import React from 'react';
import { Link } from 'react-router-dom';
// import userIcon from '../assets/user.png'
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className=""></div>
        
            <div className="space-x-5 text-base-400 opacity-70">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>

            <div className="flex gap-3 items-center">
                {/* <img className='login w-12 h-12 ' src={userIcon}/> */}
                <button ><FaUserCircle className='w-12 h-12'></FaUserCircle></button>
                <Link to="/auth/login" className='btn btn-neutral'>Login</Link >
            </div>

        </div>
    );
};

export default Navbar;