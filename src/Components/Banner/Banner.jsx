import { NavLink } from "react-router-dom";
import bannerImg from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="mx-3 lg:mx-7">
            <div className="hero bg-[#9538E2] pb-40 rounded-b-3xl">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold mt-11 text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <NavLink to="/dashboard" className="btn bg-white">Shop Now</NavLink>
                    </div>
                </div>
            </div>
            <div>
                <div className=" bg-white bg-opacity-25 border-2 border-white p-4 rounded-xl mx-4 lg:mx-32 relative inset-x-0 -top-40 ">
                    <div className="bg-white rounded-xl text-center">
                    <img className=" h-[300px] lg:h-[563px] object-cover w-full rounded-xl" src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Banner;