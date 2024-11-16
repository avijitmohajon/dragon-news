import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-center font-bold pt-3 text-2xl'>Login your account</h2>
                <hr className='w-10/12 mx-auto h-[2px] opacity-40 mt-5 bg-base-300' />
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
               
                    <p className="text-center font-semibold mb-5">Don't Have An Account ?
                         <Link to='/auth/register' className='font-semibold text-red-600 link-hover'> Register</Link>
                    </p>
                
            </div>
        </div>
    );
};

export default Login;