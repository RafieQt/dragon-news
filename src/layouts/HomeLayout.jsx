import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';
import FindUs from '../components/HomeLayout/FindUs';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigate();
    return (
        <div>
            <header>
                <Header></Header>
                
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-7'>
                    <Navbar ></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="col-span-6">
                    {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>

                <aside className='col-span-3'>
                    <RightAside></RightAside>   
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;