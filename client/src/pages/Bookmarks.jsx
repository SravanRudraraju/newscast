import React from 'react'
import NewsCard from '../components/NewsCard'
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";

const Bookmarks = ({bookmarks , addBookmarks}) => {
  
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
                My Bookmarks
            </h1>

            {bookmarks.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center py-20">
                    <BsBookmark className="text-5xl text-gray-400 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-700">
                        No bookmarks yet
                    </h2>
                    <p className="text-gray-500 mt-2 mb-6">
                        Save articles you want to read later.
                    </p>
                    <Link
                        to="/"
                        className="px-5 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors duration-200"
                    >
                        Browse News
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {bookmarks.map((news) => (
                        <NewsCard
                            key={news._id}
                            news={news}
                            bookmarks={bookmarks}
                            addBookmarks={addBookmarks}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Bookmarks
