import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NewsDetailsCart from '../components/NewsDetailsCart';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {newsId} = useParams();
    
    const [news, setNews] = useState({});
    // console.log(data, newsId, news);

    useEffect(()=>{
        const newsDetails = data.find(singleNews=> singleNews.id == newsId);
        setNews(newsDetails);
    },[data, newsId])

    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <NewsDetailsCart key={newsId} news={news}></NewsDetailsCart>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;