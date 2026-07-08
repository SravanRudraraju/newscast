import React from 'react'
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const NewsCard = ({ news }) => {


    return (
        <div>
            <div className="h-[560px] flex flex-col  w-full rounded-xl overflow-hidden bg-white shadow-md">
                <div className="relative">
                    <img src={news.urlToImage} alt={news.title} className='w-full h-52 object-cover' />
                    <button
                        className="absolute top-0 right-3 text-3xl text-red-800">
                        <BsBookmark />
                    </button>
                </div>
                <div className='flex flex-col h-full p-4'>
                    <div className='flex justify-between items-center text-sm text-gray-500 mb-2'>
                        <span>{news.source.name}</span>
                        <span>{new Date(news.publishedAt).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                        })}</span>
                    </div>
                    <h2 className='text-xl font-bold mb-2 line-clamp-4'>
                        {news.title}
                    </h2>
                    <p className='text-gray-800 mb-4 line-clamp-4'>{news.content}</p>
                    <div className='flex justify-between items-center mt-auto'>
                        <span className='text-sm text-gray-500'>By {news.author}</span>
                        <a className='text-gray-700 hover:text-blue-700' href={news.url} target='_blank'>Read more...</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewsCard
