import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Legend } from 'recharts';

const Statistics = () => {
    const data = [
        {
            "product_id": 1,
            "product_title": "Wireless Bluetooth Earbuds",
            "price": 59.99
        },
        {
            "product_id": 2,
            "product_title": "Noise Cancelling Headphones",
            "price": 120.00
        },
        {
            "product_id": 3,
            "product_title": "Portable Waterproof Speaker",
            "price": 79.99
        },
        {
            "product_id": 4,
            "product_title": "High Fidelity Headphones",
            "price": 99.99
        },
        {
            "product_id": 5,
            "product_title": "True Wireless Sports Earbuds",
            "price": 69.99
        },
        {
            "product_id": 6,
            "product_title": "Smart Noise Earbuds",
            "price": 89.99
        },
        {
            "product_id": 7,
            "product_title": "Smart Fitness Watch",
            "price": 129.99
        },
        {
            "product_id": 8,
            "product_title": "Advanced Sports Smartwatch",
            "price": 199.99
        },
        {
            "product_id": 9,
            "product_title": "Smart Home Assistant Speaker",
            "price": 99.99
        },
        {
            "product_id": 10,
            "product_title": "Smart Light Bulb Kit",
            "price": 59.99
        }
    ];

    return (
        <div className=" mx-3 lg:mx-7 mb-2">
            <div className="hero bg-[#9538E2] pb-3 rounded-b-3xl">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold mt-8 text-white">Statistics</h1>
                        <p className="py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <div className='max-w-2xl mx-auto my-5'>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data} barCategoryGap="30%">
                        <Bar dataKey="price" fill="#8884d8" />
                        <XAxis dataKey="product_title" />
                        <YAxis />
                        <Legend />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
