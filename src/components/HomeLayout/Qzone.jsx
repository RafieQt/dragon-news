import React from 'react';
import swim from '../../assets/swimming.png'
import classroom from '../../assets/class.png'
import play from '../../assets/playground.png'



const Qzone = () => {
    return (
        <div>
            <div className='mt-5 bg-base-200 p-3'>
                <h2 className='font-semibold text-xl pb-5'>Qzone</h2>
                <div className="div">
                    <img className='w-full pb-5' src={swim} alt="" />
                    <img className='w-full pb-5' src={classroom} alt="" />
                    <img className='w-full pb-5' src={play} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Qzone;