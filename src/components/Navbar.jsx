import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogout = ()=>{
        logOut().then(()=>{
            alert("successfully logged out!")
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div>{user && user.name}</div>
            <div className="nav flex gap-3 text-accent">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-2">
                <img className='h-9 w-9 rounded-full' src={`${user ? user.photoURL : userimg}`} alt="" />
                {
                    user ? (<button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button>) : (<Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>)
                }

            </div>
        </div>
    );
};

export default Navbar;
