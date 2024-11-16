import { useLoaderData, useParams } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { addWishListLs, adToLs } from "../Utilities/utlities";
import ReactStars from "react-rating-stars-component";
import React from "react";

const ProductDetails = () => {
    const [disable, setDisable] = useState(false);
    const { productId } = useParams();
    const products = useLoaderData();
    const id = parseInt(productId);
    const product = products.find(product => product.product_id === id);
    const { product_id, product_title, product_image, price, description, specification, availability, rating } = product;

    const handleAddToCart = (id) => {
        adToLs(id)
        toast.success("Added to Cart")
    }

    const handleAddToWish = (id) => {
        addWishListLs(id)
        toast.success("Added to WishList")
        setDisable(true)
    }

    const ratingChanged = (newRating) => {
        console.log(`New rating: ${newRating}`);
    };

    return (
        <div className="mx-3 lg:mx-7">
            <div className="hero bg-[#9538E2] pb-40 rounded-b-3xl">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold mt-8 text-white">Product Details</h1>
                        <p className="py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-white border-2 border-white rounded-xl mx-4 lg:mx-32 relative inset-x-0 -top-40">
                    <div className=" block lg:flex bg-base-100">
                        <figure className="max-w-md">
                            <img src={product_image} alt={product_title} />
                        </figure>
                        <div className="my-4 mx-4">
                            <h2 className="card-title text-3xl">{product_title}</h2>
                            <p className="font-bold my-1"> Price: ${price}</p>
                            <button className="btn my-1 text-[#309C08] bg-white border-[#309C08] rounded-3xl px-5">
                                {availability ? "In Stock" : "Out Of Stock"}
                            </button>
                            <p>{description}</p>
                            <p className="font-bold my-1">Specifications</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                                {specification.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ul>
                            <p className="font-bold my-1">Rating</p>
                            <div className="flex gap-3"> 
                                <ReactStars
                                    count={5}
                                    value={rating}
                                    onChange={ratingChanged}
                                    size={24}
                                    isHalf={true}
                                    activeColor="#ffd700"
                                />
                                <p className="mt-2">{rating}</p>
                            </div>
                            <button onClick={() => handleAddToCart(product_id)} className="btn text-white bg-[#9538E2] rounded-3xl px-5 my-1 font-bold text-xl">
                                Add to Cart <CiShoppingCart />
                            </button>
                            <button onClick={() => handleAddToWish(product_id)} disabled={disable} className="p-3 border-2 rounded-full ml-3 text-xl">
                                <FaRegHeart />
                            </button>
                        </div>
                    </div>
                    <ToastContainer position="top-center" autoClose={2000} theme="colored" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
