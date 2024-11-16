import { useLoaderData } from "react-router-dom";
import { getWishList, removeWishList } from "../Utilities/utlities";
import { useState,useEffect } from "react";
import { TiDelete } from "react-icons/ti";

const WishList = () => {
    const products = useLoaderData()
    const [wishList, setWishList] = useState([])

    useEffect(() => {
        const wishListId = getWishList();
        const wishListIdInt = wishListId.map(id => parseInt(id));
        const product = products.filter(product => wishListIdInt.includes(product.product_id))
        setWishList(product)
    }, [])


    const handleRemove = (id) => {
        const updatedWishList = wishList.filter(product => product.product_id !== id);
        setWishList(updatedWishList);
        removeWishList(id)
    };

    return (
        <div>
            <div className="max-w-7xl ml-3 lg:mx-auto my-11">
                <h3 className="font-bold text-2xl">WishList</h3>
            </div>
            <ul>
                {wishList.map((product) => (
                    <div className="card card-side bg-base-100 shadow-xl mx-3 my-3" key={product.product_id}>
                        <figure className="w-52">
                            <img
                                src={product.product_image}
                                alt={product.product_title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.product_title}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleRemove(product.product_id)} className="btn btn-primary"><TiDelete />
                                </button>
                            </div>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};
export default WishList;