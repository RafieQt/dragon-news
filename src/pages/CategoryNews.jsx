import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewCart from '../components/HomeLayout/NewCart';

const CategoryNews = () => {
    const { id } = useParams();
    const news = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == 0) {
            setCategoryNews(news);
            return;
        }
        else if (id == 1) {
            const filteredNews = news.filter(newfor => newfor.others.is_today_pick == true);
            setCategoryNews(filteredNews);
            return;
        } else {
            const filteredNews = news.filter(newfor => newfor.category_id == id);
            setCategoryNews(filteredNews);
        }
    }, [news, id]);

    return (

        <div>
            <p className='pb-3'>Total {categoryNews.length} news Found.</p>

            <div className='grid grid-cols-1 gap-3'>
                {categoryNews.map(news=> <NewCart key={news.id} news={news}></NewCart>)}
            </div>
        </div>
    );
};

export default CategoryNews;