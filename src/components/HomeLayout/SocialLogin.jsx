import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";  

const SocialLogin = () => {
    return (
        <div>
            <p className='font-bold'>Login with-</p>
            <div className='space-y-3'>
                <button className='btn btn-outline btn-secondary w-full'><FaGoogle size={20}/>Login with Google</button>
                <button className='btn btn-outline btn-primary   w-full'><FaGithub size={20}/>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;