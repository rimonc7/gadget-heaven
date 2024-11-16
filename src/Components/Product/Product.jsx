import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
    const { product_title, product_image, price,product_id } = product 
    return (
        <div>
            <div className="card card-compact shadow-xl p-4">
                <figure className="bg-white rounded-2xl mt-3">
                    <img
                        src={product_image}
                        alt="" />
                </figure>
                <div className="m-3">
                    <h2 className="card-title">{product_title}</h2>
                    <p className="my-2">Price: ${price}</p>
                    <div className="card-actions justify-start">
                        <NavLink to={`/product/${product_id}`} className="btn bg-white rounded-2xl text-[#9538E2]"> View Details</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;