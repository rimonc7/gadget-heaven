import { NavLink, Outlet, useLocation } from "react-router-dom";
import './dashboard.css'

const Dashboard = () => {
    const location = useLocation();
    const isCartActive = location.pathname === "/dashboard" || location.pathname === "/dashboard/cart";
    return (
        <div className=" mx-3 lg:mx-7 mb-2">
            <div className="hero bg-[#9538E2] pb-3 rounded-b-3xl">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold mt-8 text-white">Dashboard</h1>
                        <p className="py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <NavLink to="cart" className={({ isActive }) => (`btn px-8 mr-4 ${isActive ? 'active_btn' : ''}`)}>Cart</NavLink>
                        <NavLink to="wishlist" className={({ isActive }) => (`btn ${isActive ? 'active_btn' : ''}`)} >WishList</NavLink>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;