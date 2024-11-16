import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getPreviousCart, removeFromLS } from "../Utilities/utlities";

const Cart = () => {
    const products = useLoaderData();
    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const cartId = getPreviousCart();
        const cartIdInt = cartId.map(id => parseInt(id));
        const productList = products.filter(product => cartIdInt.includes(product.product_id));
        setCartList(productList);
        const totalMoney = productList.reduce((accumulator, product) => accumulator + product.price, 0);
        setTotal(totalMoney);
    }, [products]);

    const handleRemove = (id) => {
        const updatedCartList = cartList.filter(product => product.product_id !== id);
        setCartList(updatedCartList);
        removeFromLS(id);
        const newTotal = updatedCartList.reduce((accumulator, product) => accumulator + product.price, 0);
        setTotal(newTotal);
    };

    const handleSorted = () => {
        const sortList = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sortList)
    }

    const handlePurchase = () => {
        document.getElementById("my_modal_5").showModal()
        setTimeout(() => {
            setTotal(0);
            setCartList([])
            localStorage.clear()
        }, 2000);
    }
    return (
        <div>
            <div>
                <div className="flex flex-col lg:flex-row justify-between max-w-full lg:max-w-7xl mx-auto my-11 px-4">
                    <h3 className="font-bold text-center text-2xl mb-4 lg:mb-0">Cart</h3>
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <h3 className="font-bold text-xl lg:text-2xl">Total Cost: ${total.toFixed(2)}</h3>
                        <button onClick={handleSorted} className="btn w-full lg:w-auto">Sort By Price</button>
                        <button onClick={handlePurchase} className="btn w-full lg:w-auto">Purchase</button>
                    </div>
                </div>
            </div>
            <ul>
                {cartList.map((product) => (
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
                                <button onClick={() => handleRemove(product.product_id)} className="btn btn-primary">Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations</h3>
                    <p className="py-4">Thanks for Choosing Us</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <NavLink to="/" className="btn">Close</NavLink>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;
