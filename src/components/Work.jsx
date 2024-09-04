import React from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";



const Work = () => {
    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);

    const workInfoData = [
        {
            image: "./public/pick-meals-image.png",
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt expedita blanditiis explicabo excepturi, commodi qui dolorum amet adipisci perspiciatis laudantium, esse.",
        },
        {
            image: "./public/delivery-image.png",
            title: "Fast Delivery",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt expedita blanditiis explicabo excepturi, commodi qui dolorum amet adipisci perspiciatis laudantium, esse.",
        },
        {
            image: "./public/choose-image.png",
            title: "Enjoy Your Meal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt expedita blanditiis explicabo excepturi, commodi qui dolorum amet adipisci perspiciatis laudantium, esse.",
        },
    ];

    return (
        <div id="work" className="flex flex-col items-center mt-20 font-poppins">
            <h1 className="text-yellow-500 text-5xl font-extrabold md:text-1xl md:mt-5" data-aos="zoom-in">How It Works</h1>
            <p className="mt-4 text-center mx-5 md:mx-40 max-w-md line-clamp-3" data-aos="zoom-in">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt expedita blanditiis explicabo excepturi, commodi qui dolorum amet adipisci perspiciatis laudantium, esse.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 " data-aos="zoom-in">
                {workInfoData.map((data, index) => (
                    <div key={index} className="text-center flex flex-col items-center w-80 h-auto p-4 border border-gray-200 rounded-lg shadow-lg mt-4">
                        <img src={data.image} alt={data.title} className="w-32 h-auto mb-4" />
                        <h2 className="text-xl font-bold">{data.title}</h2>
                        <p className="mt-2">{data.text}</p>
                    </div>
                ))};
            </div>
        </div>
    );
};

export default Work;
