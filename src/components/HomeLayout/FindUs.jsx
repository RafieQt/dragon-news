import React from 'react';
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiFacebook } from 'react-icons/ci';
import { FiInstagram } from 'react-icons/fi';
const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold text-xl pb-5 pt-8'>Find Us on</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item w-full bg-white text-base text-accent font-medium justify-start py-7"><CiFacebook size={24} />
                    Facebook</button>
                <button className="btn join-item w-full bg-white text-base text-accent font-medium justify-start py-7"><AiFillTwitterCircle size={24} /> Twitter</button>
                <button className="btn join-item w-full bg-white text-base text-accent font-medium justify-start py-7"><FiInstagram size={24} /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;