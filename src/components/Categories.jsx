import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/categories.json").then((res)=> res.json());
const Categories = () => {
    
    const categories = use(categoryPromise);
    return (
        <div>
            <p className='font-bold'>All Categories ({categories.length})</p>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map((category) => <NavLink className={({isActive})=>`${isActive ? "bg-base-300" : "bg-white text-accent"} btn border-0  hover:bg-base-200`} key={category.id} to={`category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;