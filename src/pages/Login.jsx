import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl py-5 px-3">
                <h2 className='font-semibold text-3xl text-center'>Login your account</h2>
                <hr className='border-base-200 w-[85%] mx-auto mt-3'/>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Email</label>
                        <input type="email" className="input w-full" placeholder="Email" />
                        <label className="label font-bold text-lg">Password</label>
                        <input type="password" className="input w-full" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </div>
                <h2 className='text-center font-semibold'>Don't Have an Account? <Link className='text-secondary ' to="/auth/register">Register</Link></h2>
            </div>
        </div>
    );
};

export default Login;