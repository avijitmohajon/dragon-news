import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { MdOutlineShare } from 'react-icons/md';


const NewsCard = ({ news }) => {
    console.log(news);
    const {
        author,
        img,
        name,
        published_date,
        title,
        image_url,
        details,
        rating,
        total_view,
    } = news;
    return (
        
            <div className="max-w-md bg-base-200 border rounded-lg  p-4 mx-auto ">
                {/* Header */}
                <div className="flex items-center mb-4 bg-base-300 p-3 rounded-md">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                        <h2 className="text-md font-bold">{author.name}</h2>
                        <p className="text-sm text-gray-500">{author.published_date}</p>
                    </div>
                    <div className="ml-auto">
                        {/* Icons for share or bookmark */}
                        <button className="mr-2">
                            <MdOutlineShare></MdOutlineShare>
                        </button>
                        <button className="">
                            <FaRegBookmark></FaRegBookmark>
                        </button>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{title}</h3>

                {/* Main Image */}
                <img src={image_url} alt="News" className="w-full rounded-lg mb-4" />

                {/* Details */}
                <p className="text-gray-600 text-sm mb-4">
                    {details}... 
                    <br />
                    <span className="btn btn-xs text-gray-700 btn-outline mt-2 outline-1">Read More</span>
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-gray-500">
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">&#9733;</span>
                        <span className="font-bold">{rating.number}</span>
                    </div>

                    {/* Total Views */}
                    <div className="flex items-center space-x-1">
                        <span className="text-gray-500">&#128065;</span>
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        
    );
};

export default NewsCard;