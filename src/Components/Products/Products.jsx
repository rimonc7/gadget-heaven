import { useEffect, useState } from "react";
import Product from "../Product/Product";
import NotFound from "../NotFound/NotFound";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [notfound, setNotFound] = useState(false)

    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    const filterResult = category => {
        const filteredResult = products.filter(product => product.category === category);
        setActiveCategory(category);
        if (category === "All") {
            setFilteredProducts(products);
            setNotFound(false)
        }
        else if (filteredResult.length > 0) {
            setFilteredProducts(filteredResult);
            setNotFound(false)
        }
        else {
            setFilteredProducts([])
            setNotFound(true)
        }
    };
    const activeBtnStyle = category => {
        return `btn ${activeCategory === category ? "bg-[#9538E2] text-white" : ""}`
    };

    return (
        <div>
            <h2 className="text-center font-bold text-3xl mb-4 mx-3">Explore Cutting-Edge Gadgets</h2>
            <div className="block lg:flex max-w-7xl mx-auto justify-between gap-7 mb-7">
                <aside className="flex flex-col bg-white h-full border p-14 mt-5 gap-4 rounded-xl mx-3 lg:mx-0">
                    <button onClick={() => filterResult("All")} className={activeBtnStyle("All")}>All Products</button>
                    <button onClick={() => filterResult("Audio")} className={activeBtnStyle("Audio")}>Audio</button>
                    <button onClick={() => filterResult("Wearables")} className={activeBtnStyle("Wearables")}>Wearables</button>
                    <button onClick={() => filterResult("Smart Home")} className={activeBtnStyle("Smart Home")}>Smart Home</button>
                    <button onClick={() => filterResult("Mobile")} className={activeBtnStyle("Mobile")}>Mobile</button>

                </aside>
                <div className="border grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mx-3">
                    {
                        notfound ? ( <div className="lg:col-span-2 w-full text-center align-middle"><NotFound></NotFound></div>) : (filteredProducts.map(product => (
                            <Product key={product.product_id} product={product}> </Product>
                        )))

                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
