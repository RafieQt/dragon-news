import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const [nameError, setNameError] = useState("");
    const [passError, setPassError] = useState("");
    const navigate = useNavigate();

    const { createUser, setUser, updateUser } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        if (name.length < 5) {
            setNameError("Name is too Short!");
        } else {
            setNameError("");
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;

                updateUser({ displayName: name, photoURL: url }).then(() => {

                    setUser({...user, displayName: name, photoURL: url});
                    navigate("/");
                    
                }).catch((error) => {
                    console.log(error);
                    setUser(user);
                });

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setPassError(errorCode);
            })
    }
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl py-5 px-3">
                    <h2 className='font-semibold text-3xl text-center'>Login your account</h2>
                    <hr className='border-base-200 w-[85%] mx-auto mt-3' />
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label font-bold text-lg">Your Name</label>
                            <input name="name" type="text" className="input w-full" required placeholder="Enter Your Name" />
                            {nameError && <p className='text-secondary'>{nameError}</p>}
                            <label className="label font-bold text-lg">Photo URL</label>
                            <input name="url" type="text" className="input w-full" required placeholder="Enter Your Photo URL" />
                            <label className="label font-bold text-lg">Email</label>
                            <input name="email" type="email" className="input w-full" required placeholder="Email" />
                            <label className="label font-bold text-lg">Password</label>
                            <input name="password" type="password" className="input w-full" required placeholder="Password" />
                            {passError && <p className='text-secondary'>{passError}</p>}

                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <h2 className='text-center font-semibold'>Already Have an Account? <Link className='text-secondary ' to="/auth/login">Login</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Register;