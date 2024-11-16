
const Blog = ({ blog }) => {
    const {title, image,author } = blog;
    return (
        <div>
            <div className="card card-compact shadow-xl p-4">
                <figure className="bg-white rounded-2xl mt-3">
                    <img
                        src={image}
                        alt="" />
                </figure>
                <div className="m-3">
                    <h2 className="card-title">{title}</h2>
                    <p className="my-2">By: {author}</p>
                    <div className="card-actions justify-center">
                        <button className="btn bg-white rounded-2xl text-[#9538E2]">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;