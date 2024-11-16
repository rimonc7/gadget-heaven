import { NavLink, useLocation } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";


const NavBar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const links = <>
        <li><NavLink to="/" className={({ isActive }) => isActive && isHome ? "text-[#9538E2] mx-2 btn" : "text-[#9538E2] mx-2 btn"}>Home</NavLink></li>
        <li><NavLink to="/statistics" className={({ isActive }) => isActive || isHome ? "text-black mx-2 btn" : "text-[#9538E2] mx-2 btn"}>Statistics</NavLink></li>
        <li><NavLink to="/dashboard" className={({ isActive }) => isActive || isHome ? "text-black mx-2 btn" : "text-[#9538E2] mx-2 btn"} >Dashboard</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => isActive || isHome ? "text-black mx-2 btn" : "text-[#9538E2] mx-2 btn"} >Blog</NavLink></li>
    </>
    return (
        <div className=' mx-3 lg:mx-7 pt-5'>
            <div className={`navbar px-3 lg:px-20 rounded-t-3xl ${isHome ? "bg-[#9538E2]" : "bg-white"} `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className={`text-xl font-bold navbar-center ml-8 lg:ml-0 ${isHome ? "text-white" : "text-black"}`}>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {links}
                    </ul>
                </div>
                <div className={`navbar-end font-bold text-2xl gap-4 ${isHome ? "text-white" : "text-black"}`}>
                    <CiShoppingCart />
                    <CiHeart />
                </div>
            </div>
        </div>

    );
};

export default NavBar;