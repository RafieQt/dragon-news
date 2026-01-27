import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";

const NewsDetailsCart = ({news}) => {
    return (
        <div>
            <img className='w-full object-cover pr-4' src={news.image_url} alt="" />
            <h2 className='text-2xl pr-4 mt-3'>
                
                {news.details}
            </h2>
            <Link className='btn btn-secondary mt-3 ' to={`/category/${news.category_id}`}><FaArrowLeft /> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCart;