import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 p-4 bg-base-200 '>
            <p className='text-white bg-secondary p-2'>Latest</p>
            <Marquee className='flex gap-3' pauseOnHover={true} speed={60}>   
                <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, alias!</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;