import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    // console.log(news);

    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p className='text-gray-500 text-sm'>{news.length} news found in this category</p>
            <div className='space-y-5 border-none'>
                {
                    news.map((singleNews, idx) => (<NewsCard 
                    key={idx}
                    news={singleNews}

                    ></NewsCard>))
                }
            </div>




        </div>
    );
};

export default CategoryNews;