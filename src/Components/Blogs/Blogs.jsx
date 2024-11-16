import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const blogs = useLoaderData();

    return (
        <div className=" mx-3 lg:mx-7 mb-2">
            <div className="hero bg-[#9538E2] pb-3 rounded-b-3xl">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold mt-8 text-white">Blog</h1>
                        <p className="py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mx-7 my-4 md:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map (blog=> <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>

        </div>
    );
};

export default Blogs;