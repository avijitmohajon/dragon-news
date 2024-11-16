import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-3 items-center  p-2 bg-base-200'>
            <p className='bg-red-600 text-base-200 px-3 py-2 font-semibold'>Latest</p>
            {/* <p className='p'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p> */}
            <Marquee pauseOnHover={true} className='flex space-x-24'>
                <Link to="/news">Match Highlights: Germany vs Spain — as it happened !</Link>
                <Link to="/news">Match Highlights: Germany vs Spain — as it happened !</Link>
                <Link to="/news">Match Highlights: Germany vs Spain — as it happened !</Link>
                <Link to="/news">Match Highlights: Germany vs Spain — as it happened !</Link>
            </Marquee>
   

        </div> 
    );
};

export default LatestNews;