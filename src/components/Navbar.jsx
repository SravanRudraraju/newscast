import React from 'react'
import logo from "../assets/react.svg"
import { Link, Links } from 'react-router-dom'

const Navbar = () => {
    const categories = ["business", "sports", "entertainment", "Technology" , "health" , "science"]
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between bg-white border-b border-gray-200 px-8 py-4 shadow-sm">
            <div> <Link to="/"> <img className="w-10 h-10 cursor-pointer" src={logo} alt="logo" /></Link></div>
            <div><ul className="flex items-center gap-6">
                {categories.map((category) => (
                    <li key={category} className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer transition-colors duration-200">
                       <Link to="/">{category}</Link> 
                    </li>
                ))}
            </ul></div>
            <div><input className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500" type="search" placeholder='search news...' /></div>
            <div className="flex items-center gap-4">
                <Link to="/bookmarks" className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200">bookmarks</Link>
                
                <img className="w-8 h-8 rounded-full cursor-pointer" src={logo} alt="profile" />
            </div>

        </nav>
    )
}

export default Navbar
