import React from 'react'
import logo from "../assets/NClogo.png"
import profile from "../assets/profile.png"
import bookmark from "../assets/bookmark.png"
import { Link, Links } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    const categories = ["business", "sports", "entertainment", "Technology", "health", "science"]
    return (
        <nav className="w-full sticky top-0 z-50 flex items-center justify-between bg-white border-b border-gray-200 px-4 xl:px-8 py-4 shadow-sm">
            
            <div className="flex items-center gap-3 shrink-0"> 
                <button className="block xl:hidden text-3xl">
                    <HiMenu />
                </button>
                <Link className="shrink-0 text-3xl font-black text-red-700 tracking-tight" to="/"> <img className="w-10 h-10 rounded-full cursor-pointer" src={logo} alt="logo" /></Link></div>
            <div className="hidden xl:flex shrink-0">
                <ul className="flex items-center gap-6 ">
                {categories.map((category) => (
                    <li key={category} className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer transition-colors duration-200">
                        <Link to="/">{category}</Link>
                    </li>
                ))}
            </ul></div>
            <div  className="flex-1 mx-4 max-w-xs md:max-w-sm lg:max-w-md"><input   className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500" type="search" placeholder='search news...' /></div>
            <div className="flex items-center gap-4 ">
                <Link to="/bookmarks" className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"><img className='h-8 w-10 hidden md:block' src={bookmark} alt="" /></Link>

                <img className="w-9 h-9 rounded-full cursor-pointer shrink-0" src={profile} alt="profile" />
            </div>

        </nav>
    )
}

export default Navbar
