import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { signIn } = use(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                const user = res.user;
                navigate(`${location.state ? location.state : "/"}`)
                // console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode);
            });
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl py-5 px-3">
                <h2 className='font-semibold text-3xl text-center'>Login your account</h2>
                <hr className='border-base-200 w-[85%] mx-auto mt-3' />
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Email</label>
                        <input name='email' type="email" className="input w-full" placeholder="Email" required/>
                        <label className="label font-bold text-lg">Password</label>
                        <input name='password' type="password" className="input w-full" placeholder="Password" required/>
                        {error && <p className='text-secondary'>{error}</p>}
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <h2 className='text-center font-semibold'>Don't Have an Account? <Link className='text-secondary ' to="/auth/register">Register</Link></h2>
            </div>
        </div>
    );
};

export default Login;