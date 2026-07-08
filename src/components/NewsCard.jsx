import React from 'react'
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const NewsCard = ({ news }) => {


    return (
        <div>
            <div className="w-full rounded-xl overflow-hidden bg-white shadow-md">
                <div className="relative">
                    <img src={news.urlToImage} alt={news.title} className='w-full h-52 object-cover' />
                    <button
                        className="absolute top-0 right-3 text-3xl text-red-800">
                        <BsBookmark />
                    </button>
                </div>
                <div className='p-4'>
                    <div className='flex justify-between items-center text-sm text-gray-500 mb-2'>
                        <span>{news.source.name}</span>
                        <span>{news.publishedAt}</span>
                    </div>
                    <h2 className='text-xl font-bold mb-2'>
                        {news.title}
                    </h2>
                    <p className='text-gray-800 mb-4'>{news.content}</p>
                    <div className='flex justify-between items-center'>
                        <span className='text-sm text-gray-500'>By {news.author}</span>
                        <a  className='text-gray-700 hover:text-blue-700' href={news.url}>Read more...</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewsCard
